import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import HomeWork from "./pages/HomeWork";
import { ContextProvider } from "../context/Context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homework/:id" element={<HomeWork />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}
export default App;
