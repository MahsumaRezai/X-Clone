import { Fragment } from "react";
import classes from './Header.module.css';
import Profile from "./Profile";
import Edit from "./Edit";
import Content from "./Content";

const Header = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
                <Profile />
                <Edit />
                <Content />

            </div>

        </Fragment>
    )
}
export default Header