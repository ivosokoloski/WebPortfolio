import "./Education.css";

export function Education() {
  return (
    <div className="main-content-wrapper">
     
      <section id="education" className="info-block">
        <h2 className="block-title">Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="card-header">
              <span className="badge">2023 — Present</span>
              <h3>Computer Science & Engineering</h3>
            </div>
            <p className="institution">
              UKIM - Faculty of Computer Science and Engineering (FINKI)
            </p>
            <p className="description">
              Currently mastering software engineering, data structures, and
              modern web architectures.
            </p>
          </div>

          <div className="education-card">
            <div className="card-header">
              <span className="badge">2019 — 2023</span>
              <h3>Pharmaceutical Technician</h3>
            </div>
            <p className="institution">MSU "Gjorche Petrov" - Prilep</p>
            <p className="description">
              Completed secondary medical education with a focus on pharmacy and
              chemistry.
            </p>
          </div>
        </div>
      </section>

    
      <section className="info-block">
        <h2 className="block-title">Current Focus</h2>
        <div className="focus-container">
          
          <div className="focus-item">
            <div className="focus-icon-box">⚡</div>
            <div className="focus-details">
              <h4>Software Development</h4>
              <p>
                Building scalable and performant web applications using React,
                Springboot, .Net and modern back-end technologies.
              </p>
            </div>
          </div>

         
          <div className="focus-item">
            <div className="focus-icon-box">🚀</div>
            <div className="focus-details">
              <h4>Professional Growth</h4>
              <ul className="focus-list">
                <li>Continuous improvement of programming skills</li>
                <li>Working on real and practical projects</li>

                <li>
                  Preparation for professional development and an industry
                  career
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="info-block">
        <h2 className="block-title">Technical Skills</h2>
        <div  className="skills-grid">
          
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">⌨️</span>
              <h3>Programming</h3>
            </div>
            <div className="skill-tags">
              <span>C++</span> <span>Java</span> <span>C#</span>
              <span>JavaScript</span> <span>Bash</span> <span>Python</span>
            </div>
          </div>

          
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">🌐</span>
              <h3>Web Technologies</h3>
            </div>
            <div className="skill-tags">
              <span>HTML</span> <span>CSS</span> <span>React</span>
              <span>Fetch API</span> <span>jQuery</span> <span>anime.js</span>
              <span>WordPress</span>
            </div>
          </div>

         
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">⚙️</span>
              <h3>Backend & Frameworks</h3>
            </div>
            <div className="skill-tags">
              <span>Spring Boot</span> <span>Spring MVC</span>
              <span>Spring Security</span> <span>.NET MVC</span>{" "}
              <span>ASP.NET</span>
            </div>
          </div>

         
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">🛠️</span>
              <h3>Databases & Tools</h3>
            </div>
            <div className="skill-tags">
              <span>PostgreSQL</span> <span>SQL</span> <span>Git</span>
              <span>Visual Studio</span> <span>IntelliJ</span>{" "}
              <span>Pandas</span>
              <span>NumPy</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
