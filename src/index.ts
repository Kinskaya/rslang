import "./index.css";
import "./styles/style.css";
import App from "./pages/app";
import authorization from "./authorization/authorization";

const app = new App();
app.run();

authorization();
