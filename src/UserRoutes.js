import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PuffLdr from "./shared/components/Loaders/PuffLdr";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("./pages/TweetsPage/TweetsPage"));

export const UserRoutes = () => {
  return (
    <Suspense fallback={<PuffLdr />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
