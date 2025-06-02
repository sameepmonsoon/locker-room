import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "@/components/ui/divider";
import { Box } from "@/components/ui/box";

type Props = {};

const HorizontalDivider: React.FC<Props> = (props) => {
  return (
    <Box className="flex flex-row justify-center items-center gap-2">
      <Divider />
      <Text className="text-center">or</Text>
      <Divider />
    </Box>
  );
};

export default HorizontalDivider;

const styles = StyleSheet.create({
  // You can add styles here if needed
});
