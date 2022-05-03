import React from 'react';
import s from './Projects.module.css'
import commonStyle from '../common/CommonStyle.module.css'
import Project from "../Project/Project";

const Projects = () => {
    return (
        <section className={`${s.projects}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.projects__wrapper}`}>
                    <h2 className={`${commonStyle.sectionTitle}`}>My Projects</h2>
                    <div className={`${s.projects__list}`}>
                        <Project/>
                        <Project/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;