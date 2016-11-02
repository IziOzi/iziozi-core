import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';



var izioziBook= {
	"showBorders": "true",
	"boards": [{
		"cols": 2,
		"rows": 2,
		"button": [{
			"isMatrioska": "false",
			"imagePath": "arnie.jpg",
			"sentence": ""
		}, {
			"isMatrioska": "false",
			"imagePath": "arnie.jpg",
			"sentence": ""
		}, {
			"isMatrioska": "false",
			"imagePath": "arnie.jpg",
			"sentence": ""
		}, {
			"isMatrioska": "false",
			"imagePath": "arnie.jpg",
			"sentence": ""
		}, {
			"isMatrioska": "false"
		}, {
			"isMatrioska": "false"
		}]
	}]
}

ReactDOM.render(
  <App book={izioziBook} />,
  document.getElementById('root')
);
