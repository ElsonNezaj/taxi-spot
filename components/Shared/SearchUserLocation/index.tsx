import React, { ReactElement } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchUserLocation } from "../../../redux/API/fetchDestination";
import { API_KEY } from "../../../assets/key/Google_API/api";
import { handleConfirmTrip, saveUserData } from "../../../redux/places/placesSlice";
import { disableEditLocation } from "../../../redux/app/appSlice";

export interface LatLng {
  latitude: number,
  longitude: number
}

export default function SearchUserLocation(): ReactElement {
  const dispatch = useAppDispatch()
  const isEditView = useAppSelector(state => state.app.isEditLocationEnabled)
  const [placeValue, setPlaceValue] = useState<string>("")

  const handleUserLocation = (placeID: string) => {
    fetchUserLocation(placeID)
    dispatch(disableEditLocation())
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
          position: "relative",
          zIndex: 2,
          width: "100%",
        },
        listView: {
          width: "99%",
          margin: 5,
          marginTop: 5,
          alignSelf: "center",
          maxHeight: 150,
          overflow: "scroll",
          zIndex: 0,
          position: "absolute",
          top: 40,
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
          borderRadius: 75,
          elevation: 5,
          borderWidth: 2,
          borderColor: "#8478A3",
          marginLeft: isEditView ? 0 : 20,
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