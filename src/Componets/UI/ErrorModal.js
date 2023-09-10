
import ReactDom from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';
import { Fragment } from 'react';
import Head from './Head';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onconfirm} />
}
const Modaloerlay = (props) => {

    return (
        <Card className={classes.modal}>
            <Head />
            <div className={classes.head}>

            </div>

        </Card>
    )
}
const ErroModal = (props) => {

    return (
        <Fragment>

            {ReactDom.createPortal(<Backdrop onconfirm={props.onconfirm} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay title={props.title} massage={props.massage} onconfirm={props.onconfirm} />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErroModal;