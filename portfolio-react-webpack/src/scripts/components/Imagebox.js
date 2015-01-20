'use strict';

var React = require('react/addons');


require('../../styles/Imagebox.less');


var Imagebox = React.createClass({
  render: function () {
    return (
      	<img src={this.props.imageURL} key={this.props.imageURL} />
      );
  }
});

module.exports = Imagebox;