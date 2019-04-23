import React  from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"
import App from "./components/home/App"
import Contact from "./components/page/Contact"

const AppRouter = () => {
		return (
				<BrowserRouter>
						<div>
								<nav>
								    <ul>
												<li>
														<Link to="/">Home</Link>
												</li>
												<li>
													<Link to="/Contact">Halaman Kontak</Link>
												</li>
								    </ul>
								</nav>
								<Route path="/" exact component={App}/>
								<Route path="/Contact" exact component ={Contact}/>
						</div>
				</BrowserRouter>
		)
}
export default AppRouter
