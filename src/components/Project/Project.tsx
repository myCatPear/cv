import React from 'react';
import s from './Project.module.css'
import projects from "../Projects/Projects";

const Project = () => {
    return (
        <div className={`${s.project__wrapper}`}>
            <div className={`${s.project__mediaLink}`}>
                <img src="https://bestprogrammer.ru/wp-content/uploads/2020/04/React-Native.jpg" alt="reactPhoto"/>
                <a  className={`${s.project__link}`} href="#">Watch</a>
            </div>
            <div className={`${s.project__description}`}>
                <span className={`${s.project__name}`}>Project name</span>
                <p className={`${s.project__text}`}>Brief description Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dicta? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, non.</p>
            </div>
        </div>
    );
};

export default Project;