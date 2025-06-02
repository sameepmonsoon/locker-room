import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  FormFieldContext,
  FormItemContext,
} from ".";
import { Input, InputField, InputIcon, InputSlot } from "../input";
import { AlertCircleIcon, EyeIcon, EyeOffIcon } from "../icon";
import { useFormContext } from "react-hook-form";
import PhoneInput from "react-native-international-phone-number";
import { useColorScheme } from "@/hooks/useColorScheme";

type Props = { secureEntry?: boolean; value: any };

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState, handleSubmit, trigger, setValue } =
    useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { nativeID } = itemContext;

  return {
    nativeID,
    name: fieldContext.name,
    formItemNativeID: `${nativeID}-form-item`,
    formDescriptionNativeID: `${nativeID}-form-item-description`,
    formMessageNativeID: `${nativeID}-form-item-message`,
    handleSubmit,
    trigger,
    setValue,
    ...fieldState,
  };
};
const FormInput = (props: Props) => {
  const { error } = useFormField();
  const [showPassword, setShowPassword] = useState(props?.secureEntry);
  return (
    <FormControl isInvalid={!!error} className="w-full">
      <FormControlLabel>
        <FormControlLabelText size="sm">Password</FormControlLabelText>
      </FormControlLabel>
      <Input className="h-12 rounded-lg">
        <InputField
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          {...props}
        />
        {props?.secureEntry && (
          <InputSlot
            onPress={() => setShowPassword(!showPassword)}
            className="mr-3">
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
          </InputSlot>
        )}
      </Input>
      {error && (
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText size="xs">{error.message}</FormControlErrorText>
        </FormControlError>
      )}
    </FormControl>
  );
};

const FormPhoneNumberInput = (props: Props) => {
  const { error, setValue } = useFormField();
  const { isDarkColorScheme } = useColorScheme();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handlePhoneNumberChange = (value: string) => {
    if (value.length <= 11)
      setValue("phoneNumber", value, { shouldValidate: true });
  };

  const handleCountryChange = (country: any) => {
    setSelectedCountry(country);
  };
  return (
    <FormControl isInvalid={!!error} className="w-full mb-6">
      <FormControlLabel>
        <FormControlLabelText size="sm">Phone Number</FormControlLabelText>
      </FormControlLabel>
      <PhoneInput
        {...props}
        onChangePhoneNumber={handlePhoneNumberChange}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleCountryChange}
        placeholder="Enter your phone number"
        defaultCountry="NP"
        className="w-full whitespace-nowrap"
        maxLength={11} //adjust maxlength as needed
        theme={isDarkColorScheme ? "dark" : "light"}
      />
      {error && (
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText size="xs">{error.message}</FormControlErrorText>
        </FormControlError>
      )}
    </FormControl>
  );
};
export { FormInput, FormPhoneNumberInput };

const styles = StyleSheet.create({});
