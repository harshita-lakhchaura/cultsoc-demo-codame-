import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EventIcon from '@material-ui/icons/Event';
import Groups2Icon from '@mui/icons-material/Groups2';
import ContactsIcon from '@mui/icons-material/Contacts';
import gsap from "gsap"
import { Tooltip } from '@material-ui/core';
import '../styling/navbar.scss'

export default function Navbar() {
  
  function move(id) {
    var tl = gsap.timeline();
    tl
      .to("#bubble1", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out", opacity:2,border:"6px solid black",}, 0)
      .to("#bubble2", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out",opacity:2,border:"6px solid black",}, 0)
      .to("#bubble3", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out",opacity:2,border:"6px solid black",}, 0)
      .to("#bubble4", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out",opacity:2,border:"6px solid black",}, 0)
      .to("#bubble5", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out",opacity:2,border:"6px solid black",}, 0)
      .to("#bubble6", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out",opacity:2,border:"6px solid black",}, 0)
      .to("#bubble7", {duration: 0.01, y: "0%", boxShadow: 'none', ease: "ease-out",opacity:2,border:"6px solid black",}, 0)
      .to(".icon", {duration: 0.05, opacity: 1, ease: "ease-out",}, 0)
      .to("#bgBubble", {duration: 0.01, ease: "ease-in-out"}, 0.1)
      .to(`#bubble${id}`, { border:"6px solid goldenrod",duration: 0.05, y: "10%", opacity: 2, ease: "ease-out"},  '-=0.1')
      .to(`#bubble${id}> span`, {duration: 0.05,  y: "0%", opacity: 2, ease: "ease-out"}, '-=0.1')
  }
  

  return (<>
  <div className='navbar navbar-dark fixed-top'>
    <div className="navcontainer" id="navbarContainer">
      <div className="navbar">
      <div className="bubbleWrapper">
      <div id="bubble1" class="bubble" onClick={()=>move('1')}><Tooltip title={<h1 style={{ color: "goldenrod" }}>Home</h1>}><span class="icon"><a class="nav-link" href="#masthead"><HomeIcon style={{ color: "goldenrod" }}/></a></span></Tooltip></div>
      <div id="bubble2" class="bubble" onClick={()=>move('2')}><Tooltip title={<h1 style={{ color: "goldenrod" }}>Groups</h1>}><span class="icon"><a class="nav-link" href="#groups"><GroupIcon style={{ color: "goldenrod" }}/></a></span></Tooltip></div>
      <div id="bubble3" class="bubble" onClick={()=>move('3')}><Tooltip title={<h1 style={{ color: "goldenrod" }}>Gallery</h1>}><span class="icon"><a class="nav-link" href="#gallery"><PhotoLibraryIcon style={{ color: "goldenrod" }}/></a></span></Tooltip></div>
      <div id="bubble4" class="bubble" onClick={()=>move('4')}><Tooltip title={<h1 style={{ color: "goldenrod" }}>Notices</h1>}><span class="icon"><a class="nav-link" href="#notice"><LibraryBooksIcon style={{ color: "goldenrod" }}/></a></span></Tooltip></div>
      <div id="bubble5" class="bubble" onClick={()=>move('5')}><Tooltip title={<h1 style={{ color: "goldenrod" }}>Events</h1>}><span class="icon"><a class="nav-link" href="#event"><EventIcon style={{ color: "goldenrod" }}/></a></span></Tooltip></div>
      <div id="bubble6" class="bubble" onClick={()=>move('6')}><Tooltip title={<h1 style={{ color: "goldenrod" }}>Team</h1>}><span class="icon"><a class="nav-link" href="#team"><Groups2Icon style={{ color: "goldenrod" }}/></a></span></Tooltip></div>
      <div id="bubble7" class="bubble" onClick={()=>move('7')}><Tooltip title={<h1 style={{ color: "goldenrod" }}>Contact</h1>}><span class="icon"><a class="nav-link" href="#contact"><ContactsIcon style={{ color: "goldenrod" }}/></a></span></Tooltip></div> 
    </div>
    </div> 
  </div>
  </div>
  </>
  )
}
