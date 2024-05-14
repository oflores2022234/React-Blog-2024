import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div id="app-root">
      <App />
    </div>
  </BrowserRouter>,
);