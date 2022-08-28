import React from 'react';
import commonStyle from '../common/CommonStyle.module.scss'
import s from './Main.module.scss'
import photo from '../../assets/img/i.png'
import {ReactComponent as LinkedIn} from 'assets/img/socialMedia/linkedin.svg'
import {ReactComponent as Github} from 'assets/img/socialMedia/github.svg'
import {ReactComponent as Telegram} from 'assets/img/socialMedia/telegram.svg'
import {ReactComponent as Codewars} from 'assets/img/socialMedia/codewars.svg'
import {ReactComponent as CV} from 'assets/img/socialMedia/cv.svg'

export const Main = () => {
    return (
        <section className={`${s.main}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.main__wrapper}`}>
                    <div className={s.main__photo}>
                        <img  src={`${photo}`} alt="logo"/>
                    </div>
                    <h1 className={s.main__author}>Denis Tavabilov</h1>
                    <p className={s.main__text}>I'm a frontend developer</p>
                    <div className={s.main__socialMedia}>
                        <span className={s.main__line}></span>
                        <a href={'$'}>
                            <LinkedIn className={s.main__icon}/>
                        </a>
                        <a href="#">
                            <Github className={s.main__icon}/>
                        </a>
                        <a href="$">
                            <Telegram className={s.main__icon}/>
                        </a>
                        <a href="$">
                            <Codewars className={s.main__icon}/>
                        </a>
                        <a href="$">
                            <CV className={s.main__icon}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

