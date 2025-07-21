import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import BestAndNewestListPage from "./pages/BestAndNewest/BestAndNewestListPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<BestAndNewestListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
