import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import { SetStateAction, useEffect, useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { setDestination } from "../../redux/places/placesSlice";

export default function SearchPlaces() {
  const dispatch = useDispatch()
  const currentStatePlaces = useAppSelector(state => state.places.currentStatePlaces)
  const [placeValue, setPlaceValue] = useState<string>("")

  return (
    <GooglePlacesAutocomplete
      placeholder='Zgjidhni destinacionin tuaj'
      query={{ key: "AIzaSyDeH1CPnvMotWBiC2NbQWiMWIp17U3WZkM", language: "en", components: "country:AL" }}
      listViewDisplayed={placeValue.length <= 3 ? false : true}
      enableHighAccuracyLocation
      keyboardShouldPersistTaps="always"
      minLength={3}
      onPress={(data, details) => {
        if (details) {
          console.log(details)
        }
        const referance = data.reference
        const place_id = data.place_id
        const structure = data.structured_formatting
        dispatch(setDestination({ referance, place_id, structure }))
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
          top: Constants.statusBarHeight + 10,
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