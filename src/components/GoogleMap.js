import React, { Component } from 'react'
import fetchGoogleMaps from 'fetch-google-maps'

export default class GoogleMap extends Component {

  shouldComponentUpdate() {
    return false;
  }
  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng })

  }

  geocodeAddress(geocoder, resultsMap) {
    //var address = document.getElementById('address').value;
    const {address} = this.props
    geocoder.geocode({ 'address': address }, (results, status) => { 
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location)
        console.log(this.Maps)
        const marker = new this.Maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        })
      } else {
        console.log('Geocode was not successful for the following reason: ' + status)
      }
    })
  }

  componentDidMount() {
    fetchGoogleMaps({
      apiKey: 'AIzaSyAMYJdygNgDsaj4ZJmW--cCTxDTMpTRc7w',
      language: 'en',
      libraries: ['places']
    }).then((Maps) => {
      this.Maps = Maps
      this.map = new this.Maps.Map(this.refs.map, {
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: 8
      })
      const geocoder = new this.Maps.Geocoder()
      this.geocodeAddress(geocoder, this.map);
    });
  }
  render() {
    return (
      <div id="map" ref="map" className={this.props.className} />
    )
  }
}