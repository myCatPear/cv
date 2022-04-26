import React from 'react';
import s from './Skills.module.css'
import commonStyle from '../common/CommonStyle.module.css'
import {Skill} from "../Skill/Skill";

export const Skills = () => {
    return (
        <section className={`${s.skills}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.skills__wrapper}`}>
                    <h2 className={`${commonStyle.sectionTitle}`}>My skills</h2>
                    <div className={`${s.skills__list}`}>
                        <Skill/>
                    </div>
                </div>
            </div>
        </section>
    );
};
