import React, {useState} from 'react';
import s from './Navigation.module.scss'

export const Navigation = () => {
    const [isClickBurger, setIsClickBurger] = useState(false)

    const onBurgerClick = () => setIsClickBurger(!isClickBurger)
    const onLinkClick = () => setIsClickBurger(false)

    return (
        <>
            <nav className={`${s.nav}`}>
                <ul className={`${s.menu} ${isClickBurger ? s.right : ""}`}>
                    <li className={s.menu__item}>
                        <a href="#" className={s.menu__link} onClick={onLinkClick}>Main</a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#" className={s.menu__link} onClick={onLinkClick}>Skills</a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#" className={s.menu__link} onClick={onLinkClick}>Projects</a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#" className={s.menu__link} onClick={onLinkClick}>Contacts</a>
                    </li>
                </ul>
            </nav>
            <div className={s.burger}>
                <div className={`${s.burger__wrapper} ${isClickBurger ? s.click : ""}`} onClick={onBurgerClick}>
                    <span className={`${s.burger__item} ${s.burger__item1}`}></span>
                    <span className={`${s.burger__item} ${s.burger__item2}`}></span>
                    <span className={`${s.burger__item} ${s.burger__item3}`}></span>
                </div>
            </div>
        </>
    );
}
