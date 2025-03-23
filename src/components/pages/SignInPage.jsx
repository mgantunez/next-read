import PropTypes from "prop-types";
import { useState } from "react";

const SignInPage = ({ getSignUp, signUpErrorMessage }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (ev) => {
        setEmail(ev.target.value);
    };

    const handlePassword = (ev) => {
        setPassword(ev.target.value);
    };

    const handleForm = (ev) => {
        ev.preventDefault();
        getSignUp({ email, password });
    };

    return (
        <section className="signInPage">
            <h1 className="signInPage__title">Acceso a Next Read</h1>
            <p className="signInPage__description">
                Accede a con tu email y contraseña y guarda tu próxima lectura. ¡Empieza tu aventura literaria!
            </p>
            <form className="signInPage__form" onSubmit={handleForm}>
                <label className="signInPage__label" htmlFor="email">
                    Correo electrónico
                </label>
                <input
                    className="signInPage__input"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                />

                <label className="signInPage__label" htmlFor="password">
                    Contraseña
                </label>
                <input
                    className="signInPage__input"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePassword}
                />

                <input
                    className="signInPage__button"
                    type="submit"
                    value="Acceder"
                />

                {signUpErrorMessage && (
                    <p className="signInPage__error">Error: {signUpErrorMessage}</p>
                )}
            </form>
        </section>
    );
};

SignInPage.propTypes = {
    getSignUp: PropTypes.func.isRequired,
    signUpErrorMessage: PropTypes.string,
};

export default SignInPage;
