import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

type Props = {};

const login = (props: Props) => {
  return (
    <ScrollView
      className={`bg-background-0 web:justify-center`}
      contentContainerClassName="px-3 pb-6">
      <Text>login</Text>
    </ScrollView>
  );
};

export default login;

const styles = StyleSheet.create({});
