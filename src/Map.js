import React from 'react'
import WrappedMap from './WrappedMap'

class MapContainer extends React.Component {
	
	render() {
		return(

			<WrappedMap
			  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKK3lYbejjvqvIyhc3P7tKR6jNLILNA6I&v=3.exp&libraries=geometry,drawing,places"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `100vh` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			  markers={this.props.markers}
			/>
		)
	}
}

export default MapContainer 
