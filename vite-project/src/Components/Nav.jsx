// Nav.js
import './App.css'
const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Hem</a></li>
                <li><a href="/kurser">Kurser</a></li>
                <li><a href="/kalender">Kalender</a></li>
                {/* Lägg till fler länkar efter behov */}
            </ul>
        </nav>
    );
};

export default Nav;
