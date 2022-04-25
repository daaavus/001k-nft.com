import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Main from "./Components/Main";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Main /> } />
          <Route path="/*" element={ <NotFoundPage /> } />
        </Route>  
      </Routes>
    </>
  );
}
