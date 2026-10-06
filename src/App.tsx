import './App.css'

const metrics = [
  { value: '4+', label: 'Years building' },
  { value: '10+', label: 'Hands-on builds' },
  { value: 'Power', label: 'Control + systems' },
  { value: 'Embedded', label: 'Hardware + software' },
]

const workExperience = [
  {
    role: 'Electrical Engineering / Hardware Development',
    company: 'Circuit design, validation, and prototype iteration',
    period: '2023 to Present',
    description:
      'Worked directly on analog and digital circuit behavior, component selection, prototyping, and troubleshooting for practical hardware systems. My focus has been on making ideas testable, reliable, and usable by refining designs through real-world validation rather than theory alone.',
  },
  {
    role: 'Embedded Systems & Control Prototyping',
    company: 'Microcontroller-based product and system builds',
    period: '2021 to 2023',
    description:
      'Built and iterated on embedded systems involving sensor interfaces, control logic, power distribution, and hardware debugging. This work strengthened my ability to connect firmware behavior, electrical design choices, and end-use performance into a single working system.',
  },
  {
    role: 'Power, Controls, and Systems Thinking',
    company: 'Self-directed electronics and experimentation',
    period: '2019 to 2021',
    description:
      'Explored power delivery, control architecture, thermal considerations, and system-level reliability through hands-on builds and iterative testing. That phase developed my understanding of how small design decisions affect efficiency, stability, and real-world performance.',
  },
]

const projects = [
  {
    name: 'Precision Sensor Platform',
    summary:
      'Developed a compact platform for sensor acquisition and signal-processing workflows, focusing on stable power delivery, clean signal chains, and embedded control for dependable measurements.',
    tags: ['Electronics', 'Signal Processing', 'Embedded Systems', 'Prototype Testing'],
    accent: 'violet',
  },
  {
    name: 'Power & Control Module',
    summary:
      'Designed a power-distribution and control module with attention to efficiency, thermal behavior, and predictable operation under changing electrical loads.',
    tags: ['Power Electronics', 'Systems Thinking', 'Validation', 'Reliability'],
    accent: 'cyan',
  },
  {
    name: 'Embedded Control System',
    summary:
      'Built a microcontroller-based system around switching, feedback, and monitoring logic to support practical product behavior with consistent performance.',
    tags: ['Control Systems', 'Firmware', 'Testing', 'Hardware Debugging'],
    accent: 'amber',
  },
]

const skills = [
  {
    title: 'Electrical + electronics',
    items: ['Circuit analysis', 'Analog design', 'Signal behavior', 'Power delivery', 'Component selection', 'PCB fundamentals'],
  },
  {
    title: 'Embedded + controls',
    items: ['Embedded C', 'Microcontrollers', 'ADC / PWM / UART', 'Feedback loops', 'Firmware debugging', 'Control logic'],
  },
  {
    title: 'Power + systems',
    items: ['Power electronics', 'DC-DC basics', 'Thermal awareness', 'Reliability', 'Efficiency', 'System architecture'],
  },
  {
    title: 'Design + prototyping',
    items: ['Rapid prototyping', 'PCB thinking', 'Lab testing', '3D printing', 'Iteration', 'Documentation'],
  },
  {
    title: 'Software + analysis',
    items: ['Python', 'MATLAB', 'LTspice', 'Simulation', 'Data analysis', 'Automation'],
  },
  {
    title: 'Execution + teamwork',
    items: ['Problem solving', 'Research', 'Technical communication', 'Project ownership', 'Collaboration', 'Iteration'],
  },
]

const achievements = [
  'Built and improved electronics systems for measurement, control, power distribution, and dependable operation across multiple real-world use cases.',
  'Worked through the full engineering loop: concept development, hardware choice, prototyping, testing, troubleshooting, and iteration.',
  'Combined electrical fundamentals, embedded thinking, and practical systems knowledge to turn engineering ideas into working solutions.',
]

const internships = [
  {
    title: 'Embedded Systems Intern',
    detail: 'Worked on microcontroller-based hardware integration, validation, and debugging for practical systems and product prototypes.',
  },
  {
    title: 'Circuit Design Intern',
    detail: 'Focused on analog and digital circuit design, component selection, and hands-on prototype testing in a lab environment.',
  },
  {
    title: 'Power & Controls Intern',
    detail: 'Evaluated and refined power delivery and control architectures to improve stability, efficiency, and reliability.',
  },
  {
    title: 'Hardware Development Intern',
    detail: 'Supported board bring-up, instrumentation, validation, and iterative improvements across multiple hardware builds.',
  },
]

function App() {
  return (
    <div className="portfolio-shell">
      <div className="circuit-background" aria-hidden="true" />
      <header className="topbar">
        <nav className="container nav">
          <a href="#home" className="brand">
            <span className="brand-mark">I</span>
            Iyan Shivshankar
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Socials</a>
          </div>

          <a href="/resume-iyan-shivshankar.pdf" download className="nav-button">
            Resume
          </a>
        </nav>
      </header>

      <main className="container page">
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Electrical engineering embedded systems power</p>
            <h1>
              Building thoughtful <span>hardware systems</span> from concept to working reality.
            </h1>
            <p className="lead">
              I’m Iyan Shivshankar, an electrical engineering-focused builder working across electronics design, embedded control,
              power delivery, signal behavior, and prototype validation. My work sits in the overlap between circuit thinking,
              hardware troubleshooting, and practical product development, turning technical ideas into dependable systems that can be tested, refined, and used.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View my work
              </a>
              <a href="/resume-iyan-shivshankar.pdf" download className="secondary-btn">
                Download resume
              </a>
            </div>

            <ul className="mini-stats" aria-label="quick stats">
              <li>
                <strong>4+</strong>
                <span>years building</span>
              </li>
              <li>
                <strong>10+</strong>
                <span>hands-on builds</span>
              </li>
              <li>
                <strong>Power</strong>
                <span>+ embedded systems</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="profile summary">
            <div className="floating-card card-top">
              <span className="dot green" />
              Electronics systems
            </div>

            <div className="profile-card">
              <div className="avatar">IS</div>
              <div className="profile-copy">
                <p className="label">Available for engineering work</p>
                <h2>Iyan Shivshankar</h2>
                <p>
                  Aspiring electrical engineer building practical electronics systems with a focus on reliability, creativity,
                  and execution across hardware, controls, and embedded design.
                </p>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="dot blue" />
              Power controls embedded
            </div>
          </div>
        </section>

        <section className="stats-bar" aria-label="stats">
          {metrics.map((metric) => (
            <div key={metric.label} className="stat-card">
              <div className="stat-value">{metric.value}</div>
              <div className="stat-label">{metric.label}</div>
            </div>
          ))}
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>Electrical engineering thinking applied across electronics, power, embedded systems, and product development.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I build around real engineering problems: analog and digital circuit behavior, microcontroller integration, power
                delivery, control logic, sensing, and prototype validation. My work has been driven by practical experimentation and
                iteration, understanding the system, testing the design, and refining it until it behaves reliably in the real world.
              </p>
              <p>
                My engineering approach combines fundamentals with execution. I care about component selection, signal integrity,
                thermal considerations, debugging workflows, and straightforward system design that balances performance, efficiency,
                and manufacturability. In short, I like turning rough ideas into working hardware that can be trusted.
              </p>
            </div>

            <div className="about-panel">
              <div>
                <span>Focus</span>
                <strong>Electronics, embedded systems, power, control, and practical hardware design</strong>
              </div>
              <div>
                <span>Core strengths</span>
                <strong>Problem solving, prototyping, validation, and systems thinking</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>iyan.siddharth@gmail.com</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Working across circuit design, embedded control, power systems, and hardware iteration.</h2>
          </div>

          <div className="timeline">
            {workExperience.map((item) => (
              <article key={item.role} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-topline">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="internships">
          <div className="section-heading">
            <p className="eyebrow">Hands-on experience</p>
            <h2>Focused internship and project experiences that sharpened my technical foundation.</h2>
          </div>

          <div className="internship-grid">
            {internships.map((internship, index) => (
              <article key={internship.title} className="internship-card">
                <div className="internship-index">0{index + 1}</div>
                <h3>{internship.title}</h3>
                <p>{internship.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects centered on sensing, control, power, and dependable hardware performance.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className={`project-card ${project.accent}`}>
                <div className="project-header">
                  <span className="project-badge">Featured</span>
                  <span className="project-arrow">↗</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="chip-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Core strengths across the engineering stack from electronics to execution.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span key={item} className="chip soft">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="section-heading">
            <p className="eyebrow">Highlights</p>
            <h2>What I bring to a team building real electronics and systems.</h2>
          </div>

          <div className="achievement-list">
            {achievements.map((item) => (
              <div key={item} className="achievement-item">
                <span className="achievement-dot" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Let’s build something meaningful</p>
              <h2>Open to electrical engineering, hardware design, embedded systems, and product-focused development work.</h2>
            </div>
            <div className="contact-actions">
              <a href="mailto:iyan.siddharth@gmail.com" className="primary-btn">
                iyan.siddharth@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/iyan-siddharth-a09808276" target="_blank" rel="noreferrer" className="secondary-btn">
                LinkedIn
              </a>
              <a href="https://github.com/Iyanskiz" target="_blank" rel="noreferrer" className="secondary-btn">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© 2026 Iyan Shivshankar</p>
        <div className="footer-links">
          <a href="#contact">Socials</a>
          <a href="https://www.linkedin.com/in/iyan-siddharth-a09808276" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Iyanskiz" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/resume-iyan-shivshankar.pdf" download>
            Resume
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
