import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string,
    image: string,
    src:string
}

const Project: React.FC<ProjectPropsType> = (props) => {
    const {image, title,src} = props

    const onImgClick = () => {

    }

    return (
        <div className={`${s.project__wrapper}`}>
            <div className={`${s.project__mediaLink}`}>
                <img className={`${s.project__img}`} src={image} alt="reactPhoto" onClick={onImgClick}/>
                <a className={`${s.project__link}`} href={src} target={"_blank"}>Watch </a>
            </div>
            <div className={`${s.project__description}`}>
                <a className={`${s.project__name}`}  href={src} target={"_blank"}>{title}</a>
            </div>
        </div>
    );
};

export default Project;