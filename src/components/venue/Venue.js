//@flow
import * as React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

type PropsType = { google: Object };

const Venue = (props: PropsType): React.Node => (
  <div className="venue-block">
    <div className="indexes">
      <div className="number">05</div>
      <div className="title">Location</div>
    </div>
    <Map
      google={props.google}
      initialCenter={{
        lat: 40.854885,
        lng: -88.081807,
      }}
      zoom={14}
    >
      <Marker name={'Current location'} />
    </Map>
  </div>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyANBYBJVaPjkdc7VR8xC9I3GY5qiHZJuMo',
})(Venue);
