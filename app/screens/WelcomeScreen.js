import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors.js";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      //background
      source={require("../assets/images/AdobeStock_33298664.jpeg")}
    >
      <View style={styles.ButtonSeperator}>
        <View style={styles.loginButton}>
          <Text>Sign In</Text>
        </View>

        <View style={styles.contactUs}>
          <Text>Further Support</Text>
        </View>
      </View>

      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/R2.png")}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    flex: 0.5,
    width: "50%",
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  contactUs: {
    flex: 0.5,
    width: "50%",
    height: 60,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonSeperator: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    width: 300,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: "40%",
    alignItems: "center",
  },
});
