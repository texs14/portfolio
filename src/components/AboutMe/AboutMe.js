import React from 'react';
import skills from '../../images/skills.png';

import './AboutMe.scss';
import Footer from "../Footer/Footer";

function AboutMe() {
    return (
        <>
            <section className={"description"}>
                <div className="wrapper-for-bg">
                <div className="description__wrapper">
                    <img className={"description__photo"} src="https://klkfavorit.ru/wp-content/uploads/5/6/9/5694f516ff52f6962bec5247e92fef29.jpeg" alt="фото разработчика"/>
                    <h1 className={"description__title"}>Олег — Front-end разработчик</h1>
                </div>
                <p className={"description__paragraph"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                </div>
            </section>

            <section className={"skills"}>
                <div className="wrapper-for-bg">

                <h2 className={"skills__title"}>Skills</h2>
                <img className={"skills__image"} src={skills} alt="Перечень скилов"/>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutMe;