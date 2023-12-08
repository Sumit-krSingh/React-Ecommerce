import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState ={
    filter_products : [],
    all_products : [],
    grid_view : true,
}

 export const FilterContextProvider = ({children}) =>{

    const {products} = useGlobalContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () =>{
        dispatch({ type : "SET_GRID_VIEW"});
    };
// list view 
    const setListView = () =>{
        dispatch({ type : "SET_List_VIEW"});
    };

    useEffect(() =>{

        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});

    },[products])
    return (
    <FilterContext.Provider value= {{...state, setGridView ,setListView}} >{children}</FilterContext.Provider>
    );
};

export const useFilterContext = () =>{
    return useContext(FilterContext);
}