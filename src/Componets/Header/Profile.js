import { Fragment } from "react";
import classes from './Header.module.css';
import img from '../image/profile.jpg'

const Profile = (props) => {
    return (
        <Fragment>
            <div className={classes.profile}>
                <img src={img} alt="" className={classes.img} />

            </div>

        </Fragment>
    )
}
export default Profile