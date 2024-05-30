// src/MyMapComponent.js
import React, { useEffect, useState } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function MapMultipleMarkerComponent({
    events,
    envApiKey,
    envMapID,
    userCoords,
}) {
    const defaultLocation = {
        lat: 40.42579089487254,
        lng: -3.713155412568466,
    };

    return (
        <APIProvider apiKey={envApiKey}>
            <div className="h-full w-full">
                <Map
                    defaultZoom={userCoords ? 9 : 5}
                    defaultCenter={userCoords ?? defaultLocation}
                    mapId={envMapID}
                    zoomControl={false}
                    streetViewControl={false}
                    mapTypeControl={false}
                >
                    {events &&
                        events.map((event) => (
                            <AdvancedMarker
                                position={{
                                    lat: parseFloat(event.location.latitude),
                                    lng: parseFloat(event.location.longitude),
                                }}
                                onClick={() => window.location.reload()}
                            />
                        ))}
                </Map>
            </div>
        </APIProvider>
    );
}
