import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header/Header";
import MyCarousel from "./components/MyCarousel/MyCorousel";
import "bootstrap/dist/css/bootstrap.min.css";
import JobList from "./components/Jobs/JobsList";

function App() {
   return (
      <div className='App'>
         <Container>
            <Header />
            <MyCarousel />
            <JobList />
         </Container>
      </div>
   );
}

export default App;
