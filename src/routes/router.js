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
    }

    document.getElementById("content").innerHTML = matchedRoute.callback();
  }

  navigateTo(path) {
    window.history.pushState({}, "", path);
    this.loadRoute(path);
  }

  _popState() {
    window.addEventListener("popstate", () => {
      this.loadRoute(window.location.pathname);
    });
  }
}

export default Router;
