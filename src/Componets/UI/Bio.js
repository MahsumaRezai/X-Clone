import { Fragment } from "react";
import classes from './ErrorModal.module.css';


const Bio = (props) => {
    return (
        <Fragment>
            <div className={classes.bio}>
                <div className={classes.label}>
                    <label>Name</label>
                    <p>Masoumeh Rezai</p>

                </div>
                <div className={classes.label}>
                    <label>Bio</label>
                    <p> self-taught forntend developer and BCS in computer science</p>
                </div>
                <div className={classes.label}>
                    <label>Loaction</label>
                    <p>Afghanistan</p>


                </div>
                <div className={classes.label}>
                    <label>Website</label>
                    <p> github.com/MahsumaReza</p>

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