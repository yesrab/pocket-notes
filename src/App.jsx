import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/HomePage";
import NotesWindow from "./pages/NotesWindow/NotesWindow";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path=':id' element={<NotesWindow />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

