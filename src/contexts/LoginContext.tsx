import { createContext, useState, ReactNode } from "react";

const LoginContext = createContext<{
  name: string;
  profile: boolean;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

interface LoginProviderProps {
  children: ReactNode;
}

function LoginProvider({ children }: LoginProviderProps) {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState(false);

  return (
    <LoginContext.Provider value={{ name, profile, setName, setProfile }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginProvider };
