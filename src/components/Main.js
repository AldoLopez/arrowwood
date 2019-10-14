/*global Email*/
import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  sendEmail = () => {
    /*eslint no-undef: "error"*/
    Email.send({
        SecureToken : "a1cbd647-4211-43ab-ac70-654df1b47c36",
        To : 'aldo@arrowwood.dev',
        From : 'postmaster@arrowwood.dev',
        Subject : "Contact form",
        Body : `email: ${document.getElementById("email").value}\n${document.getElementById("message").value}`
    }).then(
      message => alert(message)
    );
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            {/*<img src={pic01} alt="" />*/}
          </span>
          <p>
            Software Developer by day and code ninja by night.
            I'm here to help you introduce your ideas to the internet.
            Feel free to explore and read about my work. If you're
            in the market for a full stack developer for any of your
            projects feel free to contact me.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            {/*<img src={pic02} alt="" />*/}
          </span>
          <div className="flexDiv">
            <div className="flexCol workabout">
              <i className="fa fa-code fa-3x workicon botpad"></i>
              <h3 className="botpad">Website Developer</h3>
              <div>
                <p>
                  Responsive websites that scale with your business.
                  Inform clients of hours, upcoming events, and much more.
                  Send email blasts to customers to keep them engaged.
                </p>
                <p>
                  I'll work with you to make sure your customers see your 
                  website, and get all the information necessary from it.
                  Custom email addresses, email tracking, and much more.
                </p>
              </div>
            </div>
            <div className="flexCol workabout">
              <i className="fa fa-coffee fa-3x workicon botpad"></i>
              <h3 className="botpad">Backend Developer</h3>
              <div>
                <p>
                  Scalable API development. Whether you want to add new APIs,
                  modify existing APIs, or hook your website into other APIs
                  it can be done. Hosted on the cloud platform of your choice,
                  or we can choose the best one for your needs together.
                </p>
                <p>
                  Databases, web application backends, mobile backends, and
                  much more. Let's make your website do more!
                </p>
              </div>
            </div>
            <div className="flexCol workabout">
              <i className="fa fa-tablet fa-3x workicon botpad"></i>
              <h3 className="botpad">Mobile Developer</h3>
              <div>
                <p>
                  Mobile applications made for both Android and iOS. You
                  will be involved in every step of the process to make 
                  sure that the application delivered is exactly what you
                  envisioned.
                </p>
                <p>
                  A strong background in web design, API design, and database
                  design will me at your service. Let's go from an idea to
                  production ready.
                </p>
              </div>
            </div>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            {/*<img src={pic03} alt="" />*/}
          </span>
          <p>
            Hi, I'm an experienced software developer looking to help
            others get their visions off the ground. I have 6 years of
            professional experience and countless hours of at home coding.
            I originally went to school to be a history teacher, but after
            taking one Computer Science class I was hooked. I knew I had
            to do this professionally. I have a passion for working with 
            people, and luckily I'm pretty good at this code thing. I 
            believe that there is no such thing as an impossible idea to
            code. There's always another challenge out there, and I'd be
            more than happy to work on it with you.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" onClick={this.sendEmail.bind(this)} />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
