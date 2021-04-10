/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React, {useEffect, useState} from 'react';
import {Provider, useDispatch} from 'react-redux';

import AppNavigation from './navigation/AppNavigation';
import store from './redux/store';

// export function App() {
//   return <AppNavigation />;
// }

export default function Entrypoint() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
