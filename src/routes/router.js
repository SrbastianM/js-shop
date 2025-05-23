class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
    window.addEventListener("popstate", () => {
      this.loadRoute(window.location.pathname);
    });
  }

  _getCurrentURL() {
    return window.location.pathname;
  }

  _matchUrlToRoute(path) {
    checkPath(path);
    return this.routes.find((route) => route.path === path);
  }

  _loadInitialRoute() {
    const path = window.location.pathname;
    this.loadRoute(path);
  }

  loadRoute(path) {
    const matchedRoute = this._matchUrlToRoute(path);
    if (!matchedRoute) {
      document.getElementById(
        "content"
      ).innerHTML = `<h1> 404 - Page not found </h1>`;
    } else {
      document.getElementById("content").innerHTML = matchedRoute.callback();
    }

    console.log("Path route", path);
  }

  navigateTo(path) {
    checkPath(path);
    window.history.pushState({}, "", path);
    this.loadRoute(path);
  }

  _popState() {
    window.addEventListener("popstate", () => {
      this.loadRoute(window.location.pathname);
    });
  }
}

function checkPath(path) {
  if (!path || typeof path !== "string") {
    throw new Error("Path must be a valid string");
  }
}

export default Router;
