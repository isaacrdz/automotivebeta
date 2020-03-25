import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CarListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>CarListScreen</Text>
      <Button
        title="Go to Car Detail"
        onPress={() => navigation.navigate("CarDetail")}
      />

      <Button
        title="Go back to loginFlow"
        onPress={() => navigation.navigate("loginFlow")}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default CarListScreen;
