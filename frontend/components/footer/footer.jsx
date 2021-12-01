import React from "react";

const Footer = props => {

    return (
        <footer className="footer">
            <section className="footer-gradient"></section>

            <div className="upper-footer">
                <div className="footer-portrait">
                    <img src={window.portrait} />
                </div>

                <div className="upper-footer-info">
                    <ul>Rebecca Foster
                        <li><a className="footer-icon-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/rebeccamrfoster">GitHub</a></li>
                        <li><a className="footer-icon-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/rebecca-foster-791448203/">LinkedIn</a></li>
                    </ul>
                    <ul>Technologies
                        <li>React/Redux</li>
                        <li>Ruby on Rails</li>
                        <li>PostgreSQL</li>
                        <li>Node</li>
                        <li>JavaScript, HTML, & SCSS</li>
                        <li>Amazon Web Services S3</li>
                    </ul>
                </div>

                <div className="footer-icons">
                    <a className="footer-icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/rebeccamrfoster">
                        <img src={window.github_icon} />
                    </a>
                    <a className="footer-icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/rebecca-foster-791448203/">
                        <img src={window.linkedin_icon} />
                    </a>
                </div>
            </div>
            
            <p className="lower-footer">&#9400; 2021 Kanary</p>
        </footer>
    )
};

export default Footer;