import React from 'react';

import './footer.scss';

function Footer() {
    return (
        <div className={"footer"}>
            <div className="wrapper-for-bg">
                <ul className="footer__list-contacts">
                    <li className="footer__contact">Для связи:</li>
                    <li className="footer__contact">texs14@yandex.ru</li>
                    <li className="footer__contact">telegram — @artyr_kyrganov</li>
                </ul>
                <p className="footer__ps">Этот сайт сделан как дополнение к портфолио и не несёт в себе никакого другого смысла</p>
            </div>
        </div>
    );
}

export default Footer;