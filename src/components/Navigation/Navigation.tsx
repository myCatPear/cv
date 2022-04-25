import React from 'react';
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
            <nav className={`${s.nav}`}>
                <ul className={`${s.menu}`}>
                    <li className="menu__item">
                        <a href="#" className="menu__link">Main</a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">Skills</a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">Projects</a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">Contacts</a>
                    </li>
                </ul>
            </nav>

    );
}
