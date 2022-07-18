import React, {useState} from 'react';
import s from './Navigation.module.scss'

export const Navigation = () => {

    return (
        <>
            <nav className={`${s.nav}`}>
                <ul className={`${s.menu}`} >
                    <li className={s.menu__item}>
                        <a href="#" className={s.menu__link}>Main</a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#" className={s.menu__link}>Skills</a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#" className={s.menu__link}>Projects</a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#" className={s.menu__link}>Contacts</a>
                    </li>
                </ul>
            </nav>
            <div className={s.burger}>
                <div className={`${s.burger__wrapper}`}>
                    <div className={s.burger__item}></div>
                    <div className={s.burger__item}></div>
                    <div className={s.burger__item}></div>
                </div>
            </div>
        </>
    );
}
