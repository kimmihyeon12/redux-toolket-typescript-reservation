import { Route, Routes } from "react-router-dom";
import { Reservation } from "./pages";
import "./style/App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Reservation />} />
    </Routes>
  );
}
