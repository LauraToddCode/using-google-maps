import React, { useState } from "react";
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow 
} from "react-google-maps";
import properties from "../properties.json";


function MapComponent() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    return (
        <GoogleMap 
            defaultZoom={12}
            defaultCenter={{ lat: 51.23651480350905, lng: -0.5703780104611352 }}
        >
            {properties.map(property => (
                <Marker 
                    key={property.id} 
                    position={{
                        lat: property.lat, 
                        lng: property.lng
                    }}
                    icon={{
                        url: "https://i.imgur.com/FpHIBa7.png",
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                    onClick ={() => {
                        setSelectedProperty(property);
                    }}
                />
            ))}

            {selectedProperty && (
                <InfoWindow
                    position={{
                        lat: selectedProperty.lat, 
                        lng: selectedProperty.lng
                    }}
                    onCloseClick={() => {
                        setSelectedProperty(null);
                    }}
                >
                    <div>
                        <h4>{selectedProperty.name}</h4>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

function Map() {
    return (
        <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCVc5BV5f51pj4r0K3RhGy4EDVGFKyGfqo`}
            loadingElement={<div style={{ height:"100%"}} />}
            containerElement={<div style={{ height:"100%"}} />}
            mapElement={<div style={{ height:"100%"}} />}
        />
    )
}

export default Map;