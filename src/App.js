import { Fragment } from "react";
import { Route } from 'react-router-dom';
import Tweets from './Pages/Tweets'
import Head from "./Componets/Head";

function App(props) {


    return (
        <Fragment>
            <Head />
            <Route path="/tweets">
                <Tweets />

            </Route>
        </Fragment>
    )
}

export default App;
