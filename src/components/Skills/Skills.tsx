import React from 'react';
import s from './Skills.module.scss'
import commonStyle from '../common/CommonStyle.module.scss'
import {Skill} from "../Skill/Skill";
import HTML from 'assets/img/skills/css.svg'
import JS from 'assets/img/skills/js.svg'
import REACT from 'assets/img/skills/react.svg'
import REST from 'assets/img/skills/api.svg'
import REDUX from 'assets/img/skills/redux.svg'
import TYPESCRIPT from 'assets/img/skills/ts.svg'
import {Fade} from "react-awesome-reveal";

export const Skills = () => {
    return (
        <section id="skills" className={`${s.skills}`}>
            <div className={`${commonStyle.container}`}>

                    <div className={`${s.skills__wrapper}`}>
                        <h2 className={`${commonStyle.sectionTitle}`}>My skills</h2>
                        <Fade delay={100} direction={"left"}>
                        <div className={`${s.skills__list}`}>

                            <Skill
                                title={'HTML/CSS'}
                                skillDescription={['semantics', 'аdaptive', 'flexbox/grid', 'BEM', 'SASS']}
                                image={HTML}
                            />
                            <Skill
                                title={'JS'}
                                skillDescription={['ECMAScript 6', 'DOM', 'promise', 'event loop', 'closure']}
                                image={JS}
                            />
                            <Skill
                                title={'REACT'}
                                skillDescription={['Function components', 'Class components', 'HOC', 'React router dom', 'Hooks']}
                                image={REACT}
                            />

                            <Skill
                                title={'REST API'}
                                skillDescription={['HTTP', 'CRUD', 'AXIOS']}
                                image={REST}
                            />
                            <Skill
                                title={'REDUX'}
                                skillDescription={['Redux-Thunk', 'FLUX', 'Reducers', 'Action']}
                                image={REDUX}
                            />
                            <Skill
                                title={'TYPESCRIPT'}
                                skillDescription={['Type', 'Interface', 'Generics']}
                                image={TYPESCRIPT}
                            />
                        </div>
                        </Fade>
                    </div>

            </div>
        </section>
    );
};
