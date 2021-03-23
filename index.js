/**
 * 1 - Aqui é a porta de entrada do app.
 * 
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; // se não colocar a extensão, vai procurar por .js
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);