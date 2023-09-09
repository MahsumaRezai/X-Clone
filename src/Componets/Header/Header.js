import { Fragment } from "react";
import classes from './Header.module.css';
import Profile from "./Profile";
import Content from "./Content";

const Header = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
                <Profile />
                <Content />

            </div>

        </Fragment>
    )
}
export default Header