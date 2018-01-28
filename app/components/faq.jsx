import React from 'react'
import {Container, Row, Col} from 'reactstrap';

export default class ZFaq extends React.Component {
  render () {
    return (      
      <Container>      
        <Row>
          <Col> 
            <p>
              <b><span className="faq1a">Q: Are my private keys secured?</span></b><br/>
              <span className="faq1b">A: Yes they are secured, your private keys never leave your browser.</span>
            </p>

            <p>
              <b><span className="faq2a">Q: How is this secure? Its on a web browser!</span></b><br/>
              <span className="faq2b">A: My Hush Wallet has replicated the core features of the HUSH daemon in JavaScript! So the process of creating and signing the transactions are all done within the browser. No sensitive information is sent through the network.</span>
            </p>         

            <p>
              <b><span className="faq3a">Q: Can I have the source code?</span></b><br/>
              <span className="faq3b">A:</span> <a href="https://github.com/myhush/myhushwallet"><span className="faq3c">Here you go</span></a>
            </p>               

            <p>
              <b><span className="faq4a">Q: Why are you doing this?</span></b><br/>
              <span className="faq4b">A: My Hush Wallet was inspired by</span> <a href="https://myzenwallet.io/"><span className="faq4c">MyZenWallet's</span></a> <span className="faq4d">which was inspired by</span> <a href="https://myetherwallet.com"><span className="faq4e">MyEtherWallet's.</span></a> <span className="faq4f">We also want to provide the people the ability to interact with the HUSH blockchain easily, without having to run a full node.</span>
            </p>
          
          </Col>
        </Row>
      </Container>
    )
  }
}