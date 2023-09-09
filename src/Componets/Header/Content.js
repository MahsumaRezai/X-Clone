import { Fragment } from "react";
import classes from './Header.module.css';


const Content = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <div className={classes.title}>
                    <h1>Masoumeh Reazi</h1>
                    <p>@MahsumaRezai</p>

                </div>
                <div>

                </div>

            </div>
        </Fragment>
    )
}
export default Content;