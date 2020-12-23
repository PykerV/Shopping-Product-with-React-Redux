import thunk from 'redux-thunk';
import { reducer } from '../Statemanager/reducer';
import { createStore, applyMiddleware } from 'redux';


export default createStore(reducer, applyMiddleware(thunk));
