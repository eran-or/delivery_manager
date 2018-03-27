import React, { Component } from 'react'
import fetchGoogleMaps from 'fetch-google-maps'

export default class GoogleMap extends Component {

  shouldComponentUpdate() {
    return false;
  }
  markers = []
  componentWillReceiveProps(nextProps) {
    for (var i=0; i<this.markers.length; i++) {
      
      this.markers[i].setMap(null)
      
    }
    this.markers = []

    this.geocodeAddress(this.geocoder, this.map, nextProps.addresses)
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng })
  }

  geocodeAddress(geocoder, resultsMap, addresses) {
    
    addresses.forEach(address => {
      
      geocoder.geocode({ 'address': address }, (results, status) => {
        if (status === 'OK') {
          resultsMap.setCenter(results[0].geometry.location)
          this.markers.push(new this.Maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          }))
          
        } else {
          console.log('Geocode was not successful for the following reason: ' + status)
        }
      })
    });
  }

  componentDidMount() {
    fetchGoogleMaps({
      apiKey: 'AIzaSyAMYJdygNgDsaj4ZJmW--cCTxDTMpTRc7w',
      language: 'he',
      libraries: ['places']
    }).then((Maps) => {
      this.Maps = Maps
      this.map = new this.Maps.Map(this.refs.map, {
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: 12
      })
      this.geocoder = new this.Maps.Geocoder()
      const { addresses } = this.props
      this.geocodeAddress(this.geocoder, this.map, addresses);
    });
  }
  render() {
    return (
      <div id="map" ref="map" className={this.props.className} />
    )
  }
}