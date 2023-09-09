import { Fragment } from "react";
import classes from './Header.module.css';


const Edit = (props) => {
    return (
        <Fragment>
            <div className={classes.edit}>
                <button>
                    Edit profile
                </button>
            </div>
        </Fragment>
    )
}
export default Edit;