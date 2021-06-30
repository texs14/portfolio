import React from 'react';
import skills from '../../images/skills.png';

import './AboutMe.scss';

function AboutMe() {
    return (
        <>
            <section className={"description"}>
                <div className="wrapper-for-bg">
                <div className="description__wrapper">
                    <div className={"description__photo"}></div >
                    <h1 className={"description__title"}>Руслан — Front-end разработчик</h1>
                </div>
                <p className={"description__paragraph"}>В 20-м году окончил курсы по Front-end разработке от Яндекса. После окончания курса не терял время впустую и осваивал новое для себя технологии, React, PHP, SASS. Очень люблю обучаться чему-то новому и хочу расти профессионально.</p>
                </div>
            </section>

            <section className={"skills"}>
                <div className="wrapper-for-bg">

                <h2 className={"skills__title"}>Skills</h2>
                <img className={"skills__image"} src={skills} alt="Перечень скилов"/>
                </div>
            </section>
        </>
    )
}

export default AboutMe;