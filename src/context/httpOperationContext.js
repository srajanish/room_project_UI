import React,{createContext} from 'react';
import axios from "axios";

export const httpContext=createContext();
const host="https://roomproduction.herokuapp.com"

const HttpContextProvider=(props)=>{

    let operation={

        getCookTask(){
          return axios.get(`${host}/room/task/cook`);
        },
        getWaterTask(){
            return axios.get(`${host}/room/task/water`);
        }


    }


    return(
        <httpContext.Provider value={{operation}}>
               {props.children}
        </httpContext.Provider>
    )

}

export default HttpContextProvider;

