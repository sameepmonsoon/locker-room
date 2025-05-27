import { createContext, useContext } from "react";

export const ColorModeContext = createContext({});
// use this hook to access the user info.
export function useTheme() {
  const value = useContext(ColorModeContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}
