import React from 'react'
import ReactDOM from 'react-dom/client'
import './theme/_global.scss'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<AppRouter />
			<Footer />
		</Router>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
