

import { Link } from 'react-router-dom'


const Header = () => {


    return (
        <header className="header">
            <div className="header__logo">
                <h1>Fripperie Mini</h1>
                {/* <img src="/images/logo.png" alt="logo" /> */}
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">À Propos</Link>
                    </li>
                    <li>
                        <Link to="/shop">Magasiner</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/connection">Se Connecter</Link>
                    </li>
                </ul>
            </nav>


        </header>


    )
}



export default Header