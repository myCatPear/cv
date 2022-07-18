import React from 'react';
import s from "./RemoteJob.module.css"
import commonStyle from "../common/CommonStyle.module.scss"

export const RemoteJob = () => {
    return (
     <section className={`${s.remote}`}>
         <div className={`${commonStyle.container}`}>
             <div className={`${s.remote__wrapper}`}>
                 <p className={`${s.remote__text}`}>Considering options for remote job</p>
                 <a  className={`${s.remote__link}`} href="/hire">to hire me</a>
             </div>
         </div>
     </section>
    );
};

