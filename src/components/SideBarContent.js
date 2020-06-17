import React from 'react'
import PropTypes from 'prop-types'
import SideBarPanel from './SideBarPanel'
import { Link } from 'react-router-dom'

const styles = {
      sidebar: {
        width: 256,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      sidebarLink: {
        display: 'block',
        padding: '16px 0px',
        color: '#757575',
        textDecoration: 'none',
        //cursor: 'pointer'
      },
      divider: {
        margin: '8px 0',
        height: 1,
        backgroundColor: '#757575'
      },
      content: {
        padding: '16px',
        flexGrow: '1',
        backgroundColor: 'white'
      }
}

// Menu divider
// <div style={styles.divider} />

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar

  return (
    <SideBarPanel title={'Menu'} style={style}>
      <div style={styles.content}>
        <Link to='/myhushwallet/'style={styles.sidebarLink}>Wallet</Link>
        <Link to='/getting_started'style={styles.sidebarLink}>Getting started</Link>
        <Link to='/faq'style={styles.sidebarLink}>FAQ</Link>
        <Link to='/contact'style={styles.sidebarLink}>Contact</Link>
      </div>
    </SideBarPanel>
  )
}

SidebarContent.propTypes = {
  style: PropTypes.object
}

export default SidebarContent
