import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import { SetStateAction, useEffect, useState } from "react";

interface Iprops {
  setIsBackDropVisble: React.Dispatch<SetStateAction<boolean>>,
  isBackdropVisible: boolean,
}

export default function SearchPlaces({ setIsBackDropVisble }: Iprops) {
  const [placeValue, setPlaceValue] = useState<string>("")

  if (placeValue.length >= 3) {
    setIsBackDropVisble(true)
  } else {
    setIsBackDropVisble(false)

  }

  return (
    <GooglePlacesAutocomplete
      placeholder='Zgjidhni destinacionin tuaj'
      query={{ key: "AIzaSyDeH1CPnvMotWBiC2NbQWiMWIp17U3WZkM", language: "en", components: "country:AL" }}
      listViewDisplayed={placeValue.length <= 3 ? false : true}
      enableHighAccuracyLocation
      keyboardShouldPersistTaps="never"
      minLength={3}
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