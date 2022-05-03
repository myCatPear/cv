import React from 'react';
import s from "./Contacts.module.css";
import commonStyle from "../common/CommonStyle.module.css";

const Contacts = () => {
    return (
        <section className={`${s.contacts}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.contacts__wrapper}`}>
                    <h2 className={`${commonStyle.sectionTitle}`}>Contacts</h2>
                        <form  className={`${s.contacts__form}`} action="/action">
                            <input type="text"/>
                            <input type="text"/>
                            <textarea></textarea>
                            <input type="submit" value={'Send'}/>
                        </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;