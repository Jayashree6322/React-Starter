import { React } from 'react';
import './App.scss';
import SimpleButton from './components/simpleButton';

const App = ({ state: { count, refreshID }}) =>
	<div className="App">
		<div>Count: { count }</div>
		<div>{ SimpleButton() }</div>
		<div>Refresh ID: { refreshID }</div>
		<div>Hello World</div>
	</div>;

export default App;
