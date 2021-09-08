import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import Weekly from "./components/Weekly.jsx";
import WeeklyBattle from "./components/WeeklyBattle.jsx";
import PopularBattle from "./components/PopularBattle.jsx";
import Favorites from "./components/Favorites.jsx";
import Error404 from "./components/Error404.jsx";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Home
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#">
                    Weekly
                  </a>
                  <a class="nav-link" href="#">
                    WeeklyBattle
                  </a>
                  <a class="nav-link" href="#">
                    PopularBattle
                  </a>
                  <a class="nav-link" href="#">
                    Favorites
                  </a>
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </BrowserRouter>
      </>
    );
  }
}
