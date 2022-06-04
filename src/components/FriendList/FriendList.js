import s from "./FriendList.module.css";
import PropTypes from 'prop-types';

function FriendList( {friends} ) { 
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <li key={friend.id}
                    className={s.item}>
                    <span className={ friend.isOnline? s.active : s.error }></span>
                    <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={s.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
};

export default FriendList;