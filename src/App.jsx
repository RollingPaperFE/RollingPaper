import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import BestAndNewestListPage from "./pages/BestAndNewest/BestAndNewestListPage";
import RollingPaperListPage from "./pages/RollingPaperList/RollingPaperListPage";
import SendMessagePage from "./SendMessagePage";
import PostPage from "./PostPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<BestAndNewestListPage />} />
        <Route path="post">
          <Route index element={<PostPage />} />
          <Route path=":id" element={<RollingPaperListPage />} />
          <Route path=":id/message" element={<SendMessagePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
