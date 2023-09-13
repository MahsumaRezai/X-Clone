import { Fragment } from "react";
import classes from './ErrorModal.module.css';


const Head = (props) => {
    return (
        <Fragment>
            <div className={classes.header}>
                <div>
                    <h1>Eidt profile</h1>
                </div>
                <div>
                    <button>save</button>
                </div>

            </div>
        </Fragment>
    )
}
export default Head;