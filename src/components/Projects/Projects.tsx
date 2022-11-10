import React from 'react';
import s from './Projects.module.scss'
import commonStyle from '../common/CommonStyle.module.scss'
import Project from "../Project/Project";
import todoAPP from 'assets/img/projects/todoApp.png'
import github from 'assets/img/projects/github.png'
import password from 'assets/img/projects/password.png'
import cards from 'assets/img/projects/cards.png'
import creditCard from 'assets/img/projects/creditCard.png'
import socialNetwork from 'assets/img/projects/socialnetwork.png'
import {Fade, Zoom} from "react-awesome-reveal";

const Projects = () => {
    return (
        <section id="projects" className={`${s.projects}`}>
            <div className={`${commonStyle.container}`}>
                <Zoom>
                    <div className={`${s.projects__wrapper}`}>
                        <h2 className={`${commonStyle.sectionTitle}`}>My Projects</h2>
                        <div className={`${s.projects__list}`}>
                            <Project title={'Todolist'}
                                     image={todoAPP}
                                     src={'https://github.com/myCatPear/MyToDoApp'}
                            />
                            <Project title={'GitHub Find User'}
                                     image={github}
                                     src={'https://github.com/myCatPear/GitHubFindUserApp'}
                            />
                            <Project title={'Cards'}
                                     image={cards}
                                     src={'https://github.com/myCatPear/cards_with_team'}
                            />
                            <Project title={'Password generator'}
                                     image={password}
                                     src={'https://github.com/myCatPear/PasswordGeneratorApp'}
                            />
                            <Project title={'Credit card'}
                                     image={creditCard}
                                     src={'https://github.com/myCatPear/Interactive-card-form'}
                            />
                            <Project title={'Social network'}
                                     image={socialNetwork}
                                     src={'https://github.com/myCatPear/samurai-way-main'}
                            />
                        </div>
                    </div>
                </Zoom>
            </div>
        </section>
    );
};

export default Projects;