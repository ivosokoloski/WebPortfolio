import "./Contact.css";
export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-divider">
        <span className="divider-label">Get in Touch</span>
      </div>

      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          If my profile and skills align with your requirements, feel free to
          reach out for potential <strong>collaboration</strong> or
          <strong> opportunities</strong>.
        </p>

        <div className="contact-methods">
       
          <a href="mailto:your-email@example.com" className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-info">
              <span>Email</span>
              <p>ivosokoloski4@gmail.com</p>
            </div>
          </a>

     
          <a
            href="https://www.linkedin.com/in/ivo-sokoloski-8557a03b3/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">🔗</div>
            <div className="contact-info">
              <span>LinkedIn</span>
              <p>Ivo Sokoloski</p>
            </div>
          </a>

          <a
            href="https://github.com/ivosokoloski"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">👾</div>
            <div className="contact-info">
              <span>GitHub</span>
              <p>@ivosokoloski</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
