import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './component/register/register';
import Task from './component/task/task';
import HttpContextProvider from './context/httpOperationContext';

function App() {
  return (
    <div className="App">
     {/* <Register/> */}

     <HttpContextProvider>
     <Task/>
     </HttpContextProvider>
    </div>
  );
}

export default App;
