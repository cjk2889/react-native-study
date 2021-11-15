import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Header } from "react-native-elements";

const Navbar = () => {
  return (
    <View>
      <Header
        barStyle="light-content"
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={
          <Button
            type="clear"
            onPress={() => {
              // TODO react-navigation 달기
              console.log('onPress Menu btn');
            }}
            icon={{
              name: 'bars',
              type: 'font-awesome',
              color: '#fff',
            }}
          />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Navbar;
