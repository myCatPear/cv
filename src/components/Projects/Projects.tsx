import React from 'react';
import s from './Projects.module.scss'
import commonStyle from '../common/CommonStyle.module.scss'
import Project from "../Project/Project";
import todoAPP from 'assets/img/projects/todoAPP.png'
import {Fade, Zoom} from "react-awesome-reveal";

const Projects = () => {
    return (
        <section id="projects" className={`${s.projects}`}>
            <div className={`${commonStyle.container}`}>
                <Zoom>
                    <div className={`${s.projects__wrapper}`}>
                        <h2 className={`${commonStyle.sectionTitle}`}>My Projects</h2>
                        <div className={`${s.projects__list}`}>
                            <Project title={'Todolist app'}
                                     tools={['React', 'Redux', 'REST API', 'MUI', 'Jest', 'Storybook']}
                                     image={todoAPP}
                                     src={'https://github.com/myCatPear/MyToDoApp'}
                            />
                        </div>
                    </div>
                </Zoom>
            </div>
        </section>
    );
};

export default Projects;