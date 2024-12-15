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
          <MainSection sectionId="rockSection" sectionTitle="Rock Section" artistName="queen" />
          <MainSection sectionId="popSection" sectionTitle="Pop Section" artistName="katyperry" />
          <MainSection sectionId="hipHopSection" sectionTitle="#Hip Hop " artistName="eminem" />
        </Col>
      </Row>
      <Player />
    </Container>
  );
};

export default App;
