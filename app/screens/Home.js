import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Button,
  TextInput,
  Alert,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors.js";

function Home(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jakerocket.azurewebsites.net/elevator/inactive")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    return () => {
      console.log("cleans useEffect");
    };
  }, []);

  return (
    <ImageBackground style={styles.background}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Button
              title={`Elevator ID: ${item.id}`}
              onPress={() => {
                props.navigation.navigate("ElevatorStatuses", {
                  id: item.id,
                  status: item.status,
                });
              }}
            >
              id:{item.id}
              status:{item.status}
              style={styles.buttonText}
            </Button>
          )}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button
          style={styles.LogOutButton}
          onPress={() => props.navigation.navigate("Log-In")}
          title="Log out"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: 60,
    height: 60,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    right: "80%",
    top: "2%",
  },
  LogOutButton: {
    backgroundColor: colors.primary,
    margin: 15,
    padding: 5,
  },
  Button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
});

export default Home;
