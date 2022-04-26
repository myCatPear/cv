import React from 'react';
import commonStyle from '../common/CommonStyle.module.css'
import s from './Main.module.css'

export const Main = () => {
    return (
        <section className={`${s.main}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.main__wrapper}`}>
                    <div className={`${s.main__text}`}>
                        <span>Hi there!</span>
                        <h1>My name's Denis Tavabilov.</h1>
                        <span>I'm beginner frontend developer.</span>
                    </div>
                    <div>
                        <img src="https://png.pngitem.com/pimgs/s/111-1114791_male-user-icon-hd-png-download.png" alt="logo"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

