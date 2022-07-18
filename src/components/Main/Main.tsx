import React from 'react';
import commonStyle from '../common/CommonStyle.module.scss'
import s from './Main.module.scss'
import photo from '../../assets/img/i.png'

export const Main = () => {
    return (
        <section className={`${s.main}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.main__wrapper}`}>
                    <div className={s.main__photo}>
                        <img src={`${photo}`} alt="logo"/>
                    </div>
                    <h1 className={s.main__author}>Denis Tavabilov</h1>
                    <p className={s.main__text}>I'm frontend developer</p>
                </div>
            </div>
        </section>
    );
};

