import React, { ReactElement, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CAR_SELECTION } from "../../../assets/constants";

export default function CarSelection(): ReactElement {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined)

  const handleTypeSwitch = (type: string) => {
    setSelectedType(type)
  }

  return (
    <View style={styles.selectionContainer}>
      <Text style={styles.headerLabel}>Zgjidhni llojin e makines : </Text>
      <View style={styles.optionContainer}>
        {CAR_SELECTION.map(option =>
          <TouchableOpacity
            key={option.id}
            onPress={() => handleTypeSwitch(option.type)}
            style={[styles.option, selectedType === option.type && styles.selectedType]}
          >
            <Text style={styles.optionLabel}>{option.label}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  selectionContainer: {
    height: "100%",
    width: "100%"
  },
  headerLabel: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    marginTop: 20,
    gap: 20
  },
  option: {
    width: "33%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 10
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: "bold"
  },
  selectedType: {
    borderWidth: 2,
    borderColor: "#8478A3"
  }
})