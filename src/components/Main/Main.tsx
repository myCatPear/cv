import React from 'react';
import commonStyle from '../common/CommonStyle.module.scss'
import s from './Main.module.scss'
import photo from '../../assets/img/i.png'
import {ReactComponent as LinkedIn} from 'assets/img/socialMedia/linkedin.svg'
import {ReactComponent as Github} from 'assets/img/socialMedia/github.svg'
import {ReactComponent as Telegram} from 'assets/img/socialMedia/telegram.svg'
import {ReactComponent as Codewars} from 'assets/img/socialMedia/codewars.svg'
import {ReactComponent as CV} from 'assets/img/socialMedia/cv.svg'
import Particle from "../Particle/Particle";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';


export const Main = () => {

    return (
        <section id="main" className={`${s.main}`}>
            <Particle/>
            <div className={`${commonStyle.container}`}>
                <Fade delay={100}>
                    <div className={`${s.main__wrapper}`}>
                        <div className={s.main__photo}>
                            <img src={`${photo}`} alt="logo"/>
                        </div>
                        <h1 className={s.main__author}>Denis Tavabilov</h1>
                        <ReactTypingEffect
                            text={[" frontend developer"]}
                            staticText={'I\'m a'}
                            className={s.main__text}
                            speed={200}
                            typingDelay={1000}
                            eraseDelay={2000}
                            eraseSpeed={100}
                        />
                        <div className={s.main__socialMedia}>
                            <span className={s.main__line}></span>
                            <a href={'https://www.linkedin.com/in/denis-tavabilov-773765232/'} target="_blank">
                                <LinkedIn className={s.main__icon}/>
                            </a>
                            <a href="https://github.com/myCatPear" target="_blank">
                                <Github className={s.main__icon}/>
                            </a>
                            <a href="https://telegram.me/smeninick" target="_blank">
                                <Telegram className={s.main__icon}/>
                            </a>
                            <a href="https://www.codewars.com/users/Smeninick"  target="_blank">
                                <Codewars className={s.main__icon}/>
                            </a>
                            <a href="$"  target="_blank">
                                <CV className={s.main__icon}/>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

