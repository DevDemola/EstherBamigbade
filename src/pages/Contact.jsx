import "./Contact.css";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-wrapper">
        {/* LEFT CARD */}
        <div className="profile-card">
          <img src="/profile.avif" alt="Esther Bamigbade" />

          <p>
             Feel free to contact me for collaborations or job
            opportunities. I’m available for freelance and full-time
            opportunities. Let’s connect, create something meaningful together
            and bring your ideas to life.
          </p>

           <div className="socials">
        {/* <button>Facebook</button> */}
        <button>LinkedIn</button>
        {/* <button>Twitter</button> */}
        <button>Instagram</button>
      </div>
        </div>

        {/* RIGHT CARD */}
        <div className="contact-card">
          <h2>Let’s Work Together</h2>

          <div className="contact-info">
            <span>
              <MdLocationOn className="locay" /> Nigeria
            </span>
            <span>
              <BsFillTelephoneForwardFill className="phone" />
              +234 8103805468
            </span>
            <span>
              <svg
                className="mail"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gmailGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#EA4335" />
                    <stop offset="33%" stopColor="#FBBC05" />
                    <stop offset="66%" stopColor="#34A853" />
                    <stop offset="100%" stopColor="#4285F4" />
                  </linearGradient>
                </defs>

                <path
                  d="M4 6h16v12H4V6zm8 6L4 6h16l-8 6z"
                  stroke="url(#gmailGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinejoin="round"
                />
              </svg>
              estherbamigbade17@gmail.com
            </span>
          </div>

          {/* FORMSPREE FORM */}
          <form
            action="https://formspree.io/f/xkonazal"
            method="POST"
            className="contact-form"
          >
            <input type="text" name="name" placeholder="Your Name" required />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* SOCIALS */}
     
    </section>
  );
};

export default Contact;
