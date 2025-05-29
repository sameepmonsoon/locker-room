import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}></Stack>
      <StatusBar backgroundColor="#640046" style="light" />
    </>
  );
};

export default AuthLayout;
