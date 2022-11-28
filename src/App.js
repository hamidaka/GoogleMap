import './App.css';
import {Map,GoogleApiWrapper} from 'google-maps-react'
import { Component } from 'react';

class MapContainer extends Component {
render ()  {
  return (
    <div className="App">
  <Map google={this.props.google} style={{width:"100%" , height:"100%"}} zoom={10} initialCenter={{lat:35.829300 , lng:10.640630}} />
    </div>
  );
}
}

export default GoogleApiWrapper({apiKey:"AIzaSyD4xU8mDdAyKaJOPtrok7jpWbHVS3g3yKg"})(MapContainer);
