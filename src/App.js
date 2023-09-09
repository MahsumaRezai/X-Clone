import { Fragment } from "react";
import Header from "./Componets/Header/Header";
import Head from "./Componets/Head";
import { Route } from 'react-router-dom'
import Tweets from "./Pages/Tweets";
import Repile from "./Pages/Repile";
import Media from "./Pages/Media";
import Links from "./Pages/Links";


function App(props) {


    return (
        <Fragment>
            <Header />
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







        </Fragment>
    )
}

export default App;
