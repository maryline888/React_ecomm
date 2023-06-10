import { Link, useLocation } from 'react-router-dom';

const Hero = () => {
    const location = useLocation();

    return (
        <section className="hero">
            <div className='hero-title'>
                <h3>Découvrez notre sélection et habillez vos petits à petits prix.</h3>
                <p>Site de revente de vêtements pour enfants</p>
            </div>

            <section className='hero-container'>
                <div className="hero-categories">
                    <Link to="/shop">
                        <div className="hero-categories-item">
                            <img src={process.env.PUBLIC_URL + '/img/bb-boy.jpg'} alt="baby boy" />
                            <p>Bébé 0-18 mois</p>
                        </div>
                    </Link>
                    <Link to="/shop">
                        <div className="hero-categories-item">
                            <img src={process.env.PUBLIC_URL + "/img/toddlerfille.jpg"} alt="enfants" className='imgHeight' />
                            <p>Jeunes enfants</p>
                        </div>
                    </Link>
                    <Link to="/shop">
                        <div className="hero-categories-item">
                            <img src={process.env.PUBLIC_URL + "/img/larentree.jpg"} alt="enfants" className='imgHeight' />
                            <p>La rentrée</p>
                        </div>
                    </Link>
                    <Link to="/shop">
                        <div className="hero-categories-item">
                            <img src={process.env.PUBLIC_URL + "/img/ete.jpg"} alt="enfants" />
                            <p>Été</p>
                        </div>
                    </Link>
                    <Link to="/shop">
                        <div className="hero-categories-item">
                            <img src={process.env.PUBLIC_URL + "/img/hiver.jpg"} alt="enfants" />
                            <p>Hiver</p>
                        </div>
                    </Link>
                </div>
            </section>
        </section>
    );
}

export default Hero;
