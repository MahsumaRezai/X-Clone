import { Fragment } from "react";
import classes from './ErrorModal.module.css';
import img from '../image/profile.jpg'


const Header = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>

            </div>
            <img src={img} alt="" className={classes.image} />

        </Fragment>
    )
}
export default Header;