'use strict';

var React = require('react/addons');
var Imagebox = require('./Imagebox');
var ReactTransitionGroup = React.addons.CSSTransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.less');

var imageURL = require('../../images/yeoman.png');

var PortfolioReactWebpackApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName='fade' component='img' src={imageURL} key={imageURL}>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = PortfolioReactWebpackApp;
