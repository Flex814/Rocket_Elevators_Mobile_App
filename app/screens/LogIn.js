// import { appendFile } from "fs";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Text,
  useState,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import colors from "../config/colors.js";

function LogIn(props) {
  const [email, onChangeText] = React.useState("");

  const authenticate = () => {
    fetch("https://jakerocket.azurewebsites.net/employee/valid/" + email)
      .then((result) => result.json())
      .then((resultJson) => {
        if (resultJson == true) {
          props.navigation.navigate("Home");
          console.log(authenticate);
        } else {
          Alert.alert("Enter employee email");
        }
      });
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/AdobeStock_33298664.jpeg")}
    >
      <View style={styles.Seperator}>
        <View style={styles.LogInContainer}>
          <TextInput
            placeholder="Enter your email"
            onChangeText={(text) => onChangeText(text)}
            value={email}
          />
        </View>
        <TouchableOpacity>
          <Button
            style={styles.LogInButton}
            onPress={authenticate}
            title="Sign-In"
          />
        </TouchableOpacity>
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

export default LogIn;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 290,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: "12%",
    alignItems: "center",
  },
  Seperator: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  LogInContainer: {
    flex: 1.0,
    width: 250,
    bottom: "0%",
    backgroundColor: "rgba(52, 52, 52, 0.49)",
    justifyContent: "center",
    alignItems: "center",
  },
});
