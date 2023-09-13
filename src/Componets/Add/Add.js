import { Fragment } from "react";
import classes from './Add.module.css'

const Add = (props) => {
    return (
        <Fragment>
            <div className={classes.add}>
                <button>
                    {props.childern}
                    +
                </button>
            </div>
        </Fragment>
    )
}
export default Add;