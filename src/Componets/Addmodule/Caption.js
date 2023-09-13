import { Fragment } from "react";
import classes from './ErrorModal.module.css';
import img from '../image/profile.jpg'

const Caption = (props) => {
    return (
        <Fragment>
            <div className={classes.caption}>
                <div>
                    <img src={img} alt="" />
                </div>
                <select className={classes.parts}>
                    <option>Pubilc</option>
                    <option>Praivte</option>


                </select>
            </div>
        </Fragment>
    )
}
export default Caption;