import React, { Component } from 'react';
import './index.css';
import Nav from '../Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="page-content background">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12 text-center profile">
                  <div className="row">
                      <img src="/image/leah.jpg" alt="profile" className="profile-image" />
                      <div className="center-block text-center">
                          <h1 className="morphext">A multi-purpose bot for<br />
                            <span>Diablo 3</span>
                          </h1>
                          <a className="btn btn-default btn-invite" href="https://discordapp.com/oauth2/authorize?&client_id=353429752154947594&scope=bot&permissions=305196094">
                              <b>Invite to Discord</b>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="col-md-7 hidden-sm hidden-xs">
                  <video preload="true" autoPlay loop className="video">
                      <source src="/video/leah.mp4" type="video/mp4" />
                      Your browser does not support the video tag
                  </video>
              </div>
            </div>
          </div>
        </div>
        <div className="feature container">
          <h1>Awesome Features</h1>
          <br />
          <br />
          <div className="row">
            <div className="col-md-4">
              <h3>RSS Subscription</h3>
              <p>Stay up to date with Diablo 3 RSS feeds. Leah will sends news notification to subscribed channels. Subscription is channel specific. This means all feeds will be posted at one place!</p>
            </div>
            <div className="col-md-4">
              <h3>Career</h3>
              <p>Keep track of your Diablo 3 progression. Career commands will display all of your characters, including paragon levels, monster kills, and guild information.</p>
            </div>
            <div className="col-md-4">
              <h3>Hero</h3>
              <p>Hero commands offer an in-depth character statistics. See a character's equipped items, skills, kills, and more.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h3>Item Search</h3>
              <p>Customized algorithm to find the closest match. This command will display everything about the specified item, including item level, required level, damage, armor, and more.</p>
            </div>
            <div className="col-md-4">
              <h3>News</h3>
              <p>Leah keep track of all the Diablo 3 news. You can send a nicely formatted news embed instead of an url to your friends.</p>
            </div>
            <div className="col-md-4">
              <h3>Customizable Prefix</h3>
              <p>Need to change default prefix? Worry not! Leah's prefix is fully customizable. You can use prefix commands to change the default prefix.</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4>Leah</h4>
                <p className="footer-detail">Leah is written in NodeJS.<br />Discord.js is the main library.<br />Built and maintained by <a href="http://telunchen.com/">Andy</a>.</p>
              </div>
              <div className="col-md-4">
                <h4>Contact</h4>
                <p className="footer-detail">For any comments, concerns, or suggestions, please join our <a href="https://discord.gg/etpF4PB">support server</a>. Our staff will try our best to help you.</p>
              </div>
              <div className="col-md-4">
                <h4>About</h4>
                <p className="footer-detail">Leah is a project I made for fun and put my free time into making it better. Please feel free to try it out and give me your feedback.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
