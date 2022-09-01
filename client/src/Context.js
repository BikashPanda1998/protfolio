import { createContext,  useReducer} from "react";

export const theme=createContext();

const initialState = {darkMode:false};
const themeReduser = (state, action)=>{
    switch(action.type){
        case 'toggle':
            return {darkMode : !state.darkMode};
        default:
            return state;
    }
};

export const ThemeProvider =(props)=>{
    const [state, dispatch]=useReducer(themeReduser, initialState);
    return(
        <theme.Provider value={{state, dispatch}}>
            {props.children}
        </theme.Provider>
    )

}
