var PortfolioReactWebpackApp = require('./PortfolioReactWebpackApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={PortfolioReactWebpackApp}>
    <Route name="/" handler={PortfolioReactWebpackApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
