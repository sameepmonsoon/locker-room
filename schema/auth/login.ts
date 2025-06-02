import { z } from "zod";

const SignInSchema = z.object({
  phoneNumber: z
    .string({
      required_error: "Phone number is required !",
    })
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits !" })
    .max(15, { message: "Phone number must be at most 15 digits !" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only digits !" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/,
      {
        message:
          "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character (@$!%*?&#) !",
      }
    )
    .min(6, { message: "Password must be at least 6 characters !" }),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

export { SignInSchema, SignInSchemaType };
