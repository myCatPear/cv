import React from 'react';
import s from "./Contacts.module.scss";
import commonStyle from "../common/CommonStyle.module.scss";
import {Fade} from "react-awesome-reveal";

const Contacts = () => {
    return (
        <section id="contacts" className={`${s.contacts}`}>
            <div className={`${commonStyle.container}`}>
                <Fade delay={100}>
                <div className={`${s.contacts__wrapper}`}>
                    <h2 className={`${commonStyle.sectionTitle}`}>Contacts</h2>
                    <div className={s.contacts__info}>
                        <div className={s.inTouch}>
                            <ul className={s.inTouch__list}>
                                <li className={s.inTouch__item}>
                                    <a className={s.inTouch__link} href="tel:89501994914">
                                        +7-950-199-49-14
                                    </a>
                                </li>
                                <li className={s.inTouch__item}>
                                    <a className={s.inTouch__link} href="mailto:dagger1233@gmail.com">
                                        dagger1233@gmail.com
                                    </a>
                                </li>
                                <li className={s.inTouch__item}>
                                    <a className={s.inTouch__link} href="#">
                                        Telegram
                                    </a>
                                </li>
                                <li className={s.inTouch__item}>
                                    <a className={s.inTouch__link} href="$">
                                        Download CV
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.contacts__form}>
                            <form className={`${s.form}`} action="/action">
                                <label className={s.form__label}>
                                    Name
                                    <input name="name" className={s.form__input} type="text" placeholder="Write your name here" autoComplete='name'/>
                                </label>
                                <label className={s.form__label}>
                                    Email
                                    <input className={s.form__input} name="email" type="email" autoComplete="email" placeholder="Write your email here"/>
                                </label>
                                <label className={s.form__label}>
                                    Message
                                    <textarea className={s.form__textarea}></textarea>
                                </label>
                                <input className={s.form__button} type="submit" value={'Send message'}/>
                            </form>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    );
};

export default Contacts;