import React from "react";
import { Container, Row, Col } from "reactstrap";

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
  normal: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold'
  },
};

export default class ZFaq extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
          <h1>FAQ</h1>
          <ColoredLine color="grey" />
            <br/>
              <p>
                <div style={styles.bold}>Are my private keys secured?</div>
                <div style={styles.normal}>Yes they are secured, your private keys never leave your browser.</div>
              </p>
            <br/>
              <p>
              <div style={styles.bold}>How is this secure? Its on a web browser!</div>
              <div style={styles.normal}>My Hush Wallet has replicated the core features of the HUSH daemon in JavaScript!</div>
              <div style={styles.normal}>So the process of creating and signing the transactions are all done within the browser.</div>
              <div style={styles.normal}>No sensitive information is sent through the network.</div>
              </p>
            <br/>
              <p>
                <div style={styles.bold}>Can I have the source code?</div>
                {" "}
                <a href="https://github.com/myhush/myhushwallet">Here you go</a>
              </p>
            <br/>
              <p>
              <div style={styles.bold}>Why are you doing this?</div>
                My Hush Wallet was inspired by{" "}
                <a href="https://myzenwallet.io/">MyZenWallet's</a> which was
                inspired by{" "}
                <a href="https://myetherwallet.com">MyEtherWallet's.</a> We also
                want to provide the people the ability to interact with the HUSH
                blockchain easily, without having to run a full node.
              </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
