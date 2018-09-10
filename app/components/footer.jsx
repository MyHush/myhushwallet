import React from 'react'
import {Container, Row, Col} from 'reactstrap';

var footer = {
  backgroundColor: '#f5f5f5'
}

var longP = {
  wordWrap: 'break-word'
}

export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (      
      <div style={footer}>
        <br/>
        <Container>      
        <Row>
          <Col md="8">
            <p>MAKE SURE YOU ARE ON <b>WALLET.MYHUSH.ORG</b></p>

            <p>Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!!!</p>

            <p>Suggestions? <a href="https://myhush.org/#contact-section">Contact us</a> or join our <a href="http://myhush.org/discord">Discord</a> server!</p>          

            <p style={longP}>Donations are always welcome!<br/>
              <b>HUSH</b>: <a href="http://dashboard.myhush.org/#donate">Dashboard donation addresses</a><br/>
            </p>
          </Col>
          <Col md="4">
            <a href="https://myhush.org/">website</a><br/>
            <a href="http://dashboard.myhush.org/">dashboard</a><br/>
            <a href="https://github.com/MyHush/myhushwallet">github</a><br/>
            <a href="http://myhush.org/discord/">discord</a><br/>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}
