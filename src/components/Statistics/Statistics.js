import s from "./Statistics.module.css";
import PropTypes from 'prop-types';

function Statistics( {title, stats} ) { 
    return ( 
        <section className={s.statistics}>
            {title && (
                <h2 className={s.title}>{title}</h2>
            )}

            <ul className={s.statList}>
                {stats.map(elem => (
                    <li key={elem.id}
                        className={s.item}
                        style={ {backgroundColor: '#' + randomColor()} }>
                        <span className={s.label}>{elem.label}</span>
                        <span className={s.percentage}>{elem.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
};

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16)
};


export default Statistics;

