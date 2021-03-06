import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.css'


var izioziBook={
	"showBorders": "true",
	"boards": [{
		"cols": 2,
		"rows": 2,
		"tiles": [{
			"isMatrioska": "false",
			"imagePath": "arnie.jpg",
			"sentence": "ciao"
		}, {
			"isMatrioska": "false",
			"imagePath": "arnie.jpg",
			"sentence": "sono"
		}, {
			"isMatrioska": "false",
			"imagePath": "arnie.jpg",
			"sentence": "sebastiano"
		}, {
			"isMatrioska": "false",
			"imagePath": "arnie.jpg",
			"sentence": "pera"
		}, {
			"isMatrioska": "false"
		}, {
			"isMatrioska": "false"
		}]
	}]
}

window.onload = function(){



	ReactDOM.render(
	  <App book={izioziBook} />,
	  document.getElementById('root')
	);
}
