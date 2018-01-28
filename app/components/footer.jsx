import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import './style.css'

import FAHome from 'react-icons/lib/fa/home'
import TiThList from 'react-icons/lib/ti/th-list'
import FARedditAlien from 'react-icons/lib/fa/reddit-alien'
import FAFacebook from 'react-icons/lib/fa/facebook'
import FATwitter from 'react-icons/lib/fa/twitter'
import FABitcoin from 'react-icons/lib/fa/bitcoin'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import FAGithub from 'react-icons/lib/fa/github'
import FAComments from 'react-icons/lib/fa/comments'
import FADashboard from 'react-icons/lib/fa/dashboard'


export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (      
      <div className="footerstyle">
        <br/>
        <Container> 
<div className="outer">
<div className="contact-text links">     
        <Row>
          <Col md="12">
            <p><span className="f1">MAKE SURE YOU ARE ON</span><b> WALLET.MYHUSH.ORG</b></p>

            <p className="f2">Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!!!</p>

            <p><span className="f3">Donations are always welcome!</span>
              <a href="http://dashboard.myhush.org/#donate" target="_blank" data-toggle="tooltip" title="Dashboard donation addresses"> <span className="f4">Dashboard donation addresses</span></a><br/><br/>
            </p>
          </Col>
              </Row>

<a href="https://myhush.org" target="_blank" data-toggle="tooltip" title="Website">  <FAHome size={28}/>  </a>
<a href="https://forum.myhush.org" target="_blank" data-toggle="tooltip" title="Forum">  <TiThList size={28}/>  </a>
<a href="https://dashboard.myhush.org" target="_blank" data-toggle="tooltip" title="Dashboard">  <FADashboard size={28}/>  </a>
<a href="https://discord.io/hush" target="_blank" data-toggle="tooltip" title="Discord">  <FAComments size={28}/>  </a>
<a href="https://twitter.com/MyHushTeam" target="_blank" data-toggle="tooltip" title="Twitter">  <FATwitter size={28}/>  </a>
<a href="https://fb.me/MyHushTeam" target="_blank" data-toggle="tooltip" title="Facebook">  <FAFacebook size={28}/>  </a>
<a href="https://reddit.com/r/Myhush" target="_blank" data-toggle="tooltip" title="Reddit">  <FARedditAlien size={28}/>  </a>
<a href="https://bitcointalk.org/index.php?topic=2008578.0" target="_blank" data-toggle="tooltip" title="Bitcoin Talk">  <FABitcoin size={28}/>  </a>
<a href="https://github.com/MyHush" target="_blank" data-toggle="tooltip" title="GitHub">  <FAGithub size={28}/> </a>
<a href="mailto:contact@myhush.org" target="_blank" data-toggle="tooltip" title="contact@myhush.org">  <FaEnvelopeO size={28}/>  </a>
    <br/>
</div>
    </div>
        </Container>
      </div>
    )
  }
}