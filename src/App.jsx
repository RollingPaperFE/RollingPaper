import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import BestAndNewestListPage from "./pages/BestAndNewest/BestAndNewestListPage";
import RollingPaperListPage from "./pages/RollingPaperList/RollingPaperListPage";
import SendMessagePage from "./SendMessagePage";
import RollingWrite from "./pages/RollingWrite/RollingWrite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<BestAndNewestListPage />} />
        <Route path="post">
          <Route index element={<RollingWrite />} />
          <Route path=":id" element={<RollingPaperListPage />} />
          <Route path=":id/message" element={<SendMessagePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;