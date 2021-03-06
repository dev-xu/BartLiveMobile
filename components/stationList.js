import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useColorScheme } from "react-native-appearance";

const StationList = props => {
  const colorScheme = useColorScheme();
  const stationList = props.stations.sort((a, b) =>
    a.distance > b.distance ? 1 : -1
  );

  const titleText =
    colorScheme === "dark" ? styles.darkTitle : styles.lightTitle;
  const distanceText =
    colorScheme === "dark" ? styles.darkDistance : styles.lightDistance;

  return (
    <FlatList
      data={stationList}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            props.navigate("StationDetails", {
              abbr: item.abbr,
              name: item.name
            })
          }
        >
          <View>
            <Text style={[styles.stationTitle, titleText]}>{item.name}</Text>
          </View>
          <View>
            <Text style={[styles.stationDistance, distanceText]}>
              {item.distance.toFixed(2)} miles
            </Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.abbr}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderColor: "#F0F4F5",
    borderBottomWidth: 1,
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 10
  },
  stationTitle: {
    fontSize: 20
  },
  lightTitle: {
    color: "black"
  },
  darkTitle: {
    color: "white"
  },
  lightDistance: {
    color: "black"
  },
  darkDistance: {
    color: "white"
  },
  stationDistance: {
    fontSize: 12
  }
});

export default StationList;
