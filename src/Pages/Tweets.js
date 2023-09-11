import { Fragment } from "react";
import classes from './Tweets.module.css';
import Text from './Text'

const Tweets = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <Text />


            </div>
        </Fragment>
    )
}
export default Tweets;