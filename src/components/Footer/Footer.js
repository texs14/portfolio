import React from 'react';

import './footer.scss';

function Footer() {
    return (
        <div className={"footer"}>
            <div className="wrapper-for-bg">
                <ul className="footer__list-contacts">
                    <li className="footer__contact">Для связи:</li>
                    <li className="footer__contact"><a href="mailto:Ryslan.Mikhaylov.Dev@yandex.ru" className={'footer__contact_link'}>Ryslan.Mikhaylov.Dev@yandex.ru</a></li>
                    <li className="footer__contact"><a href="https://telegram.me/Ruslan_Mikhaylov1" target={'_blank'} className={'footer__contact_link'}>telegram — @Ruslan_Mikhaylov1</a></li>
                </ul>
                <p className="footer__ps">Этот сайт сделан как дополнение к портфолио и не несёт в себе никакого другого смысла</p>
            </div>
        </div>
    );
}

export default Footer;