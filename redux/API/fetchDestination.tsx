import { API_KEY } from "../../assets/key/Google_API/api"
import { setDestination, setUserLocation } from "../places/placesSlice";
import { store } from "../store";

export const fetchDestination = async (placeID: string) => {
  const api = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=geometry&key=${API_KEY}`

  fetch(api)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const geometry = data.result.geometry;
      if (geometry) {
        const location = geometry.location;
        store.dispatch(setDestination({ latitude: location.lat, longitude: location.lng }))
      } else {
        console.error('No geometry found in the response');
      }
    })
    .catch(error => {
      console.error('Error fetching place details:', error);
    });
}

export const fetchUserLocation = async (placeID: string) => {
  const api = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=geometry&key=${API_KEY}`

  fetch(api)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const geometry = data.result.geometry;
      if (geometry) {
        const location = geometry.location;
        store.dispatch(setUserLocation({ latitude: location.lat, longitude: location.lng }))
      } else {
        console.error('No geometry found in the response');
      }
    })
    .catch(error => {
      console.error('Error fetching place details:', error);
    });
}