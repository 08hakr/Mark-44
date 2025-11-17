import { useState, useRef } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const formattedBodyRef = useRef('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Create the subject and body for the email
    // encodeURIComponent ensures that special characters are handled correctly.
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
`You have received a new message from your website contact form.

Here are the details:
Name: ${name}
Email: ${email}

Message:
${message}
`
    );

    // Store the un-encoded body to display it for copy-pasting
    formattedBodyRef.current = `You have received a new message from your website contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Attempt to open the user's default email client
    window.location.href = `mailto:h.kshirsagar@zohomail.in?subject=${subject}&body=${body}`;

    // Show the fallback/success message
    setSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedBodyRef.current).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset message after 2 seconds
    });
  };

  return (
    <div className="contact-form-wrapper">
      {submitted ? (
        <div className="success-message">
          <h3>Thank you!</h3>
          <p>Your email client should have opened. If not, please copy the message below and send it to:</p>
          <div className="fallback-container">
            <div className="email-header">
              <span>To:</span>
              <span className="email-address">h.kshirsagar@zohomail.in</span>
            </div>
            <textarea readOnly value={formattedBodyRef.current} className="fallback-textarea" rows="8" />
            <button onClick={handleCopy} className={`copy-btn ${copied ? 'is-copied' : ''}`}>{copied ? 'Copied!' : 'Copy Message'}</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      )}
      <style jsx>{`
        .contact-form-wrapper { max-width: 600px; margin: 0 auto; transition: height 0.3s ease; }
        .contact-form { text-align: left; width: 100%; }
        .form-group { display: flex; gap: 1rem; margin-bottom: 1rem; }
        .form-group:last-of-type { margin-bottom: 1.5rem; }
        input, textarea { width: 100%; padding: 0.8rem 1rem; border: 1px solid #374151; border-radius: 4px; font-size: 1rem; background: rgba(31, 41, 55, 0.5); backdrop-filter: blur(5px); color: #E5E7EB; font-family: 'Inter', sans-serif; }
        input:focus, textarea:focus { outline: none; border-color: var(--accent-color); background: #111827; }
        textarea { min-height: 150px; resize: vertical; }
        .btn { background: var(--accent-color); color: #111827; padding: 0.8rem 2rem; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem; font-weight: 500; transition: all 0.2s ease; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0, 229, 255, 0.2); }
        @media (max-width: 600px) {
          .form-group { flex-direction: column; }
        }
        /* Styles for the success/fallback message */
        .success-message { text-align: center; background: rgba(31, 41, 55, 0.5); backdrop-filter: blur(5px); padding: 2rem; border-radius: 8px; border: 1px solid #374151; }
        .success-message h3 { margin-top: 0; color: var(--accent-color); }
        .success-message p { color: #9CA3AF; margin-bottom: 1.5rem; }
        .fallback-container { position: relative; margin-top: 1rem; background: rgba(17, 24, 39, 0.8); border: 1px solid #374151; border-radius: 8px; text-align: left; }
        .email-header { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; border-bottom: 1px solid #374151; }
        .email-header span:first-child { color: #9CA3AF; }
        .email-address { color: #F9FAFB; font-weight: 500; }
        .fallback-textarea { width: 100%; background: transparent; color: #D1D5DB; border: none; padding: 1.5rem; font-family: 'Inter', sans-serif; resize: none; line-height: 1.6; }
        .fallback-textarea:focus { outline: none; }
        .copy-btn { position: absolute; top: 0.6rem; right: 0.75rem; background: #374151; color: #E5E7EB; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; transition: all 0.2s ease; font-weight: 500; font-size: 0.9rem; }
        .copy-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0, 229, 255, 0.2); }
        .copy-btn:active { transform: scale(0.98); }
        .copy-btn.is-copied { background-color: #34D399; color: #111827; transform: translateY(0); box-shadow: none; }
        .copy-btn.is-copied:hover { transform: translateY(0); box-shadow: none; }
      `}</style>
    </div>
  );
};

export default ContactForm;
