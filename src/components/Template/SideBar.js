import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Cheng Zhou Ong</h2>
        <p><a href="mailto:czo2@illinois.edu">czo2@illinois.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Cheng Zhou. I like building things.
        I am a <a href="http://www.cs.uiuc.edu">UIUC</a> Junior. Before ChemistLee I was
        at <a href="https://www.linkedin.com/company/icmsconsultinggroup">ICMS Consulting Group</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ong Cheng Zhou <Link to="/">mylink.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
