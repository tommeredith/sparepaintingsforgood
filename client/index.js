import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import { Provider as FelaProvider } from 'react-fela'
import { createRenderer } from 'fela'
import configureStore from "./store/configureStore"
import RouteWrap from './components'

const store = configureStore()

const renderer = createRenderer()

ReactDOM.render(
    <ReduxProvider store={store}>
        <FelaProvider renderer={renderer}>
            <RouteWrap store={store}/>
        </FelaProvider>
    </ReduxProvider>,
    document.getElementById("root")
);
