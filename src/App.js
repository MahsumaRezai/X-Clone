import { Fragment } from "react";
import Header from "./Componets/Header/Header";
import Head from "./Componets/Head";
import { Route } from 'react-router-dom'
import Tweets from "./Pages/Tweets";


function App(props) {


    return (
        <Fragment>
            <Header />
            <Head />
            <Route path='/tweets'>
                <Tweets />

            </Route>





        </Fragment>
    )
}

export default App;
