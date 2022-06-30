import FriendListItem from "components/FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

function FriendList( {friends} ) { 
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>
    );
};

export default FriendList;