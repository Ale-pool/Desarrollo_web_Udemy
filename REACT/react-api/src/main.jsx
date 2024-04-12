/*vamos a consumir un API- proyecto creado con vite-*/
import ReactDom from 'react-dom/client';
import { App } from './app';
const rootElement = document.querySelector('#root');

const root = ReactDom.createRoot(rootElement);

root.render(<App></App>);
