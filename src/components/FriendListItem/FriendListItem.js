import React from 'react';
import PropTypes from 'prop-types';
import s from "./FriendListItem.module.css";


function FriendListItem ( {friend} ) {
    return (
        <li className={s.item}>
            <span className={ friend.isOnline? s.active : s.error }></span>
            <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={s.name}>{friend.name}</p>
        </li>
    )
};

FriendListItem.prototype = {
    friend: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
};

export default FriendListItem;