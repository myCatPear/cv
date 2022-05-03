import React from 'react';
import s from "./Footer.module.css";
import commonStyle from "../common/CommonStyle.module.css";

export const Footer = () => {
    return (
        <footer className={`${s.footer}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.footer__wrapper}`}>
                    <h2 className={`${commonStyle.sectionTitle}`}>Denis Tavabilov</h2>
                    <ul className={`${s.footer__list}`}>
                        <li className={`${s.footer__item}`}>
                            <img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg" alt="footerPhoto"/>
                        </li>
                        <li className={`${s.footer__item}`}>
                            <img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg" alt="footerPhoto"/>
                        </li>
                        <li className={`${s.footer__item}`}>
                            <img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg" alt="footerPhoto"/>
                        </li>
                        <li className={`${s.footer__item}`}>
                            <img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg" alt="footerPhoto"/>
                        </li>
                    </ul>
                    <p>2022 all rights reserved</p>
                </div>
            </div>
        </footer>
    );
};
