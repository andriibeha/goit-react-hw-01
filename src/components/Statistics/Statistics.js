import s from "./Statistics.module.css";
import PropTypes from 'prop-types';

function Statistics( {title, stats} ) { 
    return ( 
        <section className={s.statistics}>
            {title && (
                <h2 className={s.title}>{title}</h2>
            )}

            <ul className={s.statList}>
                <li className={s.item}>
                <span className={s.label}>{stats[0].label}</span>
                <span className={s.percentage}>4%</span>
                </li>
                <li className={s.item}>
                <span className={s.label}>{stats[1].label}</span>
                <span className={s.percentage}>14%</span>
                </li>
                <li className={s.item}>
                <span className={s.label}>.pdf</span>
                <span className={s.percentage}>41%</span>
                </li>
                <li className={s.item}>
                <span className={s.label}>.mp4</span>
                <span className={s.percentage}>12%</span>
                </li>
            </ul>
        </section>
    );
};

export default Statistics;