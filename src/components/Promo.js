import Button from "./Button"
import { useNavigate } from 'react-router-dom'




const Promo = () => {

    const navigate = useNavigate();

    const onClick = () => {
        navigate('/register');
    }



    return (

        <section className="promo-container">

            <h1>Faites partie des revendeurs</h1>
            <p>Afin de pouvoir participer à la boutique en tant que vendeur, vous devez absolument faire partie de la communauté </p>
            {window.location.pathname === '/' && (

                <Button
                    text={"Je veux m'inscrire "}
                    className={'hero-btn'}
                    onclick={onClick}
                />
            )}
        </section>
    )
}

export default Promo