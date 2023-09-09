import { Fragment } from "react";
import classes from './Header.module.css';
import Profile from "./Profile";
import Content from "./Content";
import Edit from './Edit'

const Header = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
                <Profile />
                <Content />
                <Edit onClick={props.onshow} />

            </div>

        </Fragment>
    )
}
export default Header