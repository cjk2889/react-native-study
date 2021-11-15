import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// react-native-elements
import { Button } from "react-native-elements";

// TODO remove test code
import { getUsers } from "../apis/users.api";
import Config from "react-native-config";
import axios from "axios";

const LandingPage = () => {
  //states
  const [usersState, setUsersState] = useState([]);

  async function onGetUsers() {
    const users = await getUsers().catch((e) => {
      throw e;
    });

    if (users) {
      setUsersState(users);
    }
  }
  console.log(Config.REACT_APP_API_BASE_URL);

  return (
    <View>
      <Text>
        {usersState.length !== 0 ? usersState : 'hello World' }
      </Text>
      <Button
        title="get"
        onPress={onGetUsers}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LandingPage;
