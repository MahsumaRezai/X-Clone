import { Fragment } from "react";
import { Link } from 'react-router-dom'

const Head = (props) => {
    return (
        <Fragment>
            <ul>
                <li><Link to='/tweets'>Tweets</Link></li>
            </ul>

        </Fragment>
    )
}
export default Head;