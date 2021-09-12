import "./css/App.css";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";
import { Route, Switch } from "react-router";

const contextHook = createContext(null);

function App() {
  const [userData, setUserData] = useState([]);
  const users = async () => {
    const obj = await axios.get(
      "https://609e2ac333eed80017957e36.mockapi.io/users"
    );
    setUserData(obj.data);
  };

  useEffect(() => {
    users();

    return () => {
      setUserData({});
    };
  }, []);
  return (
    <section className="main">
      {/* <button onClick={createPost}>Create Post</button> */}

      {/* Navbar */}
      <Navbar />

      <contextHook.Provider value={{ userData, users }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </contextHook.Provider>
    </section>
  );
}

export default App;
export { contextHook };
