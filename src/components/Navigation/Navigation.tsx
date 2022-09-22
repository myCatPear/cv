import React, {useState} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
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
                        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={20} duration={500} className={s.menu__link} onClick={onLinkClick}>
                            Skills
                        </Link>
                    </li>
                    <li className={s.menu__item}>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={20} duration={500} className={s.menu__link} onClick={onLinkClick}>
                            Projects
                        </Link>
                    </li>
                    <li className={s.menu__item}>
                        <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={20} duration={500} className={s.menu__link} onClick={onLinkClick}>
                            Contacts
                        </Link>
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
