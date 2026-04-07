import Image from 'next/image';
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'

export default function Home() {
  return (
    <main>
      <div className="container">

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Shubh Rajawat</span>
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developer
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Passionate developer building user-friendly, responsive web and mobile applications with 3 years of experience across healthcare, fintech, and gaming domains.
            </p>
            <div className="btn-container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
              <a href="#experience" className="btn btn-outline">View Work</a>
            </div>
          </div>
          <div className="hero-image-container animate-float">
            <Image
              src="/images/dev_illustration.png"
              alt="Developer Workspace Illustration"
              width={600}
              height={600}
              className="hero-image"
              priority
            />
          </div>
        </section>

        {/* Skills & About Section */}
        <section id="about" className="section">
          <h2 className="section-title"><span className="gradient-text">Technical Skills</span></h2>
          <div className="about-layout" style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
                  Proficient in building modern architectures using cutting-edge technologies. Experienced in implementing RBAC, RESTful APIs, VOIP integrations, and real-time structured solutions.
                </p>
                <div className="skills-grid">
                  {['React.js', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript (ES6+)', 'REST APIs', 'React Native', 'HTML & CSS', 'GitHub', 'Redis', 'Websockets', 'Docker'].map(skill => (
                    <div key={skill} className="skill-tag">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
              <div className="animate-float-reverse" style={{ borderRadius: '50%', overflow: 'hidden', boxShadow: '0 0 60px rgba(168, 85, 247, 0.25)', border: '4px solid rgba(6, 182, 212, 0.3)' }}>
                <Image
                  src="/images/tech_illustration.png"
                  alt="Abstract Cloud Technology Subsystem"
                  width={400}
                  height={400}
                  style={{ display: 'block', borderRadius: '50%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h2 className="section-title"><span className="gradient-text">Work Experience</span></h2>
          <div className="glass-panel" style={{ padding: '3.5rem 3rem' }}>
            <div className="timeline">

              {/* Exp 1 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Fullstack Developer</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-cyan)', marginBottom: '1.2rem', flexWrap: 'wrap', fontWeight: '500' }}>
                  <span>Parasme Software & Technology</span>
                  <span>Sept 2025 – Present</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                  <strong>ShadowStrike:</strong> Developed frontend and Admin panel for a gaming platform. Implemented full Role-Based Access Control (RBAC) to manage multiple user roles. Architected and delivered the Minimum Viable Product (MVP).
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '10px' }}>
                  <strong>Fabpay:</strong> Developed Admin panel for a Payment Gateway App. And helped in designing system architecture.
                </p>
              </div>

              {/* Exp 2 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Fullstack Developer</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-cyan)', marginBottom: '1.2rem', flexWrap: 'wrap', fontWeight: '500' }}>
                  <span>Sukrut Associates</span>
                  <span>June 2024 – Sept 2025</span>
                </div>
                <ul style={{ color: 'var(--text-secondary)', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem' }}>
                  <li><strong>Skej:</strong> Built a session booking and tracking app for children with Autism Spectrum Disorder.</li>
                  <li><strong>Mesh:</strong> Developed a shift-tracking platform for caregivers across multiple facilities of different companies.</li>
                  <li><strong>Mesh Kiosk:</strong> Built a React Native mobile app for hospital staff to create and scan shifts using QR codes.</li>
                  <li><strong>OnlyTalk:</strong> Developed a web-based VOIP communication tool using Twilio for billers to communicate with insurance companies.</li>
                </ul>
              </div>

              {/* Exp 3 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>MERN Developer</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-cyan)', marginBottom: '1.2rem', flexWrap: 'wrap', fontWeight: '500' }}>
                  <span>Next Big Technology</span>
                  <span>Feb 2023 – June 2024</span>
                </div>
                <ul style={{ color: 'var(--text-secondary)', marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem' }}>
                  <li><strong>Copera:</strong> Frontend for a pension platform serving 671k+ public employees.</li>
                  <li><strong>Vantage Commercial Realty:</strong> Platform for a boutique commercial real estate brokerage in Washington D.C.</li>
                  <li><strong>Safelishare:</strong> UI for a high-security enterprise data protection platform.</li>
                  <li><strong>Digibyts:</strong> Created a Web3 news aggregation platform delivering the latest crypto news.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title"><span className="gradient-text">Featured Projects</span></h2>
          <div className="grid-container">

            {/* Project Sidebar with Image */}
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem 2rem' }}>
              <Image
                src="/images/app_illustration.png"
                alt="Futuristic Web Application UI"
                width={300}
                height={300}
                style={{ borderRadius: '16px', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              />
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-cyan)', fontSize: '1.5rem', textAlign: 'center' }}>Weekend Works</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Experimenting, failing, fixing, and making ideas come alive.</p>
            </div>

            <div className="flex-column g-2" style={{ justifyContent: 'center' }}>
              <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>NPM Package: <span style={{ fontWeight: '400' }}>calculatorbyshubh</span></h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>A calculator utility package published on NPM. Seamlessly integrates into standard JavaScript workflows and environments.</p>
                <a href="https://www.npmjs.com/package/calculatorbyshubh" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>View NPM Package →</a>
              </div>

              <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Browser Code Editor</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>A fully functional browser-based code editor crafted with robust architectural patterns, providing a smooth real-time coding experience.</p>
                <a href="https://edito.vercel.app/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>Live Demo →</a>
              </div>
            </div>

          </div>
        </section>

        {/* Education & Contact Section */}
        <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
          <div className="grid-container">
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '2rem' }}><span className="gradient-text">Education</span></h2>
              <div style={{ borderLeft: '3px solid var(--accent-purple)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>Bachelor of Computer Applications (BCA)</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>SS Jain Subodh P.G. Autonomous College, Jaipur</p>
                <p style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>2022 – 2025</p>
              </div>
            </div>

            <div className="glass-panel" style={{ border: '1px solid rgba(168, 85, 247, 0.4)' }}>
              <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '1.5rem' }}><span className="gradient-text">Get in Touch</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

              <div className="flex-column g-1" style={{ gap: '1.5rem' }}>
                <a href="tel:8952026577" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s' }}>
                  <CiPhone />
                  8952026577
                </a>
                <a href="mailto:shubhrajawat9414@gmail.com" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s' }}>
                  <CiMail />
                  shubhrajawat9414@gmail.com
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white', fontSize: '1.1rem' }}>
                  <CiLocationOn />
                  Jaipur, India
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', fontSize: '0.95rem' }}>
          <p>© Shubh Rajawat. Built with Next.js.</p>
        </footer>

      </div>
    </main>
  );
}
