var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-centered">About</h1>
      <p>This is a Weather App build on React.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
