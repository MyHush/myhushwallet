import React from "react";
import { Container, Row, Col } from "reactstrap";

import { Discord }  from "../images/svg";
import { Twitter }  from "../images/svg";
import { Reddit }  from "../images/svg";
import { Bitcointalk }  from "../images/svg";
import { Github }  from "../images/svg";
import { Invisible } from "../images/svg";
import { Telegram } from "../images/svg";

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 0.25
      }}
  />
);

const styles = {
  center: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    verticalAlign: 'middle',
    fontWeight: 'normal'
  },
  normal: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold'
  },
  marginRight: {
    margin: '10px'
  }
};

export default class ZContact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
          <h1>Contact</h1>
            <ColoredLine color="grey" />
            <p>
            <br/><h3>
            <p style={styles.center}><b>JOIN US!</b></p>
              </h3>
              <br/>
              <br/>
              <p style={styles.center}><b>Hush</b> is a community project. Everyone is welcomed with open arms!</p>
            </p>

            <p>
              <br/>
              <br/>
                <div>
                  <p style={styles.center}>
                    <a href="https://myhush.org/discord/index.html"><Discord size='40'/></a>
                    <a ><Invisible size='12'/></a>
                    <a href="https://twitter.com/MyHushTeam"><Twitter size='40'/></a>
                    <a ><Invisible size='12'/></a>
                    <a href="https://t.me/Hush_Coin"><Telegram size='40'/></a>
                    <a ><Invisible size='12'/></a>
                    <a href="https://reddit.com/r/Myhush"><Reddit size='40'/></a>
                    <a ><Invisible size='12'/></a>
                    <a href="https://bitcointalk.org/index.php?topic=2008578.0"><Bitcointalk size='40'/></a>
                    <a ><Invisible size='12'/></a>
                    <a href="https://github.com/MyHush"><Github size='40'/></a>
                  </p>
                </div>
             </p>

            <br/>
            <br/>
            <p style={styles.center}>Copyright © 2016-2020 The Hush developers. All rights reserved.<br/>v2.0.10</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
