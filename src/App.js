import { Fragment, useState } from "react";
import Header from "./Componets/Header/Header";
import Head from "./Componets/Head/Head";
import { Route } from 'react-router-dom'
import Tweets from "./Pages/Tweets";
import Repile from "./Pages/Repile";
import Media from "./Pages/Media";
import Links from "./Pages/Links";
import ErroModal from './Componets/UI/ErrorModal';
import Add from "./Componets/Add/Add";



function App(props) {
    const [show, setshow] = useState(false);

    const showHandler = () => {
        setshow(true)

    }
    




    return (
        <Fragment>
            <Header onshow={showHandler} />
            {show  && <ErroModal />}
            <Head /> 
            <Route path='/tweets'>
                <Tweets />

            </Route>

            <Route path='/repile'>
                <Repile />

            </Route>
            <Route path='/media'>
                <Media />

            </Route>
            <Route path='/links'>
                <Links />
            </Route>
            <Add/>
        









        </Fragment>
    )
}

export default App;
