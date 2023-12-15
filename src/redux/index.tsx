import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Vous pouvez spécifier le type de l'état global si nécessaire
export type RootState = ReturnType<typeof reducers>;

// Appliquez le middleware si nécessaire (par exemple, redux-thunk)
// const middleware = applyMiddleware(thunk);

// Créez le magasin avec les réducteurs et le middleware
// const store = createStore(reducers);

// export default store;