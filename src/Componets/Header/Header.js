import { Fragment } from "react";
import classes from './Header.module.css'
import Profile from "./Profile";

const Header = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
                <Profile />

            </div>

        </Fragment>
    )
}
export default Header