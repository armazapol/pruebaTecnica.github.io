import { createContext, useState, useEffect } from "react";
const data = [1, 1, 2, 3, 2, 1];

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [stateCards, setStateCards] = useState({});

  useEffect(() => {
    data.map((data, key) => {
      if (data === 1) {
        const nameObj = key + 1;
        setStateCards((prevState) => ({
          ...prevState,
          [`state_${nameObj}`]: true,
        }));
      } else {
        for (let i = 1; i <= data; i++) {
          const nameObj = key + 1 + "_" + i;
          setStateCards((prevState) => ({
            ...prevState,
            [`state_${nameObj}`]: true,
          }));
        }
      }
    });
  }, []);

  return (
    <Context.Provider value={{ stateCards, setStateCards }}>
      {children}
    </Context.Provider>
  );
};
