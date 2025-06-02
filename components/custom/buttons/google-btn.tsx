import { Image } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
type Props = {};

const GoogleBtn = (props: Props) => {
  return (
    <Button
      variant="outline"
      className="w-full h-12 rounded-lg border-background-300">
      <Image
        source={require("../../../assets/images/google.png")}
        alt={"isDarkColorScheme"}
        className={`h-6 w-6 rounded-full`}
      />
      <ButtonText>Continue with Google</ButtonText>
    </Button>
  );
};

export default GoogleBtn;
