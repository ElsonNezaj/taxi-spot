import React, { ReactElement } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchDestination, fetchUserLocation } from "../../../redux/API/fetchDestination";
import { API_KEY } from "../../../assets/key/Google_API/api";
import { handleConfirmTrip, saveUserData } from "../../../redux/places/placesSlice";

export interface LatLng {
  latitude: number,
  longitude: number
}

export default function SearchUserLocation({ isEditView, setIsEditView }: any): ReactElement {
  const dispatch = useAppDispatch()
  const [placeValue, setPlaceValue] = useState<string>("")

  const handleUserLocation = (placeID: string) => {
    fetchUserLocation(placeID)
    isEditView && setIsEditView(false)
    !isEditView && dispatch(handleConfirmTrip(true))
  }

  return (
    <GooglePlacesAutocomplete
      placeholder={"Zgjidhni vendndodhjen tuaj"}
      query={{ key: API_KEY, language: "en", components: "country:AL" }}
      listViewDisplayed={placeValue.length <= 3 ? false : true}
      enableHighAccuracyLocation
      keyboardShouldPersistTaps="always"
      minLength={3}
      onPress={(data) => {
        handleUserLocation(data.place_id)
        dispatch(saveUserData(data))
      }}
      textInputProps={{
        onChangeText: (text) => setPlaceValue(text),
        value: placeValue
      }}
      styles={{
        container: {
          position: isEditView ? "relative" : "absolute",
          zIndex: 2,
          width: "100%",
          top: isEditView ? "auto" : Constants.statusBarHeight + 20,
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