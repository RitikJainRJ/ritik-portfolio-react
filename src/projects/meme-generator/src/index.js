import React from 'react';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

import { fetchMemes } from './actions';

const store = createStore(rootReducers, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

const MemeGenerator = () => <Provider store = {store}><App /></Provider>;

export default MemeGenerator;
