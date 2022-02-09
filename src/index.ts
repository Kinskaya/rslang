import App from './pages/app';

import './style/style.css';
import authorization from './authorization/authorization';

const app = new App();
app.run();

authorization();
