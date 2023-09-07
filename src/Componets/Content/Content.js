import { Fragment } from "react";
import classes from './Content.module.css'

const Content = (props) => {
    return (
        <Fragment>
            <div className={classes.warp}>
                <div className={classes.text}>
                    <p className={classes.head}>Masoumeh Rezai</p>
                    <p className={classes.para}>@MahsumaRezai</p>
                    <p>self-taught forntend developer and BCS in computer science</p>
                </div>







            </div>
        </Fragment>
    )
}
export default Content;