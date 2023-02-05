import './App.css';
import { Outlet,Link } from "react-router-dom";

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Trending media</Link>
        </li>
        <li>
          <Link to="/Search">Movie Search</Link>
        </li>
        <li>
          <Link to="/Now-Playing">Now Playing</Link>
        </li>
        <li>
          <Link to="/Statistics">Statistics</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  );
}

export default App;
