import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
import NavbarLinks from "./components/NavbarLinks";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <NavbarLinks />
          <MainSection sectionId="rockSection" sectionTitle="Rock Classic" artistName="queen" />
          <MainSection sectionId="popSection" sectionTitle="Pop Culture" artistName="katyperry" />
          <MainSection sectionId="hipHopSection" sectionTitle="#HipHop " artistName="eminem" />
        </Col>
      </Row>
      <Player />
    </Container>
  );
};

export default App;
