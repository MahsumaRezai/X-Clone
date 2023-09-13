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
import ErroModals from "./Componets/Addmodule/ErrorModals";



function App(props) {
    const [show, setshow] = useState(false);
    const [addPost, setAddPost] = useState(false)

    const showHandler = () => {
        setshow(true)

    }
    const hideHandler = () => {
        setshow(false)

    }
    const AddPost = () => {
        setAddPost(true)

    }
    const removePost = () => {
        setAddPost(false)
    }

    return (
        <Fragment>
            <Header onshow={showHandler} />
            {show && <ErroModal onconfirm={hideHandler} />}
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
            <Add onPost={AddPost} />
            {addPost && <ErroModals onconfirm={removePost} />}
        </Fragment>
    )
}

export default App;
