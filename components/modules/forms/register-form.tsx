import React from "react";
import {
  FormControl,
  FormControlHelper,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { AlertCircleIcon, Icon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { Text } from "@/components/ui/text";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, LinkText } from "@/components/ui/link";
import { HStack } from "@/components/ui/hstack";
import PhoneInput from "react-native-international-phone-number";
import { useColorScheme } from "@/hooks/useColorScheme";

// Define validation schema with Zod
const signInSchema = z.object({
  phoneNumber: z
    .string()
    .trim() // Remove whitespace from both ends
    .transform((val) => val.replace(/\s/g, "")) // Remove all non-digit characters
    .refine((val) => val.length === 10, {
      message: "Phone number must be exactly 10 digits",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type SignInFormData = z.infer<typeof signInSchema>;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const { isDarkColorScheme } = useColorScheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const phoneNumberValue = watch("phoneNumber");

  const handlePhoneNumberChange = (value: string) => {
    if (value.length <= 11)
      setValue("phoneNumber", value, { shouldValidate: true });
  };

  const handleCountryChange = (country: any) => {
    setSelectedCountry(country);
  };

  const onSubmit = (data: SignInFormData) => {
    console.log("Form submitted:", data);
    // Handle sign in logic here
  };

  return (
    <Center className="rounded-xl bg-background-0">
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { value } }) => (
          <FormControl isInvalid={!!errors.phoneNumber} className="w-full mb-6">
            <FormControlLabel>
              <FormControlLabelText size="sm">
                Phone Number
              </FormControlLabelText>
            </FormControlLabel>
            <PhoneInput
              value={phoneNumberValue}
              onChangePhoneNumber={handlePhoneNumberChange}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleCountryChange}
              placeholder="Enter your phone number"
              defaultCountry="NP"
              className="w-full whitespace-nowrap"
              maxLength={11} //adjust maxlength as needed
              theme={isDarkColorScheme ? "dark" : "light"}
            />
            {errors.phoneNumber && (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText size="xs">
                  {errors.phoneNumber.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl isInvalid={!!errors.password} className="w-full">
            <FormControlLabel>
              <FormControlLabelText size="sm">Password</FormControlLabelText>
            </FormControlLabel>
            <Input className="h-12 rounded-lg">
              <InputField
                placeholder="Enter your password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={!showPassword}
              />
              <InputSlot
                onPress={() => setShowPassword(!showPassword)}
                className="mr-3">
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
            {errors.password && (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText size="xs">
                  {errors.password.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
        )}
      />
      <Button
        className="mt-8 w-full bg-primary-600 h-12 rounded-lg"
        size="sm"
        onPress={handleSubmit(onSubmit)}>
        <ButtonText>Create Account</ButtonText>
      </Button>

      <HStack className="mt-4 text-center justify-center items-center gap-2">
        <Text>{`Don't have an account?`}</Text>
        <Link
          href="/(auth)/login"
          className="flex flex-row justify-center items-center">
          <LinkText className="no-underline">Sign in</LinkText>
        </Link>
      </HStack>

      <Text className="mt-6 text-xs text-center text-typography-400">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </Text>
    </Center>
  );
};

export default RegisterForm;
