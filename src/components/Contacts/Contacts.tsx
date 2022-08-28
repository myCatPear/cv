import React from 'react';
import s from "./Contacts.module.scss";
import commonStyle from "../common/CommonStyle.module.scss";

const Contacts = () => {
    return (
        <section className={`${s.contacts}`}>
            <div className={`${commonStyle.container}`}>
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
                                    <br/>
                                    <input className={s.form__input} type="text" placeholder="Write your name here"/>
                                </label>
                                <label className={s.form__label}>
                                    Email
                                    <br/>
                                    <input className={s.form__input} type="email" placeholder="Write your email here"/>
                                </label>
                                <label className={s.form__label}>
                                    Message
                                    <br/>
                                    <textarea className={s.form__textarea}></textarea>
                                </label>
                                <input className={s.form__button} type="submit" value={'Send message'}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;