import { useState, useEffect } from 'react';

const useLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.log("An error occurred while fetching your location");
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser");
      }
    };

    getLocation();
  }, []);

  return { latitude, longitude };
};

export default useLocation;
