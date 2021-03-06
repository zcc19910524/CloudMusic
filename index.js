/**
 * Created by zhaochenchen on 2017/2/26.
 */
import React from 'react'
import reactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './src/reducers'
import Routes from './src/component/routes'
require('./src/less/app.less')

const store=createStore(reducers)
reactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    app
)