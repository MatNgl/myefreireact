import React from 'react';
import './navbar.css';
const NavbarEleve = () => {
    return (
        <div className='Navbar'>
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/eleve/cours">Cours</a></li>
                    <li><a href="/eleve/notes">Notes</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavbarEleve;
