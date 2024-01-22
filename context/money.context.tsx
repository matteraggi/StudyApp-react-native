import { createContext, useState } from "react";

export const MoneyContext = createContext({
  money: 0,
  setMoney: (money: number) => {},
});

export const MoneyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [money, setMoney] = useState<number>(0);

  return (
    <MoneyContext.Provider value={{ money, setMoney }}>
      {children}
    </MoneyContext.Provider>
  );
};
