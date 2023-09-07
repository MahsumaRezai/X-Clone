import { Fragment } from "react";
import { Route } from 'react-router-dom';
import Tweets from './Pages/Tweets'
import Head from "./Componets/Head";
import Header from './Componets/Header/Header'

function App(props) {


    return (
        <Fragment>
            <Header />
            <Head />
            <Route path="/tweets">
                <Tweets />

            </Route>
        </Fragment>
    )
}

export default App;
