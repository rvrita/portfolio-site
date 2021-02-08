import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {/* Header */}
        <div id="header">
          <div><img id="profile-image" src="images/m6toned.jpg" width="200" height="200" alt="Rita Rozsavolgyi" /></div>
          <h1>Rita Rozsavolgyi</h1>
          <h2>Full Stack Software Engineer</h2>
          <ul className="list-unstyled list-inline social">
            <li><a href="https://www.linkedin.com/in/rvrita" target="_blank"><img src="images/linkedin.svg" width="22" /></a></li>
            <li><a href="https://www.github.com/rvrita" target="_blank"><img src="images/github.svg" width="22" /></a></li>
            <li><a href="https://www.twitter.com/rvrita" target="_blank"><img src="images/twitter.svg" width="22" /></a></li>
            <li><a href="https://www.instagram.com/rvrita" target="_blank"><img src="images/insta.svg" width="22" /></a></li>
            <li><a href="https://www.pinterest.com/rvrita" target="_blank"><img src="images/pinterest.svg" width="22" /></a></li>
          </ul>
          <a href="mailto:rvrita@me.com" className="contact">Contact me</a>
        </div>
        {/* Navigation */}
        <nav id="nav">
          <ul className="list-unstyled small-caps">
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
            <li><a href="#header">Resume</a></li>
          </ul>
        </nav>
        {/* About Me */}
        <div id="about-me">
          <div class="about-me-image"></div>
          <div class="about-me-description">
            <h2><span>About Me</span></h2>
            <p>
              Hello! I'm Rita, a full stack software engineer based in San Francisco, CA.
              I love creating things for the web, both designing and coding. While I have over 6 years of experience on various fields of software engineering, my expertise is in React and CSS.
            </p>
            <div class="me-list small-caps">
              coffee-addict · jiu jitsuka<br />
              dog-lover &amp; trainer · vegan foodie<br />
              crazy plant-lady · home designer<br />
              <a href="https://books.google.com/books?uid=115300439068107447274&as_coll=0&source=gbs_lp_bookshelf_list&hl=en&view_type=grid" className="books small-caps" target="_blank">books · books · books →</a><br />
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="drop-shadow">
          <div id="experience">
            <h2><span>Professional Experience</span></h2>
            <ul className="list-unstyled">
              <li>
                <h4>Lead UI/UX Developer</h4>
                <h5>Sephora, 2019-present, San Francisco</h5>
                <p>
                  Managing end-to-end email campaign development for an audience of 25M+ and accounting for 20% of all digital revenue.<br />
                  I lead a team of 5 amazing engineers responsible for translating design specs into interactive web pages.
                  On a typical week, I oversee the launch of 15 campaigns. I also develop single-page JavaScript applications to accelerate HTML composition of email campaigns.
                </p>
                {/* <p>Managing end-to-end email campaign development for an audience of 23M+ and accounting for 20% of all digital revenue.  Specialized in turning graphic design files into interactive web pages using HTML and CSS, including responsive design coding for both email and web development.</p> */}
              </li>
              <li>
                <h4>UI/UX Developer</h4>
                <h5>Sephora, 2014-2019, San Francisco</h5>
                <p>Developed email campaigns using HTML, CSS and Freemarker.<br />Programmed rules to serve dynamic content dependent upon user profile settings.<br />Ensured that email functionality worked in a variety of browsers and devices using responsive coding techniques.</p>
              </li>
              <li>
                <h4>UI/UX Developer</h4>
                <h5>Netrix, 2012-2014, Budapest</h5>
                <p>Built complete websites in HTML and CSS based on Photoshop specs. Coded promotional HTML emails, tested with Litmus to ensure cross client compatibility. Maintained and solved issues with existing sites.</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Skills */}
        <div id="skills">
          <h2><span>Technical Skills</span></h2>
          <div className="skill-lists">
            <ul>
              <li className="small-caps">Frontend</li>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Redux</li>
              <li>Styled&nbsp;Components</li>
              <li>Bootstrap</li>
            </ul>
            <ul>
              <li className="small-caps">Backend</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Mongoose</li>
              <li>Restful API dev</li>
            </ul>
            <ul>
              <li className="small-caps">Tools</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Webpack</li>
              <li>Babel</li>
              <li>Ejs</li>
              <li>Mustache</li>
            </ul>
            <ul>
              <li className="small-caps">Testing</li>
              <li>Jest</li>
              <li>Enzyme</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>loader.io</li>
              <li>k6</li>
              <li>New Relic</li>
            </ul>
          </div>
        </div>
        {/* Projects */}
        <div className="drop-shadow">
          <div id="projects">
            <section>
              <div className="column">
                <h2><span>Projects</span></h2>
                <div className="project">
                  <div className="project-image">
                    <img src="images/gridgen2.png" alt="grid generator" />
                  </div>
                  <div className="project-text">
                    <h3>Email Grid Generator</h3>
                    <p className="project-url"><a href="http://gridgen-react.rvrita.com" target="_blank">gridgen-react.rvrita.com</a></p>
                    <p>A web-based tool to speed up email development at Sephora. It loads live product data with the Sephora Web API.</p>
                    <p className="small-caps"><span>Javascript</span> <span>React</span> <span>Node</span> <span>Express</span></p>
                  </div>
                </div>
                <div className="project project-left">
                  <div className="project-image">
                    <img src="images/blogrl.png" alt="Blogrl" />
                  </div>
                  <div className="project-text">
                    <h3>Blogrl.</h3>
                    <p className="project-url"><a href="https://github.com/rvrita/blogrl" target="_blank">blogrl.me</a></p>
                    <p>A fully-functioning blog written from the ground up with React, Express, and MongoDB. Supports content authoring and built-in visitor activity analytics.</p>
                    <p className="small-caps">Javascript React Node Express MySQL</p>
                  </div>
                </div>
                <div className="project">
                  <div className="project-image">
                    <img src="images/etsy.png" alt="Etsy" />
                  </div>
                  <div className="project-text">
                    <h3>Etsy Clone</h3>
                    <p className="project-url"><a href="https://github.com/FEC-Linka/rvrita-etsy-reviews" target="_blank">github link</a></p>
                    {/* <p>A responsive UI and optimized UX built by a team of 4 with pixel-perfect CSS clone of original site. Designed using service oriented architecture.</p> */}
                    <p>A full-stack, pixel-perfect implementation of a popular e-commerce site. Built as an exercise to optimize time-to-first-contentful-paint with real-world data and a tiered backend architecture.</p>
                    <p className="small-caps">React Styled-Components CSS HTML Node Express</p>
                  </div>
                </div>
                <div className="project project-left">
                  <div className="project-image">
                    <img src="images/codebreakers.png" alt="codebreakers game" />
                  </div>
                  <div className="project-text">
                    <h3>Codebreakers</h3>
                    <p className="project-url"><a href="http://www.playcodebreakers.com/" target="_blank">playcodebreakers.com</a></p>
                    <p>A full-stack implementation of the popular game Codenames, with editable word lists and a hint tracker.</p>
                    <p className="small-caps">Javascript React Node Express MySQL</p>
                  </div>
                </div>
                <div className="project">
                  <div className="project-image">
                    <img src="images/camp-builder.png" alt="Sephora Campaign Builder" />
                  </div>
                  <div className="project-text">
                    <h3>Email Campaign Builder</h3>
                    <p className="project-url"><a href="http://campaignbuilder.rvrita.com/" target="_blank">campaignbuilder.rvrita.com</a></p>
                    <p>A drag and drop tool for building fully working html email templates. The tool automates building emails for Harmony marketing platform.</p>
                    <p className="small-caps">Javascript React CSS HTML Node Express</p>
                  </div>
                </div>

                <h3><span>Additional Projects</span></h3>

                <div className="additional-projects">
                  <div className="project-more">
                    <h3>Watair-bnb</h3>
                    <p className="project-url"><a href="https://github.com/SDC-Odyssey/rvrita-hosting" target="_blank">github link</a></p>
                    <p>Scaled a vacation rental app with 10M+ records to handle 10,000 RPS at &lt;1% error rate.</p>
                    <p className="small-caps">Node Express PostgreSQL Memcached NGINX</p>
                  </div>
                  <div className="project-more">
                    <h3>Minesweeper</h3>
                    <p className="project-url"><a href="https://github.com/rvrita/mini-apps-2" target="_blank">github link</a></p>
                    <p>An implementation of the classic minesweeper game, built with a focus on functional programming style with React and Redux.</p>
                    <p className="small-caps">React Redux HTML CSS</p>
                  </div>
                  <div className="project-more">
                    <h3>Bowling Score Card</h3>
                    <p className="project-url"><a href="https://github.com/rvrita/mini-apps-2" target="_blank">github link</a></p>
                    <p>An online bowling score sheet. Supports an unlimited number of players.</p>
                    <p className="small-caps">React Redux HTML CSS</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Footer */}
        <div id="footer">
          <div className="column">
            <h2><span>Get In Touch</span></h2>
            <ul className="list-unstyled list-inline social">
              <li><a href="https://www.linkedin.com/in/rvrita" target="_blank"><img src="images/linkedin.svg" width="22" /></a></li>
              <li><a href="https://www.github.com/rvrita" target="_blank"><img src="images/github.svg" width="22" /></a></li>
              <li><a href="https://www.facebook.com/rvrita" target="_blank"><img src="images/facebook.svg" width="22" /></a></li>
              <li><a href="https://www.instagram.com/rvrita" target="_blank"><img src="images/insta.svg" width="22" /></a></li>
              <li><a href="https://www.pinterest.com/rvrita" target="_blank"><img src="images/pinterest.svg" width="22" /></a></li>
              <li><a href="https://www.twitter.com/rvrita" target="_blank"><img src="images/twitter.svg" width="22" /></a></li>
            </ul>
            <div className="contactme"><a href="mailto:rvrita@me.com">Email Me</a></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;