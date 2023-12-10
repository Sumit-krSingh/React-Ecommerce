import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState ={
    filter_products : [],
    all_products : [],
    grid_view : true,
    sorting_value :"lowest",
    filters:{
        text:"",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },

};

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


    // sorting function

    const sorting = (event) =>{
        let userValue = event.target.value;
        dispatch({type : "GET_SORT_VALUE", payload : userValue});

    }

     // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

// CLEAR FILTER CODE
  const clearfilters =() =>{
    dispatch({type:"CLEAR_FILTERS"})
  };


  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);





//   to load all product in grid and list
    useEffect(() =>{

        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});

    },[products])
    return (
    <FilterContext.Provider value= {
        {...state, setGridView ,setListView,sorting, updateFilterValue,clearfilters}} >{children}</FilterContext.Provider>
    );
};

export const useFilterContext = () =>{
    return useContext(FilterContext);
}