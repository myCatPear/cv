import React from 'react';
import s from './Skill.module.css'
import commonStyle from '../common/CommonStyle.module.css'

export const Skill = () => {
    return (
        <div className={`${s.skill__wrapper}`}>
            <img src="https://limeiraplasticos.com.br/imagem/icones/cores/4.png" alt="skillPhoto"/>
            <h4>React</h4>
        </div>
    );
};
