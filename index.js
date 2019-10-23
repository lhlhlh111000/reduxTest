/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ReduxApp from './src/pages';

AppRegistry.registerComponent(appName, () => ReduxApp);
