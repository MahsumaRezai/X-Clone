import { Fragment } from "react";
import classes from './Header.module.css';
import img from '../image/profile.jpg'

const Headers = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
                <div>
                    <img src={img} alt="" className={classes.img} />

                </div>

            </div>
        </Fragment>
    )
}
export default Headers;