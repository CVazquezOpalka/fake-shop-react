import MyRoutes from "../src/routers/Router";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
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
