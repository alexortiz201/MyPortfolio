'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var PortfolioReactWebpackApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    PortfolioReactWebpackApp = require('../../../src/scripts/components/PortfolioReactWebpackApp.js');
    component = React.createElement(PortfolioReactWebpackApp);
  });

  it('should create a new instance of PortfolioReactWebpackApp', function () {
    expect(component).toBeDefined();
  });
});
