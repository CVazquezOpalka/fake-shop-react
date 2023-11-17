import MyRoutes from "../src/routers/Router";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/product.actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Layout>
        <MyRoutes></MyRoutes>
      </Layout>
      <Footer></Footer>
    </>
  );
}

export default App;
