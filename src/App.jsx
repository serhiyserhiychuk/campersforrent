import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage")
);
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
import Loader from "./components/Loader/Loader";
// import Navigation from "./components/Navigation/Navigation";
import CamperFeatures from "./components/CamperFeatures/CamperFeatures";
import CamperReviews from "./components/CamperReviews/CamperReviews";

const App = () => {
  return (
    <>
      <Toaster />
      {/* <Navigation /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CamperDetailsPage />}>
            <Route
              path="/catalog/:camperId/features"
              element={<CamperFeatures />}
            />
            <Route
              path="/catalog/:camperId/reviews"
              element={<CamperReviews />}
            />
          </Route>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/favorites/:camperId" element={<CamperDetailsPage />}>
            <Route
              path="/favorites/:camperId/features"
              element={<CamperFeatures />}
            />
            <Route
              path="/favorites/:camperId/reviews"
              element={<CamperReviews />}
            />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
