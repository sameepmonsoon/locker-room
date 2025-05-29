import { Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

type Props = {};

const OnBoardingCarousel = (props: Props) => {
  const router = useRouter();
  const DoneButton = ({ ...props }) => (
    <Pressable
      className="bg-black text-white px-[25px] py-[12px] rounded-[25px] mr-[15px] shadow-lg shadow-[#08cf5b]/30 shadow-[0_2px_4px]"
      {...props}
      onPress={() => router.push("/elements")}>
      <Text className="text-sm lg:text-base xl:text-lg">Get Started</Text>
    </Pressable>
  );

  const NextButton = ({ ...props }) => (
    <Pressable className="px-5 py-2.5 rounded-[20px] mr-[15px]" {...props}>
      <Text className="text-sm lg:text-base xl:text-lg">Next</Text>
    </Pressable>
  );

  const SkipButton = ({ ...props }) => (
    <Pressable style={styles.skipButtonContainer} {...props}>
      <Text className="text-sm lg:text-base xl:text-lg">Skip</Text>
    </Pressable>
  );

  const DotComponent = ({ selected }: { selected: boolean }) => (
    <VStack
      style={[styles.dot, selected ? styles.selectedDot : styles.unselectedDot]}
    />
  );

  return (
    <HStack style={styles.container}>
      <LinearGradient
        colors={["#f7f9fc", "#eef2f5"]}
        style={StyleSheet.absoluteFillObject}
      />
      <Onboarding
        bottomBarHighlight={false}
        containerStyles={styles.onboardingContainer}
        DoneButtonComponent={DoneButton}
        NextButtonComponent={NextButton}
        SkipButtonComponent={SkipButton}
        DotComponent={DotComponent}
        titleStyles={styles.title}
        subTitleStyles={styles.subtitle}
        pages={[
          {
            backgroundColor: "transparent",
            image: (
              <VStack className="w-[80%] aspect-square flex items-center justify-center mb-[30px]">
                <LottieView
                  source={require("../../../../assets/animations/players.json")}
                  autoPlay
                  loop
                  style={styles.animation}
                />
              </VStack>
            ),
            title: "Discover Amazing Features",
            subtitle:
              "Explore all the exciting features our app has to offer to make your life easier",
          },
          {
            backgroundColor: "transparent",
            image: (
              <VStack className="w-[80%] aspect-square flex items-center justify-center mb-[30px]">
                <LottieView
                  source={require("../../../../assets/animations/kick.json")}
                  autoPlay
                  loop
                  style={styles.animation}
                />
              </VStack>
            ),
            title: "Personalized Experience",
            subtitle: "Customize the app to suit your preferences and needs",
          },
          {
            backgroundColor: "transparent",
            image: (
              <VStack className="w-[80%] aspect-square flex items-center justify-center mb-[30px]">
                <LottieView
                  source={require("../../../../assets/animations/goal.json")}
                  autoPlay
                  loop
                  style={styles.animation}
                />
              </VStack>
            ),
            title: "Get Started Now",
            subtitle:
              "Join thousands of happy users who are already enjoying our app",
          },
        ]}
      />
    </HStack>
  );
};

export default OnBoardingCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onboardingContainer: {
    paddingHorizontal: 20,
  },

  animation: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
    fontFamily: "Inter-Bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 30,
    lineHeight: 24,
    fontFamily: "Inter-Regular",
  },

  nextButtonContainer: {
    backgroundColor: "rgba(108, 99, 255, 0.1)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 15,
  },
  nextButtonText: {
    color: "#08cf5b",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  skipButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 15,
  },
  skipButtonText: {
    color: "#999",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  selectedDot: {
    // width: 20,
    backgroundColor: "black",
  },
  unselectedDot: {
    backgroundColor: "#D3D3D3",
  },
});
