import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import HomeMarker from './HomeMarker'

class Map extends React.Component {
    state = {
        openCard: null
    }

    toggleOpen = id => {
        if (this.state.openCard === id) {
            this.setState({ openCard: null})
        } else {
            this.setState({ openCard: id})
        }
    }

    render() {
	const markers = this.props.markers.map(place => {
            return <HomeMarker place={place} id={place.card.id} key={place.card.id} isOpen={this.state.openCard === place.card.id} toggleOpen={this.toggleOpen} />
        })
	return(
		<GoogleMap
		  defaultZoom={12}
		  defaultCenter={{lat: 40.732498, lng: -73.927683}}
		>
		  {markers}
		</GoogleMap>
	)
    }
}

export default withScriptjs(withGoogleMap(Map))

