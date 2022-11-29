import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Layout, Breeds, Favorites, RandomFeed } from "./layouts";
import { Modal } from "./components";
import { useCookies } from "react-cookie";
import { RandomName } from "./utils";

import "./App.css";

export default function App() {
  const [cookies, setCookie] = useCookies([]);
  if (!cookies.catlover_id) {
    setCookie("catlover_id", RandomName(), { path: "/" });
  }
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<RandomFeed />} />
          <Route path="/" element={<RandomFeed />}>
            <Route path="img/:id" element={<Modal />} />
          </Route>
          <Route path="breeds" element={<Breeds />}>
            <Route path=":id" element={<Modal />} />
          </Route>
          <Route path="favorites" element={<Favorites />}>
            <Route path=":id" element={<Modal />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="modal" element={<Modal />} />
        </Routes>
      )}
    </>
  );
}

function NoMatch(props) {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page {document.cookie} nebo react</Link>
      </p>
    </div>
  );
}
