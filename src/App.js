import { Link, Switch, Route } from "react-router-dom";
import ContentList from "./components/ContentList";
import LoginForm from "./components/LoginForm";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      <nav className="flex gap-2 justify-center text-lg text-blue-600">
        <Link to="/about-me" className="p-2 underline">
          Hakkımda
        </Link>
        <Link to="/content" className="p-2 underline">
          Gizli İçerik
        </Link>
        <Auth />
      </nav>

      <div className="max-w-sm mx-auto">
        <Switch>
          <Route exact path="/">
            <div>
              <h1 className="text-xl py-2">Selam, hoşgeldin!</h1>
              <p>Buralarda dolanabilirsin :D</p>
            </div>
          </Route>
          <Route path="/about-me">
            <h2 className="text-xl font-bold p-2">Hakkımda</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              nostrum vero quos? Assumenda, rem ab quaerat sapiente facere
              dolores voluptatum, nobis, repellat aperiam dolorem ad quisquam
              consectetur quidem illo nostrum.
            </p>
          </Route>

          <Route path="/content" component={ContentList} />

          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
