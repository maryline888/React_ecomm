import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Hero = () => {
    const location = useLocation()
    return (

        <section className="hero">
            <div className='hero-title'>
                <p>Site de revente de vêtements pour enfants no1 au Canada!</p>
            </div>

            <section className='hero-container'>

                {/* <h3>Découvrez notre sélection et habillez vos petits à petits prix.</h3> */}

                <div className="hero-categories">
                    <div className="hero-categories-item">
                        <img src="./img/bb-boy.jpg" alt="baby boy" />
                        <Link to="/shop">Bébé 0-18 mois</Link>
                    </div>
                    <div className="hero-categories-item">
                        <img src="./img/toddlerfille.jpg" alt="enfants" className='imgHeight' />
                        <Link to="/shop">Jeunes enfants</Link>
                    </div>

                    <div className="hero-categories-item">
                        <img src="./img/larentree.jpg" alt="enfants" />
                        <Link to="/shop">La rentrée</Link>
                    </div>
                    <div className="hero-categories-item">
                        <img src="./img/ete.jpg" alt="enfants" />
                        <Link to="/shop">Été</Link>
                    </div>
                    <div className="hero-categories-item">
                        <img src="./img/hiver.jpg" alt="enfants" />
                        <Link to="/shop">Hiver</Link>
                    </div>
                </div>

            </section>

            {location.pathname === '/'}
        </section>
    )
}

export default Hero