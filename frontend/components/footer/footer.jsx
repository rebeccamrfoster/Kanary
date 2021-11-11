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
                    <ul>Rebecca Foster</ul>
                    <ul>Technologies
                        <li>React</li>
                        <li>Redux</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                

                {/* <p>Rebecca Foster</p>
                <p>Technologies</p> */}

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