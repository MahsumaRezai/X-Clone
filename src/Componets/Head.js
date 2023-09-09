import { Fragment } from "react";
import { Link } from 'react-router-dom';
import classes from './Head.module.css'

const Head = (props) => {
    return (
        <Fragment>
            <ul className={classes.head}>
                <li className={classes.links}><Link to='/tweets' className={classes.link}>Tweets</Link></li>
                <li className={classes.links}><Link to='/repile' className={classes.link}>Tweets & replies</Link></li>
                <li className={classes.links}><Link to='/media' className={classes.link}>Media</Link></li>
                <li className={classes.links}><Link to='/links' className={classes.link}>Links</Link></li>

            </ul>

        </Fragment>
    )
}
export default Head;