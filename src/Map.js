import React from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

const WrappedMap = withScriptjs(withGoogleMap(props => {
	console.log(props.markers)
	const markers = props.markers.map(place => {
		return <MarkerWithLabel
		  position={place['coord']}
		  labelAnchor={place['coord']}
		>
		  <div>
			{place.card.name}
		  </div>
		</MarkerWithLabel>
	})
	console.log(markers)
	return(
		<GoogleMap
		  defaultZoom={12}
		  defaultCenter={{lat: 40.732498, lng: -73.927683}}
		>
		  {markers}
		</GoogleMap>
	)
}
))

class Map extends React.Component {
	
	render() {
		return(

			<WrappedMap
			  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKK3lYbejjvqvIyhc3P7tKR6jNLILNA6I&v=3.exp&libraries=geometry,drawing,places"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `400px` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			  markers={this.props.markers}
			/>
		)
	}
}

export default Map 
