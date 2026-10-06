import './App.css'

const metrics = [
  { value: '4+', label: 'Years building' },
  { value: '10+', label: 'Hands-on builds' },
  { value: 'AI', label: 'NexAI + learning' },
  { value: 'Systems', label: 'Hardware + data' },
]

const workExperience = [
  {
    role: 'AI and Applied Problem Solving',
    company: 'NexAI and AI club work',
    period: '2023 to Present',
    description:
      'Explored AI driven problem solving through hands on learning, experimentation, and team oriented development. This work included understanding model workflows, applied machine learning ideas, and how intelligent systems can be built around practical use cases and real world constraints.',
  },
  {
    role: 'Software Product Work',
    company: 'SplitzApp',
    period: '2025 to Present',
    description:
      'Worked on product and software experiences that connected user needs with practical implementation. The work involved translating ideas into functional digital experiences, improving usability, and supporting clear execution in a modern product environment.',
  },
  {
    role: 'Research and Bioinformatics Work',
    company: 'Biana',
    period: '2025 to Present',
    description:
      'Contributed to research oriented work involving biological data interpretation, computational analysis, and structured problem solving. This strengthened my ability to work with data, think systematically, and connect technical investigation to meaningful scientific questions.',
  },
  {
    role: 'Electrical Engineering and Hardware Development',
    company: 'Circuit design, validation, and embedded systems',
    period: '2020 to 2023',
    description:
      'Built and refined hardware solutions across electronics, embedded systems, signal handling, and practical prototyping. This work strengthened my understanding of system design, debugging, validation, and the link between physical hardware and real world performance.',
  },
]

const projects = [
  {
    name: 'NexAI and AI club work',
    summary:
      'Worked on AI focused learning and applied experimentation, exploring how intelligent systems can be approached with curiosity, technical reasoning, and practical implementation. The work centered on understanding model driven workflows, real world AI use cases, and hands on technical exploration.',
    tags: ['AI', 'Machine Learning', 'Applied Research', 'Learning'],
    accent: 'violet',
  },
  {
    name: 'SplitzApp product work',
    summary:
      'Worked on product focused digital experiences that required clear problem framing, user centered design thinking, and practical execution. The work involved turning ideas into usable experiences with attention to clarity, flow, and end user value.',
    tags: ['Product Thinking', 'UX', 'Software Execution', 'Problem Solving'],
    accent: 'violet',
  },
  {
    name: 'Biana research and bioinformatics work',
    summary:
      'Applied structured analysis to biological and research driven problems, helping connect raw data to meaningful interpretation. This included computational reasoning, data handling, and scientific problem solving in a research environment.',
    tags: ['Bioinformatics', 'Data Analysis', 'Research', 'Computational Thinking'],
    accent: 'cyan',
  },
  {
    name: 'Embedded and hardware systems',
    summary:
      'Built hardware and embedded systems around control logic, power behavior, sensing, and validation. The work spanned prototype iteration, debugging, and practical engineering decisions across electrical and systems level challenges.',
    tags: ['Embedded Systems', 'Power', 'Validation', 'Hardware Design'],
    accent: 'amber',
  },
]

const skills = [
  {
    title: 'AI + applied intelligence',
    items: ['AI learning', 'Machine learning concepts', 'Applied AI thinking', 'Model workflows', 'Problem framing', 'Hands on experimentation'],
  },
  {
    title: 'Software + product',
    items: ['Product thinking', 'UX reasoning', 'Problem solving', 'Feature execution', 'User value', 'Iteration'],
  },
  {
    title: 'Research + bioinformatics',
    items: ['Research thinking', 'Data interpretation', 'Computational analysis', 'Biological data', 'Scientific workflow', 'Analytical rigor'],
  },
  {
    title: 'Electrical + electronics',
    items: ['Circuit analysis', 'Analog design', 'Signal behavior', 'Power delivery', 'Component selection', 'PCB fundamentals'],
  },
  {
    title: 'Embedded + controls',
    items: ['Embedded C', 'Microcontrollers', 'ADC / PWM / UART', 'Feedback loops', 'Firmware debugging', 'Control logic'],
  },
  {
    title: 'Analysis + execution',
    items: ['Python', 'MATLAB', 'LTspice', 'Simulation', 'Data analysis', 'Technical communication'],
  },
]

const achievements = [
  'Worked across software product thinking, research driven data work, and embedded hardware execution, creating a broader engineering profile than electronics alone.',
  'Combined technical problem solving with structured analysis, whether the challenge involved hardware, bioinformatic interpretation, or product development decisions.',
  'Built through both hands on engineering and research oriented work, balancing experimentation, iteration, and real world implementation.',
]

const internships = [
  {
    title: 'SplitzApp',
    detail: 'Worked on product oriented software execution, user centered problem solving, and practical development work that connected needs to functional outcomes.',
  },
  {
    title: 'Biana',
    detail: 'Supported research and bioinformatics focused problem solving, including data interpretation and analytical reasoning in a technical scientific setting.',
  },
  {
    title: 'NexAI',
    detail: 'Explored AI driven learning and applied experimentation, building exposure to model workflows, intelligent systems thinking, and hands on technical problem solving.',
  },
  {
    title: 'Embedded Systems and Hardware Development',
    detail: 'Worked on microcontroller based hardware integration, validation, and debugging while also supporting board bring up, instrumentation, and iterative improvements across hardware builds.',
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
            <p className="eyebrow">Engineering AI software research hardware</p>
            <h1>
              Building thoughtful <span>systems</span> across AI, hardware, software, and research.
            </h1>
            <p className="lead">
              I’m Iyan Shivshankar, an engineering-minded builder working across electronics, embedded systems, AI and applied learning,
              software product thinking, research based analysis, and practical problem solving. My background spans hardware development,
              product execution, computational research, and AI exploration, giving me a broad foundation in turning technical ideas into useful systems with measurable impact.
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
              AI software research
            </div>

            <div className="profile-card">
              <div className="avatar">IS</div>
              <div className="profile-copy">
                <p className="label">Available for engineering work</p>
                <h2>Iyan Shivshankar</h2>
                <p>
                  Engineer with a broad foundation in hardware, software, research, and systems thinking, focused on practical problem
                  solving and building useful, reliable solutions across technical domains.
                </p>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="dot blue" />
              AI hardware data
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
            <h2>Engineering thinking applied across AI, hardware, software, research, and product development.</h2>
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
            <h2>Working across AI exploration, product work, research, embedded systems, and hardware iteration.</h2>
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
            <h2>Projects centered on AI, product thinking, research, embedded systems, and dependable technical execution.</h2>
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
            <h2>Core strengths across AI, software, research, electronics, and systems execution.</h2>
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
              <h2>Open to engineering roles spanning AI, software, research, embedded systems, and product focused technical work.</h2>
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
