import { createContext, useState } from "react";

export const SoundContext = createContext({
  sound: false,
  setSound: (sound: boolean) => {},
});

export const SoundContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sound, setSound] = useState<boolean>(false);

  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
};
