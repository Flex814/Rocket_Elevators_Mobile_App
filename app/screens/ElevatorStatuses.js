import React, { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors.js";

const ElevatorStatuses = (props) => {
  const { id } = props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch("jakerocket.azurewebsites.net/elevator/" + id)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

  useEffect(() => {
    return () => {
      console.log("cleans useEffect");
    };
  }, [isLoading]);

  function updateStatus() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Basic ");
    headers.append("Origin", "*");

    fetch("jakerocket.azurewebsites.net/elevator/" + id, {
      method: "GET",
      mode: "cors",
      headers: new Headers({
        "Content-Type": " application/json", 
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
        "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      }),
      body: JSON.stringify({
        id: id,
        status: "Active",
      }),
    })
      .then((response) => response.text())
      .then((responseText) => {
        alert(responseText);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={[
            styles.status,
            data.status == "Inactive"
              ? { backgroundColor: "red" }
              : { backgroundColor: "green" },
          ]}
        >
          {data.status}
        </Text>
      )}
      <TouchableOpacity>
        <Button
          style={styles.buttonText}
          mode="outlined"
          onPress={() => updateStatus()}
          title="Set As Active"
        ></Button>
        <Button
          style={styles.buttonText}
          style={styles.backButton}
          onPress={() => props.navigation.navigate("Home")}
          title="Return To List"
        ></Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    margin: 15,
  },
  status: {
    padding: 20,
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  textinput: {
    fontSize: 30,
    height: 40,
    margin: 10,
  },
  elevatorId: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
    textAlign: "center",
  },
  elevatorIdText: {
    fontSize: 20,
    color: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  backButton: {
    backgroundColor: colors.primary,
    margin: 15,
    padding: 5,
  },
});

export default ElevatorStatuses;
