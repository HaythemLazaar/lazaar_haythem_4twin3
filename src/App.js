import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const NavigationBar = lazy(() => import("./Components/NavigationBar"));
const MovieDetails = lazy(() => import("./Components/MovieDetails"));
const Movies = lazy(() => import("./Components/Movies"));
const NotFound = lazy(() => import("./Components/NotFound"));

function App() {
  return (
    // <Fragement>
    <>
      {/* <Products/> */}
      <Suspense>
        <NavigationBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/movies">
            <Route path="list" element={<Movies />} />
            <Route path=":id" element={<MovieDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </>
    // </Fragement>
  );
}

export default App;
