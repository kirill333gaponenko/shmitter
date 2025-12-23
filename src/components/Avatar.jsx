import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../features/user/userSlice.js";

const Avatar = ({size}) => {

    const {avatar,name} = useSelector(state => state.user)

    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter a new avatar URL')
                dispatch(changeAvatar(url))
            }}
            onContextMenu={() => {
                const name = prompt('Enter a new name')
                dispatch(changeName(name))
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    )
}

export default Avatar;