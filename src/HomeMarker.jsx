import React from 'react';
import { Marker } from 'react-google-maps'
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

const style = {
    box: {
        backgroundColor: 'white',
        padding: '20px',
        minWidth: '100px',
        fontSize: '12px',
    }
}

class HomeMarker extends React.Component {

    toggleOpen = (e) => {
        this.props.toggleOpen(this.props.id)
    }

    render() {
        console.log(this.props.place.card)
        const apt = this.props.place.card
        let imgs = null;
        if (apt.attachments.length > 0) {
            imgs = apt.attachments.map(att => {
                return <img src={att.url} alt={att.name} />
            })
        }
        return(
            <Marker
              position={this.props.place['coord']}
              onClick={this.toggleOpen}
            >
                {this.props.isOpen && <InfoBox>
                    <div style={style.box}>
                        {imgs? imgs : null}
                        <h1>{apt.name}</h1>
                        <p>{apt.desc || ''}</p>
                    </div>
                </InfoBox>
                }
            </Marker>
        )
    }

}

export default HomeMarker;
