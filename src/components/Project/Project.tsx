import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string,
    tools: string[],
    image: string,
    src:string
}

const Project: React.FC<ProjectPropsType> = (props) => {
    const {image, title, tools,src} = props

    const onImgClick = () => {

    }

    return (
        <div className={`${s.project__wrapper}`}>
            <div className={`${s.project__mediaLink}`}>
                <img className={`${s.project__img}`} src={image} alt="reactPhoto" onClick={onImgClick}/>
                <a className={`${s.project__link}`} href={src} target={"_blank"}>Watch </a>
            </div>
            <div className={`${s.project__description}`}>
                <h4 className={`${s.project__name}`}>{title}</h4>
                <ul className={s.project__tools}>
                    {tools.map(tool => <li className={s.project__tool}>{tool}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Project;