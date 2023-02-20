import { PropsWithChildren } from "react";
import { AuthProvider } from "context/auth-context";

export const AppProviders = (props: PropsWithChildren) => {
  const { children } = props;
  return <AuthProvider>{children}</AuthProvider>;
};
