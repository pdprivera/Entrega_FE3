import { createContext, useContext, useEffect, useReducer} from "react";
import axios from 'axios'

const ContextGlobal = createContext()

const initialState = {
     theme: "light", 
     data: [],
     dentista: {},
};

 const reducer = (state, action) => {
   switch(action.type){
      case 'THEME':
          return {...state, theme: action.payload};
      case 'GET_DATA': 
          return {...state, data: action.payload};
      case 'GET_DENT': 
          return {...state, dentista: action.payload};
      default:
          throw new Error()
   }
 };
  

const Context = ({ children }) => {
       //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
      const [state, dispatch] = useReducer(reducer, initialState)

      const url = 'https://jsonplaceholder.typicode.com/users'
      
      const changeTheme = (newTheme) => {
       dispatch({ type: 'THEME', payload: newTheme});
       };

      useEffect(() => {
          axios(url)
          .then(res => dispatch({type: 'GET_DATA', payload: res.data.results}))
          }, [url]);
       
    return (
      <ContextGlobal.Provider value={{
          state, dispatch, changeTheme
      }}>
        {children}
      </ContextGlobal.Provider>
    );
};

  export default Context

  export const useContextGlobal = () => useContext(ContextGlobal)
