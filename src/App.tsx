import { useState } from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [state, setState] = useState<number>(1);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <h1>Selam</h1>
    </BrowserRouter>
  );
};

export default App;
