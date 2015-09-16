var React = require('react');
var Header = require('./Header.jsx');
require('./home.scss');

var Home = React.createClass({
  
  render: function() {
    return (
      <div className='home'>
        <Header />
        <div className="row box-container">
          <h1>Kelsa</h1>
        </div>
      </div>
    );
  }

});

module.exports = Home;