import React, { useEffect } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function MapInputComponent({
    envApiKey,
    envMapID,
    setData,
    coordinates,
    userCoords,
    location,
    setDataLocationModal,
    ...props
}) {
    const defaultLocation = {
        lat: 40.42579089487254,
        lng: -3.713155412568466,
    };

    const dataLocation = {
        lat: parseFloat(coordinates.lat),
        lng: parseFloat(coordinates.lng),
    };

    const handleMapClick = (event) => {
        const lat = parseFloat(event.detail.latLng.lat);
        const lng = parseFloat(event.detail.latLng.lng);

            if(setData){
                setData("coordinates", { lat, lng })
            }
            else if(setDataLocationModal){
                setDataLocationModal((prevState) => ({
                    ...prevState,
                    latitude: lat,
                    longitude: lng
                }))
            }
        };

    useEffect(() => {
        console.log("dataLocation",dataLocation);
        // console.log("coordinates",coordinates);
    }, []);

    return (
        <>
            <input {...props} type="hidden" value={coordinates} />
            <APIProvider apiKey={envApiKey}>
                <div className="h-96 w-full">
                    <Map
                        mapId={envMapID}
                        defaultCenter={
                            dataLocation.lat != 0 && dataLocation.lng != 0
                                ? dataLocation
                                : userCoords ?? defaultLocation
                        }
                        defaultZoom={userCoords ? 9 : 5}
                        onClick={handleMapClick}
                    >
                        {coordinates && (
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
