import React from "react";
import { Route, Routes } from "react-router-dom";
import dataRoute from "./datas/dataRoute";

const App = () => {
  return (
    <Routes>
      {dataRoute().map((r, i) => (
        <Route path={r.path} element={r.component} key={i}>
          {r.lists?.map((r2, j) => (
            <Route path={r2.path} element={r2.component} key={j} />
          ))}
        </Route>
      ))}
    </Routes>
  );
};

export default App;
