import React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";
import Layout from "./layouts/Layout";
import { useCookies } from "react-cookie";
import { RandomName } from "./utils";

import "./App.css";

export default function App() {
  const [cookies, setCookie] = useCookies([]);
  if (!cookies.catlover_id) {
    setCookie("catlover_id", RandomName(), { path: "/" });
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
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
