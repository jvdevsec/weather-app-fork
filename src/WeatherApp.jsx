

import { BrowserRouter } from 'react-router';
import { AppRouter } from './router';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const WeatherApp = () =>{
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}
