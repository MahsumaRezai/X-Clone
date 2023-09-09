import { Fragment } from "react";
import { Link } from 'react-router-dom';
import classes from './Head.module.css'

const Head = (props) => {
    return (
        <Fragment>
            <ul className={classes.head}>
                <li><Link to='/tweets'>Tweets</Link></li>
            </ul>

        </Fragment>
    )
}
export default Head;