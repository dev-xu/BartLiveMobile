import React from "react";
import { Image } from "react-native";
import PinchZoomView from "react-native-pinch-zoom-view";

export default function WeekAndSatScreen() {
  return (
    <PinchZoomView minScale={1} maxScale={4}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/week-and-sat-system-map.png")}
        resizeMode="contain"
      />
    </PinchZoomView>
  );
}
