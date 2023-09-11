import { Fragment } from "react";
import img from '../Componets/image/header.jpg';
import classes from './Tweets.module.css';


const Text = (props) => {
    return (
        <Fragment>
            <div className={classes.text}>
                <div className={classes.section}>
                    <h3 className={classes.para}>#React #365DaysOfCoding</h3>
                    <p className={classes.paragh}>Today I worked with React and complated an online shop</p>
                    <img src={img} alt="" className={classes.img} />

                </div>
                <div>
                    <p className={classes.title}>Good mroinng and have goog time </p>

                </div>


            </div>
        </Fragment>
    )
}
export default Text;