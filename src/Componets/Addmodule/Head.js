import { Fragment } from "react";
import classes from './ErrorModal.module.css';

const Head = (props) => {
    return (
        <Fragment>
            <div className={classes.heads}>
                <sapn className={classes.title}>Drafts</sapn>
                <button className={classes.btn}>Tweet</button>
            </div>
        </Fragment>
    )
}
export default Head;