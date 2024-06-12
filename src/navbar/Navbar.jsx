import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div class="Navbar">
        <h1>Sur quel portrail voulez-vous rentrer </h1>
        <nav>
        <ul>
            <a href="/eleve/"><button>Eleve</button></a>
            <a href="/prof/"><button>Prof</button ></a>
        </ul>
        </nav>
    </div>
  );
};

export default Navbar;
