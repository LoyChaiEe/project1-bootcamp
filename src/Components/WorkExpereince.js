import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useMediaQuery } from "react-responsive";

function Work() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  let element;
  if (isMobile) {
    element = <Mobile />;
  } else {
    element = <PC />;
  }
  return element;
}

function Mobile() {
  return (
    <Container id="work">
      <h1 style={{ textAlign: "center", marginBottom: "4vh" }}>
        Professional Work Experience
      </h1>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Cisco">
          <h2>Cisco Certified Network Associate @ Cisco</h2>
          <p>
            <ul>
              <li>
                Learnt how to install, operate, configure, and verify basic IPv4
                and IPv6 networks.
              </li>
              <li>
                Covered configuring network components such as switches,routers,
                and wireless LAN controllers; managing network devices; and
                identifying basic security threats.
              </li>
              <li>
                Established a foundation in network programmability, automation,
                and software-defined networking.
              </li>
            </ul>
          </p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <h2>Cisco Certified Network Associate @ Cisco</h2>
          <p>
            <ul>
              <li>
                Learnt how to install, operate, configure, and verify basic IPv4
                and IPv6 networks.
              </li>
              <li>
                Covered configuring network components such as switches,routers,
                and wireless LAN controllers; managing network devices; and
                identifying basic security threats.
              </li>
              <li>
                Established a foundation in network programmability, automation,
                and software-defined networking.
              </li>
            </ul>
          </p>
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab">
          <h2>Cisco Certified Network Associate @ Cisco</h2>
          <p>
            <ul>
              <li>
                Learnt how to install, operate, configure, and verify basic IPv4
                and IPv6 networks.
              </li>
              <li>
                Covered configuring network components such as switches,routers,
                and wireless LAN controllers; managing network devices; and
                identifying basic security threats.
              </li>
              <li>
                Established a foundation in network programmability, automation,
                and software-defined networking.
              </li>
            </ul>
          </p>
        </Tab>
      </Tabs>
    </Container>
  );
}

function PC() {
  return (
    <Tab.Container defaultActiveKey="first">
      <Container id="work">
        <h1>Professional Work Experience</h1>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Cisco</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Apple</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h2>Cisco Certified Network Associate @ Cisco</h2>
                <p>
                  <ul>
                    <li>
                      Learnt how to install, operate, configure, and verify
                      basic IPv4 and IPv6 networks.
                    </li>
                    <li>
                      Covered configuring network components such as
                      switches,routers, and wireless LAN controllers; managing
                      network devices; and identifying basic security threats.
                    </li>
                    <li>
                      Established a foundation in network programmability,
                      automation, and software-defined networking.
                    </li>
                  </ul>
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h2>Cisco Certified Network Associate @ Cisco</h2>
                <p>
                  <ul>
                    <li>
                      Learnt how to install, operate, configure, and verify
                      basic IPv4 and IPv6 networks.
                    </li>
                    <li>
                      Covered configuring network components such as
                      switches,routers, and wireless LAN controllers; managing
                      network devices; and identifying basic security threats.
                    </li>
                    <li>
                      Established a foundation in network programmability,
                      automation, and software-defined networking.
                    </li>
                  </ul>
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </Tab.Container>
  );
}
export default Work;
