import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial state
const initialState = {
    transactions:
        []
}

//create context
export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //function add transaction
    const AddTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
          });
    }

    //function delete transaction
    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }

    return (<GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction,AddTransaction }} >
        {children}
    </GlobalContext.Provider>)
}