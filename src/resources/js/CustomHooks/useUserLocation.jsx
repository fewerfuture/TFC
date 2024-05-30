import { useState, useEffect } from "react";

export function useUserLocation() {
    const [userLocation, setUserLocation] = useState(null);
    const [showMap, setShowMap] = useState(false);
    const [attemptLocation, setAttemptLocation] = useState(true);

    useEffect(() => {
        if (attemptLocation && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                    setShowMap(true);
                },
                (error) => {
                    console.error("Error getting user location", error);
                    setTimeout(() => {
                        setAttemptLocation(true);
                    }, 1000);
                }
            );
        } else {
            console.warn("This browser does not support geolocation");
            setAttemptLocation(false);
        }
        setAttemptLocation(false);
    }, [attemptLocation]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!userLocation) {
                setShowMap(true);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [userLocation]);

    return [userLocation, showMap];
}
