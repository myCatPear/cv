import React from 'react';
import s from './Skill.module.css'
import commonStyle from '../common/CommonStyle.module.scss'

export const Skill = () => {
    return (
        <div className={`${s.skill__wrapper}`}>
            <img src="https://limeiraplasticos.com.br/imagem/icones/cores/4.png" alt="skillPhoto"/>
            <h4>React</h4>
            <ul className={`${s.skill__list}`}>
                <li className={`${s.skill__listItem}`}>Hooks</li>
                <li>Virtual DOM Virtual DOM Virtual DOM Virtual DOM Virtual DOM</li>
                <li>Props Props Props Props Props</li>
                <li>Callback</li>
            </ul>
        </div>
    );
};
