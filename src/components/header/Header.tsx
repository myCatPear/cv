import React from 'react';
import s from './Header.module.scss'
import {Navigation} from "../Navigation/Navigation";
import commonStyle from '../common/CommonStyle.module.scss'

export const Header = () => {
    return (
        <header className={`${s.header}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.header__wrapper}`}>
                    <Navigation/>
                </div>
            </div>

        </header>
    );
};