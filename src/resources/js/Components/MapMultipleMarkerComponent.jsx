// src/MyMapComponent.js
import React, { useEffect, useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import { Inertia } from "@inertiajs/inertia";

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

    const [open, setOpen] = useState({
        state: false,
        event: undefined,
    });

    const handleGoEvent = (id) => {
        Inertia.get(`/event/${parseInt(id)}`);
    }

    useEffect(() => {
        console.log(open);
    }, [open])

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
                            <>
                                <AdvancedMarker
                                    position={{
                                        lat: parseFloat(
                                            event.location.latitude
                                        ),
                                        lng: parseFloat(
                                            event.location.longitude
                                        ),
                                    }}
                                    onClick={() => setOpen({
                                        state: true,
                                        event: event
                                    })}
                                />
                            </>
                        ))}

                    {open.state && (
                        <InfoWindow
                            position={{
                                lat: parseFloat(open.event.location.latitude),
                                lng: parseFloat(open.event.location.longitude),
                            }}
                            onClose={() => setOpen(false)}
                        >
                            <div className="text-gray-700 text-lg flex flex-col">
                                <p> {open.event.name} </p>
                                <p> {open.event.location.name} </p>
                                <p> {open.event.climbing_level.grade} </p>
                                <button
                                    className="p-3 bg-blue-700 rounded text-white underline"
                                    onClick={() => handleGoEvent(open.event.id)}
                                >
                                    Go
                                </button>
                            </div>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    );
}
