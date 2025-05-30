import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "react-native";
import { Divider } from "@/components/ui/divider";
import RegisterForm from "@/components/modules/forms/register-form";

const RegisterPage = () => {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <ScrollView
      className="bg-background-0"
      contentContainerClassName="px-3 pb-6">
      <Box className="p-5 rounded-lg m-3 mt-5 bg-background-0 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center">
        <Text className="text-2xl font-bold text-center h-8">Locker Room</Text>
        <Text className="text-sm text-center h-6">Create your account</Text>
        <Divider className="my-2" />
        <Button variant="outline" className="mb-6 w-full">
          <Image
            source={require("../../assets/images/google.png")}
            alt={"isDarkColorScheme"}
            className={`h-6 w-6
                `}
            //  cachePolicy="memory-disk"
          />
          <ButtonText>Continue with Google</ButtonText>
        </Button>
        ExpoImage
        <RegisterForm />
      </Box>
    </ScrollView>
  );
};

export default RegisterPage;
