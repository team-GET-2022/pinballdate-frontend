import './App.css';
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Main from './Components/Main.js';


function App() {
  return <>
    <Header>
    </Header>
    <Main></Main>
    <Footer></Footer>
  </>
}

export default withAuth0(App);
