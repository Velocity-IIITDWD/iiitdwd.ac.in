'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import './index.css';

const Online = () => {
  const enquireFunction = () => {
    alert('Thank you for your interest! We will get back to you soon.');
  };
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    // JavaScript to toggle the menu when hamburger icon is clicked
    // const hamburger = document.getElementById('hamburger');
    // const navLinks = document.querySelector('.nav-links');
    // hamburger?.addEventListener('click', () => {
    //   navLinks?.classList.toggle('active');
    // });

    const cb = () => {
      console.log('bbbbbbb')
      navLinksRef.current?.classList.toggle('active');
    };

    if(hamburgerRef.current && navLinksRef.current) {
      hamburgerRef.current.addEventListener('click', cb);
    } else {
      console.log('a: ', navLinksRef.current, hamburgerRef.current);
    }

    return () => hamburgerRef.current?.removeEventListener('click', cb);
  }, []);
  return (
    <>
      <header>
        <nav className="top-nav">
          <div className="logo">
            <img src="/images/Logo.png" className='h-full' alt="IIIT Dharwad Logo" />
          </div>
          <ul className="nav-links" ref={navLinksRef}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#electives">Electives</a>
            </li>
            <li>
              <a href="#faculty">Faculty</a>
            </li>
          </ul>
          <div className="hamburger" id="hamburger" ref={hamburgerRef}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <main>
        <section className="banner">
          <div className="banner-content">
            <img
              className="desktop-banner"
              src="/images/Banner.png"
              alt="IIIT Dharwad Banner"
            />
            <img
              className="mobile-banner"
              style={{ display: 'none' }}
              src="/images/Mobile-banner 1.png"
              alt="IIIT Dharwad Banner"
            />
            <div className="banner-text">
              {/* <!-- Add your text content here --> */}
              <div className="banner-info">
                <h1>Join the top 1% driving</h1>
                <h1>the next AI revolution.</h1>
                <button className="btn-enquire" onClick={enquireFunction}>
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutus" id="about">
          <div className="aboutus-content">
            <div>
              <h2 className="section-heading">About Us</h2>
            </div>
            <div>
              <img src="/images/Group.png" alt="IIIT Dharwad Aboutus" />
            </div>
            <div className="aboutus-text">
              IIIT Dharwad is an Institute of National Importance set up in 2015
              in Public-Private-Partnership mode between the Ministry of
              Education, Government of India, Government of Karnataka and
              industry partner Keonics under an Act of Parliament (23 of 2017).
              The primary objective of setting up IIIT-Dharwad is to address the
              skill gap in high-end information technology and thereby enable
              India to retain its global leadership role in IT and allied areas.
              IIIT-Dharwad offers B.Tech degree programmes in Computer Science
              and Engineering, Electronics and Communication Engineering, and
              Data Science and Artificial Intelligence, along with Master of
              Technology (Research) and Doctoral Program.
              <br />
              <br />
              As an Institute of National Importance, IIIT-Dharwad focuses on
              applying IT to solve problems of social relevance to India - the
              kind of solutions that do not usually result from the commercial
              forces of market dynamics or the priorities of the Western world
              outside of India. At the same time, IIIT-Dharwad also adopts a
              semi-modern theme in its campus design and approach, ensuring that
              the environment is conducive to learning and innovation. The
              institute is committed to fostering a culture of research and
              development, encouraging students to engage in projects that have
              a meaningful impact on society. With state-of-the-art facilities
              and a dedicated faculty, IIIT-Dharwad aims to nurture the next
              generation of technology leaders who will contribute to the growth
              of the nation and the world.
            </div>
            <h3>Read More</h3>
          </div>
        </section>

        <section className="stats">
          <div className="stats-container">
            <div className="stats-content">
              <div className="stats-item">
                <div className="stat-icon">
                  <img src="/images/cap.png" alt="Graduation cap icon" />
                </div>
                <div className="stat-value">650+</div>
                <p className="stat-label">Alumni</p>
              </div>

              <div className="stats-item">
                <div className="stat-icon">
                  <img src="/images/faculty.png" alt="Faculty member icon" />
                </div>
                <div className="stat-value">40+</div>
                <p className="stat-label">Faculty</p>
              </div>

              <div className="stats-item">
                <div className="stat-icon">
                  <img
                    src="/images/publication.png"
                    alt="Open publication icon"
                  />
                </div>
                <div className="stat-value">100+</div>
                <p className="stat-label">Publications</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero">
          <div className="hero-container">
            {/* <!-- Left side: Image --> */}
            <div className="hero-image">
              <img src="/images/datascience.png" alt="AI and Data Science" />
            </div>

            {/* <!-- Right side: Content --> */}
            <div className="hero-content">
              <h1>M.Tech. in Data Science and Artificial Intelligence</h1>
              <p className="subtitle">
                Your pathway to mastering data and AI technologies
              </p>
              <p className="description">
                The M.Tech. in Data Science and Artificial Intelligence (DSAI)
                at IIIT Dharwad is designed to address the growing demand for
                professionals skilled in advanced AI and data science. This DSAI
                program emphasizes the integration of theory with practical
                skills in AI technologies, including machine learning, deep
                learning, natural language processing, and AI for finance and
                health. Real-world problem-solving, through intensive project
                work, prepares students for roles in research, industry, and
                entrepreneurship.
              </p>
              <div className="hero-bullet">
                <div className="hero-bullet-point">
                  <div className="bullet-point">
                    <img
                      className="hero-bullet-point-Image"
                      src="/images/tick.png"
                      alt="Open publication icon"
                    />
                    Eligibility : B.E./B. Tech/M.Sc./MCA
                  </div>
                </div>
                <div className="hero-bullet-point">
                  <div className="bullet-point">
                    <img
                      className="hero-bullet-point-Image"
                      src="/images/clock.png"
                      alt="Open publication icon"
                    />
                    Duration: 2 years or 4 Semesters
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- specializations  --> */}
        <section className="specializations" id="electives">
          <div className="specializations-container">
            <h2 className="section-heading">Specializations Available</h2>
            <div className="spec-grid my-carousel">
              <div className="spec-item">
                <div className="spec-slide-item">
                  <img
                    className="spec-Image"
                    src="/images/message.png"
                    alt="Open publication icon"
                  />
                  <h3>NLP and Speech</h3>
                </div>
              </div>
              <div className="spec-item">
                <div className="spec-slide-item">
                  <img
                    className="spec-Image"
                    src="/images/computer_vision.png"
                    alt="Open publication icon"
                  />
                  <h3>Computer Vision</h3>
                </div>
              </div>
              <div className="spec-item">
                <div className="spec-slide-item">
                  <img
                    className="spec-Image"
                    src="/images/generative_ai.png"
                    alt="Open publication icon"
                  />
                  <h3>Generative AI</h3>
                </div>
              </div>
              <div className="spec-item">
                <div className="spec-slide-item">
                  <img
                    className="spec-Image"
                    src="/images/message.png"
                    alt="Open publication icon"
                  />
                  <h3>NLP and Speech</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- specializations  --> */}

        {/* <!-- key-features --> */}
        <section className="key-features" id="faculty">
          <div className="container">
            <h2 className="section-heading">Key Features</h2>
            <div className="features-flex">
              <div className="features-container">
                <div className="feature-card">
                  <div className="feature-content">
                    <img
                      className="feature-icon"
                      src="/images/key1.png"
                      alt="Online and offline learning modes"
                    />
                    <p className="feature-text">
                      Online and offline learning modes
                    </p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-content">
                    <img
                      className="feature-icon"
                      src="/images/key2.png"
                      alt="Flexible re-entry, multi-exit options"
                    />
                    <p className="feature-text">
                      Flexible re-entry, multi-exit options
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-container">
                <div className="feature-card">
                  <div className="feature-content">
                    <img
                      className="feature-icon"
                      src="/images/key3.png"
                      alt="Hands-on lab work"
                    />
                    <p className="feature-text">Hands-on lab work</p>
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-content">
                    <img
                      className="feature-icon"
                      src="/images/key4.png"
                      alt="Industry-based curriculum"
                    />
                    <p className="feature-text">Industry-based curriculum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- key-features --> */}

        {/* <!-- campus-immersion --> */}
        <section className="campus-immersion">
          <div className="container">
            <h2 className="section-heading">Campus Immersion</h2>
            <p className="campus-description">
              Experience immersive learning and networking
            </p>
            <div className="immersion-items">
              <div className="immersion-card">
                <img
                  className="immersion-icon"
                  src="/images/campus1.png"
                  alt="Industry-based curriculum"
                />
                <p>Optional 7-day on-campus immersion</p>
              </div>
              <div className="immersion-card">
                <img
                  className="immersion-icon"
                  src="/images/campus2.png"
                  alt="Industry-based curriculum"
                />
                <p>Opportunity to engage in hands-on lab work</p>
              </div>
              <div className="immersion-card">
                <img
                  className="immersion-icon"
                  src="/images/campus3.png"
                  alt="Industry-based curriculum"
                />
                <p>Direct interaction with faculty</p>
              </div>
              <div className="immersion-card">
                <img
                  className="immersion-icon"
                  src="/images/campus4.png"
                  alt="Industry-based curriculum"
                />
                <p>Designed for online students seeking practical experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- campus-immersion --> */}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-cta">
            <h3 className="footer-title">Still not sure about the program?</h3>
            <button className="btn-enquire">Enquire Now</button>
          </div>
          <hr className="footer-divider" />
          <div className="footer-links">
            <a href="#">Accreditations</a>
            <a href="#">News & Blogs</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Online;