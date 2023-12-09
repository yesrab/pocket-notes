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
import NotFound from "./pages/NotFound";
import { useState } from "react";
function App() {
  const [view, setView] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout view={view} setView={setView} />}>
        <Route index element={<HomePage setView={setView} />} />
        <Route path=':id' element={<NotesWindow setView={setView} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

