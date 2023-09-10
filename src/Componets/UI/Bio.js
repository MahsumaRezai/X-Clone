import { Fragment } from "react";
import classes from './ErrorModal.module.css';


const Bio = (props) => {
    return (
        <Fragment>
            <div className={classes.bio}>
                <div className={classes.label}>
                    <label>Name</label>

                </div>
                <div className={classes.label}>
                    <label>Bio</label>
                </div>
                <div className={classes.label}>
                    <label>Loaction</label>

                </div>
                <div className={classes.label}>
                    <label>Website</label>

                </div>
                <div className={classes.label}>
                    <label>Birth date</label>

                </div>
                <div className={classes.btn}>
                    <button>Switch to Professional</button>
                </div>




            </div>

        </Fragment>
    )
}
export default Bio;