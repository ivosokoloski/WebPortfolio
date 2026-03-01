import "./Projects.css";

export function Projects() {
  return (
    <section id="projects" className="info-block">
      <h2 className="block-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-content">
            <div className="project-header">
              <span className="project-category">Web Application</span>
              <h3>Cars App</h3>
            </div>
            <h4 className="project-description">
              Cars App is a Spring Boot mini application intended for practicing
              and strengthening the fundamental and beginner concepts of Spring
              Boot, with a special focus on the MVC architecture.
            </h4>
            <div className="project-tech-stack">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Spring MVC</span>
              <span>Spring Security</span>
              <span>Spring Data JPA</span>
              <span>PostgreSQL</span>
              <span>Thymeleaf</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/ivosokoloski/CarsApp"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="link-icon"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View Source
              </a>
            </div>
          </div>
          <div className="project-accent-line"></div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <div className="project-header">
              <span className="project-category">Web Application</span>
              <h3>Vaccination App</h3>
            </div>
            <h4 className="project-description">
              Vaccination App is a mini application developed with ASP.NET MVC,
              intended for studying the basic concepts of the MVC architecture
              in a .NET environment.
            </h4>
            <div className="project-tech-stack">
              <span>C#</span>
              <span>ASP.NET MVC</span>
              <span>Entity Framework</span>
              <span>Razor Views</span>
              <span>Local Database (LocalDB / SQLite)</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/ivosokoloski/VaccinationApp"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="link-icon"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View Source
              </a>
            </div>
          </div>
          <div className="project-accent-line"></div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <div className="project-header">
              <span className="project-category">Web Application</span>
              <h3>Cocktails App</h3>
            </div>
            <h4 className="project-description">
              Cocktails App is a frontend application, whose main goal is
              practicing and deepening knowledge in JavaScript and working with
              external API services.
            </h4>
            <div className="project-tech-stack">
              <span>Vanilla JavaScript</span>
              <span>Fetch API</span>
              <span>anime.js</span>
              <span>HTML & CSS</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/ivosokoloski/CocktailsApp"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="link-icon"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View Source
              </a>
            </div>
          </div>
          <div className="project-accent-line"></div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <div className="project-header">
              <span className="project-category">Web Application</span>
              <h3>WordPress Application</h3>
            </div>
            <h4 className="project-description">
              The application is built on WordPress and uses many plugins to
              enhance functionality and user experience. The goal is to provide
              a dynamic and easy-to-manage website where content can be modified
              without coding.
            </h4>

            <div className="project-links">
              <a
                href="https://github.com/ivosokoloski/wordpressApp"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="link-icon"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View Source
              </a>
            </div>
          </div>
          <div className="project-accent-line"></div>
        </div>

        
      </div>
      <section className="main-outro">
          <div className="outro-line"></div>

          <p className="outro-text">
            Various <strong>Academic Tasks</strong> and projects completed
            during my studies, covering topics such as{" "}
            <strong>algorithms</strong>, object-oriented programming, databases,{" "}
            <strong>data science</strong>, and web development.
          </p>

          <div className="outro-action">
            <a
              href="https://github.com/ivosokoloski"
              target="_blank"
              rel="noreferrer"
              className="btn-minimal"
            >
              Browse Full GitHub Archive
            </a>
          </div>
        </section>
    </section>
    
  );
}
