import React from 'react';
import s from "./Footer.module.scss";
import commonStyle from "../common/CommonStyle.module.scss";
import {ReactComponent as LinkedIn} from "../../assets/img/socialMedia/linkedin.svg";
import {ReactComponent as Github} from "../../assets/img/socialMedia/github.svg";
import {ReactComponent as Telegram} from "../../assets/img/socialMedia/telegram.svg";
import {ReactComponent as Codewars} from "../../assets/img/socialMedia/codewars.svg";
import {ReactComponent as CV} from "../../assets/img/socialMedia/cv.svg";

export const Footer = () => {
    return (
        <footer className={`${s.footer}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.footer__wrapper}`}>
                    <div className={s.footer__socialMedia}>
                        <a href={'$'}>
                            <LinkedIn className={s.footer__icon}/>
                        </a>
                        <a href="#">
                            <Github className={s.footer__icon}/>
                        </a>
                        <a href="$">
                            <Telegram className={s.footer__icon}/>
                        </a>
                        <a href="$">
                            <Codewars className={s.footer__icon}/>
                        </a>
                        <a href="$">
                            <CV className={s.footer__icon}/>
                        </a>
                    </div>
                    <h2 className={`${s.footer__title}`}>Denis Tavabilov</h2>
                </div>
            </div>
        </footer>
    );
};
