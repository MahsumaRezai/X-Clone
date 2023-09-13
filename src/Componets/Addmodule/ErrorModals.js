
import ReactDom from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';
import { Fragment } from 'react';
import Head from './Head';
import Caption from './Caption';
import Content from './Content';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onconfirm} />
}
const Modaloerlay = (props) => {

    return (
        <Card className={classes.modal}>
            <div>
                <Head />
                <Caption />
                <Content />



            </div>


        </Card>
    )
}
const ErroModals = (props) => {

    return (
        <Fragment>

            {ReactDom.createPortal(<Backdrop onconfirm={props.onconfirm} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErroModals;