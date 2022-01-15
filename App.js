import { StatusBar } from "expo-status-bar";
// import { appendFile } from "fs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navigator } from "./routes/AppNavigator";

export default function App() {
  return <Navigator />;
}
