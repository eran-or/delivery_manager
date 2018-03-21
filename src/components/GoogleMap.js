import React, { Component } from 'react'
import fetchGoogleMaps from 'fetch-google-maps'

export default class GoogleMap extends Component {

  shouldComponentUpdate() {
    return false;
  }
  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng })

  }
  componentDidMount() {
    fetchGoogleMaps({
      apiKey: 'AIzaSyAMYJdygNgDsaj4ZJmW--cCTxDTMpTRc7w',
      language: 'en',
      libraries: ['places']
    }).then((Maps) => {
      this.map = new Maps.Map(this.refs.map, {
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: 8
      });
    });
  }
  render() {
    return (
      <div id="map" ref="map" className={this.props.className} />
    )
  }
}