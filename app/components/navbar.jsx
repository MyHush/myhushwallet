import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownItem } from 'reactstrap';
import './style.css';

export default class ZNavbar extends React.Component {
  constructor (props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.UseEnglish = this.UseEnglish.bind(this)
    this.UseGerman = this.UseGerman.bind(this)
    this.UseFrench = this.UseFrench.bind(this)
    this.state = {
        isOpen: false,
        useEnglish: true,
        useGerman: false,
        useFrench: false,
        faq: 'FAQ',
        guide: 'GETTING STARTED'
    }
  }

  toggleNavbar () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  UseEnglish () {
      this.setState({
          useEnglish: true,
          useGerman: false,
          useFrench: false,
          faq: 'FAQ',
          guide: 'GETTING STARTED'
      })
  }

  UseGerman () { 
      this.setState({
          useEnglish: false,
          useGerman: true,
          useFrench: false,
          faq: 'FAQG',
          guide: 'JA STARTEN'
      })
  }

  UseFrench () { 
      this.setState({
          useEnglish: false,
          useGerman: false,
          useFrench: true,
          faq: 'FAQF',
          guide: 'oui'
      })
  }
  
  render () {
      return (

          <div>
      <Navbar className="navbarstyle" toggleable>
        <NavbarToggler className="customtoggler" right onClick={this.toggleNavbar} />
        <div className="container">
        <NavbarBrand className="style" href='/'>
          <img src="/favicon.ico" height={50}/>
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink className="style2 faq" href='/faq.html'>
                {this.state.faq}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="style2 gt" href='/guide.html'>
                {this.state.guide}
              </NavLink>
            </NavItem> 
              {/* 
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="style2" nav caret>
                  LANGUAGE
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem onClick={this.UseEnglish} >
                    English
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.UseGerman} >
                   German
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.UseFrench} >
                    French
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> 
              */}
            </Nav>                     
        </Collapse>
              </div> 
      </Navbar>
      </div>


    );
  }
}
