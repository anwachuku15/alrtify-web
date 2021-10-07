import "./index.css";
import "./App.css";

import Home from "./pages/Home";
import ResponsiveNavbar from "./components/ResponsiveNavbar";

function App() {
  return (
    <div className="App">
      <ResponsiveNavbar />
      <Home />
    </div>
  );
}

export default App;
