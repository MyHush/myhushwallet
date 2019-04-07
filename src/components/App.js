import 'bootstrap/dist/css/bootstrap.css';
import 'react-table/react-table.css'
import React, {Component} from 'react'
import Sidebar from 'react-sidebar'
import SideBarContent from './SideBarContent'
import MainRouter from './MainRouter'
import SideBarPanel from './SideBarPanel'

import { Menu }  from './images/svg';
import { Hush }  from "./images/svg";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  headerIcons: {
    color: 'white'
  },
  contentHeaderTitle: {
    float: 'right'
  },

  content: {
    padding: "16px"
  }
}

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  constructor (props) {
    super(props)


    this.state = {
      docked: mql.matches,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
};

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }


  render () {
    const sidebar = <SideBarContent />

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="Menu"
            style={styles.contentHeaderMenuLink}
          >
            <Menu size='30' style={styles.headerIcons} />
          </a>
        )}
        <Hush size='30' color='#fff'/><span> Hush Wallet</span>
      </span>
    )

    const sidebarProps = {
 sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen    }

    return (
      <Sidebar {...sidebarProps}>
        <SideBarPanel title={contentHeader}>
          <div style={styles.content}>
            <MainRouter />
          </div>
        </SideBarPanel>
      </Sidebar>
    )
  }
}

export default App