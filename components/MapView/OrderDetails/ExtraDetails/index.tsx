import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import ActionButtons from "../ActionButtons";

interface IProps {
  handleCancel: () => void
  handleProceed: (details: any) => void
  handleBack: (value: string) => void
}

interface Data {
  name: string,
  phoneNumber: string,
  details: string
}

export function ExtraDetails({ handleCancel, handleProceed, handleBack }: IProps): ReactElement {
  const [data, setData] = useState<Data>({
    name: "",
    phoneNumber: "",
    details: ""
  })

  const handleFinalProceed = () => {
    if (data.name.length > 0 && data.phoneNumber.length > 0) {
      handleProceed(data)
    }
  }

  return (
    <View style={styles.extraContainer}>
      <View style={styles.extraHeader}>
        <TouchableOpacity
          onPress={() => handleBack("car-selection")}
          style={styles.backButton}
        >
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.titleLabel}>Detaje te porosise : </Text>
      </View>
      <View style={styles.extraContent}>
        <TextInput
          onChangeText={(e) => setData({ ...data, ["name"]: e })}
          placeholder="Emer / Mbiemer"
          placeholderTextColor="white"
          style={styles.input}
        />
        <TextInput
          onChangeText={(e) => setData({ ...data, ["phoneNumber"]: e })}
          placeholder="Numer Telefoni (06X XXX XXXX)" inputMode="numeric"
          placeholderTextColor="white"
          style={styles.input}
        />
        <TextInput
          onChangeText={(e) => setData({ ...data, ["details"]: e })}
          placeholder="Detaje shtese rreth vendodhjes tuaj"
          placeholderTextColor="white"
          style={styles.input}
        />
      </View>
      <ActionButtons handleCancel={() => handleCancel()} handleProceed={() => handleFinalProceed()} />
    </View>
  )
}

const styles = StyleSheet.create({
  extraContainer: {
    height: "100%",
    width: "100%",
    padding: 20
  },
  extraHeader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 75,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.2,
    borderColor: "grey"
  },
  backText: {
    fontSize: 18,
    color: "grey",
    fontWeight: "bold",
  },
  titleLabel: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white"
  },
  extraContent: {
    marginTop: 20,
    gap: 10,
    alignItems: "center",
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    height: 40,
    fontSize: 14,
    padding: 5,
    width: "90%",
    borderRadius: 5,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white"
  }
})