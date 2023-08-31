import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();
const PizzaProvider = ({ children }) => {
  const [pizzaIds, setPizzaIds] = useState([]);
  useEffect(() => {
    const pizzas = JSON.parse(localStorage.getItem("ids"));

    setPizzaIds(pizzas);
  }, []);
  return (
    <AppContext.Provider value={{ pizzaIds, setPizzaIds }}>
      {children}
    </AppContext.Provider>
  );
};

export default PizzaProvider;
