import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
//import PropTypes from "prop-types";

//Class Component is extended from React Component and don't have 'return'. Use 'return' in 'render()'.
//React execute render method of Class Component automatically.
//'State' is object and has space for data that I will change.
//Muteting 'state' directly is not good idea. Use setState(). ex) count: this.state.count++ (X) / current => ({count: current.count++}) (O)
//When I call setState(), react rerender it.
/* Lif Cycle
	Mounting - birth component => constructor() -> render() -> componentDidMount()
	Updating (When using setState()) => componentDidUpdate() : it is executed after being updated.
	Unmounting - die component (When changing page or changing component using state, etc.) => componentWillUnmount()
*/

function App() {
	return (
		<HashRouter>
			<Navigation />
			<Route path="/" exact={true} component={Home} />
			<Route path="/about" component={About} />
			<Route path="/movie/:id" component={Detail} />
		</HashRouter>
	)
};

export default App;