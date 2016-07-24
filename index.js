import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import UserContainer from './components/userlist/usercontainer.js'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

render(

	{UserContainer}, document.getElementById('root')
)
