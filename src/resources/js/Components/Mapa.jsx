// src/MyMapComponent.js
import React from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
  } from "@vis.gl/react-google-maps";

export default function Mapa({eventLatitude, eventLongitude, envApiKey, envMapID}) {
  const mapStyles = {
    height: "24rem",
    width: "100%"
  };

 // Verifica que las coordenadas sean números
 const latitude = parseFloat(eventLatitude);
 const longitude = parseFloat(eventLongitude);

 // Provee un valor por defecto o maneja el error si las coordenadas no son válidas
 const defaultCenter = {
   lat: isNaN(latitude) ? 0 : latitude,
   lng: isNaN(longitude) ? 0 : longitude
 };


return (
    <APIProvider apiKey={envApiKey} >
        <div style={mapStyles}>
            <Map defaultZoom={16} defaultCenter={defaultCenter} mapId={envMapID}>
                <AdvancedMarker position={defaultCenter}>
                    <Pin></Pin>
                </AdvancedMarker>
            </Map>
        </div>
    </APIProvider>
  );
}
