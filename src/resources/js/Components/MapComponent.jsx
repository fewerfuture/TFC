// src/MyMapComponent.js
import React from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";


export default function MapComponent({
    eventLatitude,
    eventLongitude,
    envApiKey,
    envMapID,
}) {


    const latitude = parseFloat(eventLatitude);
    const longitude = parseFloat(eventLongitude);

    const defaultCenter = {
        lat: isNaN(latitude) ? 40.42579089487254 : latitude,
        lng: isNaN(longitude) ? -3.713155412568466 : longitude,
    };

    return (
        <APIProvider apiKey={envApiKey}>
            <div className="h-96 w-full">
                <Map
                    defaultZoom={12}
                    defaultCenter={defaultCenter}
                    mapId={envMapID}
                >
                    <AdvancedMarker position={defaultCenter} />
                </Map>
            </div>
        </APIProvider>
    );
}
