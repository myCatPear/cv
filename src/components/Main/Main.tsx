import React from 'react';
import commonStyle from '../common/CommonStyle.module.css'
import s from './Main.module.css'

export const Main = () => {
    return (
        <main className={`${s.main}`}>
            <div className={`${commonStyle.container}`}>
                <div className={`${s.main__wrapper}`}>

                </div>
            </div>
        </main>
    );
};

