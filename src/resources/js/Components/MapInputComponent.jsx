import React, { useEffect } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function MapInputComponent({
    envApiKey,
    envMapID,
    setData,
    data,
    userCoords,
    ...props
}) {
    const defaultLocation = {
        lat: 40.42579089487254,
        lng:  -3.713155412568466,
    };

    const dataLocation = {
        lat: data.coordinates.lat,
        lng: data.coordinates.lng,
    };

    const handleMapClick = (event) => {
        const lat = parseFloat(event.detail.latLng.lat);
        const lng = parseFloat(event.detail.latLng.lng);
        setData("coordinates", { lat, lng });
    };

    return (
        <>
            <input {...props} type="hidden" value={data.coordinates} />
            <APIProvider apiKey={envApiKey}>
                <div className="h-96 w-full">
                    <Map
                        mapId={envMapID}
                        defaultCenter={userCoords ?? defaultLocation}
                        defaultZoom={10}
                        onClick={handleMapClick}
                    >
                        {data.coordinates && (
                            <AdvancedMarker
                                position={dataLocation}
                            ></AdvancedMarker>
                        )}
                    </Map>
                </div>
            </APIProvider>
        </>
    );
}
