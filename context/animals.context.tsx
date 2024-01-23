import { createContext, useState } from "react";

export const AnimalContext = createContext({
  animal: "",
  setAnimal: (animal: string) => {},
});

export const AnimalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animal, setAnimal] = useState<string>("favicon");

  return (
    <AnimalContext.Provider value={{ animal, setAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
