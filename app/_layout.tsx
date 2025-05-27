import React from "react";
import "../global.css";
import { Stack, useRouter } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon, ChevronLeftIcon, SunIcon, MoonIcon } from "@/components/ui/icon";
import { StyleSheet, Platform } from "react-native";
import { Fab } from "@/components/ui/fab";
import { Pressable } from "@/components/ui/pressable";
import { StatusBar } from "expo-status-bar";
import { ColorModeContext } from "@/context/theme-context";

const CustomBackButton = () => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.back();
      }}
      className="web:ml-2 ios:-ml-2 android:mr-4"
    >
      <Icon as={ChevronLeftIcon} size="xl" />
    </Pressable>
  );
};

export default function RootLayout() {
  const [colorMode, setColorMode] = React.useState<"light" | "dark">("light");

  const styles = StyleSheet.create({
    header: {
      backgroundColor: colorMode === "light" ? "#fff" : "#000",
      borderBottomColor: colorMode === "light" ? "#E6E6E6" : "#414141",
      borderBottomWidth: 1,
    },
  });

  const handleColorMode = () => {
    setColorMode((prevMode: string) =>
      prevMode === "light" ? "dark" : "light"
    );
  };

  const getHeaderOptions = (title: string) => ({
    headerTitle: title,
    headerTintColor: colorMode === "light" ? "#000" : "#fff",
    headerStyle: styles.header,
    ...(Platform.OS !== "android" && {
      headerLeft: () => <CustomBackButton />,
    }),
  });

  return (
    <>
      <StatusBar
        style="auto" //android
        backgroundColor={`${colorMode == "light" ? "#F6F6F6" : "#272625"}`}
      />
      <ColorModeContext.Provider value={{ colorMode }}>
        <GluestackUIProvider mode={colorMode}>
          <Stack screenOptions={{ animation: "slide_from_right" }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" options={{ headerShown: false }} />
            <Stack.Screen
              name="elements"
              options={getHeaderOptions("UI Elements")}
            />
          </Stack>

          <Fab
            className="bottom-10 sm:right-10 right-6 p-4 z-0"
            onPress={handleColorMode}
          >
            <Icon
              as={colorMode === "light" ? SunIcon : MoonIcon}
              className="text-typography-0"
            />
          </Fab>
        </GluestackUIProvider>
      </ColorModeContext.Provider>
    </>
  );
}
