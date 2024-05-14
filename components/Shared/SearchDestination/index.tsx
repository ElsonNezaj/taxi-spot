import React, { ReactElement } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { fetchDestination } from "../../../redux/API/fetchDestination";
import { API_KEY } from "../../../assets/key/Google_API/api";

export interface LatLng {
  latitude: number,
  longitude: number
}

export default function SearchDestination(): ReactElement {
  const currentStatePlaces = useAppSelector(state => state.places.currentStatePlaces)
  const [placeValue, setPlaceValue] = useState<string>("")

  const handleDestination = (placeID: string) => {
    fetchDestination(placeID)
  }

  return (
    <GooglePlacesAutocomplete
      placeholder={currentStatePlaces === "destination" ? 'Zgjidhni destinacionin tuaj' : "Zgjidhni vendndodhjen tuaj"}
      query={{ key: API_KEY, language: "en", components: "country:AL" }}
      listViewDisplayed={placeValue.length <= 3 ? false : true}
      enableHighAccuracyLocation
      keyboardShouldPersistTaps="always"
      minLength={3}
      onPress={(data) => {
        handleDestination(data.place_id)
      }}
      textInputProps={{
        onChangeText: (text) => setPlaceValue(text),
        value: placeValue
      }}
      styles={{
        container: {
          position: "absolute",
          zIndex: 2,
          width: "100%",
          top: Constants.statusBarHeight + 20,
          alignSelf: "center"
        },
        listView: {
          width: "99%",
          margin: 5,
          marginTop: 5,
          alignSelf: "center",
          maxHeight: 200,
          overflow: "scroll",
          zIndex: 0,
        },
        row: {
          backgroundColor: "#8478A3",
          paddingLeft: 5,
        },
        description: {
          color: "white",
        },
        poweredContainer: {
          display: "none"
        },
        textInputContainer: {
          width: "80%",
          alignSelf: "center",
          borderRadius: 75,
          elevation: 5,
          borderWidth: 2,
          borderColor: "#8478A3",
        },
        textInput: {
          height: "100%",
          borderRadius: 75,
          color: "#8478A3",
          backgroundColor: "#fff",
          fontSize: 16,
          fontWeight: "bold"
        },
      }}
    />
  )
}