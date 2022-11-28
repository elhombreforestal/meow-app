import React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
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

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Favs() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <br />
      <br />
      <h2>Favs</h2>
      <p>Show Modal: {id}</p>
      {id && <button onClick={() => navigate(-1)}>Close</button>}
      <br />
      <Link to="modal" state={{ background: location }}>
        Open Modal
      </Link>
      <br />
      <Link to="id2">Open inner Modal</Link>
      <Outlet />
    </div>
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
