import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import s from "./Contacts.module.scss";
import commonStyle from "../common/CommonStyle.module.scss";
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef<any>(null);
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [messageValue, setMessageValue] = useState<string>('');
  const [isDisabledInput, setIsDisabledInput]= useState(false);
  const [isSendingMessage, setIsSendingMessage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsSendingMessage(false)
    },3000)
  },[isSendingMessage])

  const onNameChange = (e:ChangeEvent<HTMLInputElement>) => setNameValue(e.currentTarget.value);
  const onEmailChange = (e:ChangeEvent<HTMLInputElement>) => setEmailValue(e.currentTarget.value);
  const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => setMessageValue(e.currentTarget.value);

  const isDisabledSubmit = () => !(nameValue.length > 0 && emailValue.length > 0 && messageValue.length > 0);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setIsDisabledInput(true)
    try {
      const res = await emailjs.sendForm('service_5ghv2do', 'template_29lt4oa', form.current, 'sCFYVV_vgu43KaJg6')
      setIsSendingMessage(true)
    } catch(error) {

    } finally {
      setNameValue('');
      setEmailValue('');
      setMessageValue('');
      setIsDisabledInput(false)
    }
  };

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
                {
                  !isSendingMessage ?
                  <form className={`${s.form}`} action="/action" ref={form}
                        onSubmit={sendEmail}>
                    <label className={s.form__label}>
                      Name
                      <input name="user_name" className={`${s.form__input} ${isDisabledInput && s.disabled}`} type="text"
                             placeholder="Write your name here" autoComplete='name' value={nameValue} onChange={onNameChange} disabled={isDisabledInput}/>
                    </label>
                    <label className={s.form__label}>
                      Email
                      <input className={`${s.form__input} ${isDisabledInput && s.disabled}`} name="user_email" type="email"
                             autoComplete="email" placeholder="Write your email here" value={emailValue} onChange={onEmailChange} disabled={isDisabledInput}/>
                    </label>
                    <label className={s.form__label}>
                      Message
                      <textarea className={`${s.form__textarea} ${isDisabledInput && s.disabled}`} name="message" value={messageValue} onChange={onMessageChange} disabled={isDisabledInput}></textarea>
                    </label>
                    <input className={`${s.form__button} ${isDisabledSubmit() && s.disabled}`} type="submit" value={'Send message'} disabled={isDisabledSubmit()}/>
                  </form>
                    :
                    <div className={s.message}> message has been sent!</div>
                }
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contacts;