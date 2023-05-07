import ReactDOM from 'react-dom';
import { legacy_createStore as createStore} from 'redux'
import './index.css';
import App from './App';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension'


const store = createStore(rootReducer, composeWithDevTools());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);