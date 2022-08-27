import React, { FunctionComponent, SVGProps } from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title:string
    skillDescription:string[]
    image:string
}

export const Skill:React.FC<SkillPropsType> = ({image,title,skillDescription}) => {
    return (
        <div className={`${s.skill__wrapper}`}>
            <img className={s.skill__img} src={image} alt="skillPhoto"/>
            <h4 className={s.skill__title}>{title}</h4>
            <ul className={`${s.skill__list}`}>
                {skillDescription.map(d => {
                    return <li className={`${s.skill__listItem}`}>{d}</li>
                })}
            </ul>
        </div>
    );
};
