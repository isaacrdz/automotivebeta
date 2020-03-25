import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 60 }}>SigninScreen</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
      />
      <Button
        title="Go to mainFlow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SigninScreen;
