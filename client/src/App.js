import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Confirmation } from './components/Confirmation';

export const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route exact path='/'> */}
      <Homepage />
      {/* </Route> */}
      {/* <Route exact path='/confirmation'>
            <Confirmation />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

