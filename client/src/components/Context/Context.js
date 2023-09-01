import { createContext, useEffect, useReducer, useState } from "react";
export const AppContext = createContext();
const initialState = {
  pizzaIds: JSON.parse(localStorage.getItem("cart")) || [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        pizzaIds: [...state.pizzaIds, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        pizzaIds: [
          ...state.pizzaIds.filter((pizza) => pizza !== action.payload),
        ],
      };
    case "SET_CART":
      return {
        ...state,
        pizzaIds: action.payload,
      };

    default: {
      return state;
    }
  }
};
const PizzaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // const [pizzaIds, setPizzaIds] = useState([]);
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("cart"));
    if (storedIds) {
      dispatch({ type: "SET_CART", payload: storedIds });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.pizzaIds));
  }, [state.pizzaIds]);
  return (
    <AppContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default PizzaProvider;
