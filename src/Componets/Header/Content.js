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
                <div className={classes.introduct}>
                    <p>self-taught forntend developer and BCS in computer science</p>

                </div>
                <div className={classes.apptend}>
                    <p>Afghanistan</p>
                    <a href="github.com/MahsumaRezai">github.com/MahsumaRezai</a>
                </div>
                <div className={classes.contact}>
                    <p>joined March 2019</p>

                </div>
                <div className={classes.follow}>
                 
                    <span>300 Following</span>
                    <span>175 Followers</span>
                </div>

            </div>
        </Fragment>
    )
}
export default Content;