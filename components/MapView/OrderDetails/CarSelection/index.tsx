import React, { ReactElement, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CAR_SELECTION } from "../../../../assets/constants";
import ActionButtons from "../ActionButtons";

interface IProps {
  handleCancel: () => void,
  handleProceed: (rideType: any) => void
  handleBack: (backValue: string) => void
}

export default function CarSelection({ handleCancel, handleProceed, handleBack }: IProps): ReactElement {
  const [selectedType, setSelectedType] = useState<any | undefined>(undefined)

  const handleTypeSwitch = (type: any) => {
    setSelectedType(type)
  }

  return (
    <View style={styles.selectionContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => handleBack("main-info")}
          style={styles.backButton}
        >
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerLabel}>Zgjidhni llojin e makines : </Text>
      </View>
      <View style={styles.optionContainer}>
        {CAR_SELECTION.map(option =>
          <TouchableOpacity
            key={option.id}
            onPress={() => handleTypeSwitch(option)}
            style={[styles.option, selectedType && selectedType.type === option.type && styles.selectedType]}
          >
            <Image source={option.image} style={styles.image} />
            <Text style={styles.optionLabel}>{option.label}</Text>
          </TouchableOpacity>
        )}
      </View>
      <ActionButtons
        handleCancel={() => handleCancel()}
        handleProceed={() => handleProceed(selectedType)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  selectionContainer: {
    height: "100%",
    width: "100%"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  },
  headerLabel: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 75,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "grey"
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    gap: 20
  },
  backText: {
    fontSize: 18,
    color: "grey",
    fontWeight: "bold"
  },
  option: {
    width: "33%",
    maxHeight: 110,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 10,
    borderWidth: 2,
    borderColor: "transparent"
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    top: "75%"
  },
  selectedType: {
    borderWidth: 2,
    borderColor: "#8478A3",
    backgroundColor: "#8478A354",
    elevation: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent"
  }
})