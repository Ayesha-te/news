// WhatsAppChatButton.jsx
import React from "react";

/**
 * Props:
 *  - phone: string (international number, no +, e.g. "923001234567")
 *  - message: string (optional default text)
 *  - bottom, right: position in px or tailwind-friendly values (optional)
 */
const WhatsAppChatButton = ({
  phone = "923001234567",
  message = "Hello! I saw your site and want to chat.",
  bottom = "28px",
  right = "28px",
}) => {
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float"
        style={{ bottom, right }}
      >
        {/* Green circular button with WhatsApp icon */}
        <div className="wa-circle" aria-hidden>
          <svg viewBox="0 0 24 24" className="wa-icon" role="img" focusable="false">
            <path fill="currentColor" d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.39 0 0 5.39 0 12a11.6 11.6 0 0 0 1.62 6L0 24l6.45-1.59A11.94 11.94 0 0 0 12 24c6.61 0 12-5.39 12-12 0-1.6-.32-3.12-.9-4.5zM12 21.5c-1.24 0-2.46-.3-3.55-.88l-.25-.13-3.83.95.9-3.73-.15-.27A9.03 9.03 0 0 1 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9z"/>
            <path fill="#fff" d="M17.1 14.7c-.3-.1-1.7-.8-1.9-.9-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.5.2-.9 0-1.3-.6-2.2-1.7-2.9-3.1-.1-.2 0-.4.1-.5l.6-.6c.1-.1.2-.4.1-.7-.1-.1-.8-2-.9-2.4-.1-.3-.3-.5-.6-.5H8.6c-.3 0-.6.2-.8.5-.2.3-.8 1.7-.8 3.4s.9 3.9 1 4.2c.1.3 1.6 2.7 3.9 3.8 2.3 1.1 3.2.9 3.6.9.4 0 1.4-.5 1.6-1 .2-.5.2-.9.1-1 .1-.1.6-.4.6-.7.1-.3.1-.6 0-.7-.1-.2-.6-.3-.9-.4z"/>
          </svg>
        </div>

        {/* Cartoon-like chat bubble with 3 animated dots */}
        <div className="wa-cartoon" aria-hidden>
          <div className="wa-hand">👋</div>
          <div className="wa-bubble">
            <span className="dot d1" />
            <span className="dot d2" />
            <span className="dot d3" />
          </div>
        </div>
      </a>

      {/* Styles: paste into global CSS if you prefer */}
      <style>{`
        .whatsapp-float {
          position: fixed;
          z-index: 9999;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transform: translateZ(0);
        }

        .wa-circle {
          width: 62px;
          height: 62px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 8px 24px rgba(18, 140, 126, 0.25);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .whatsapp-float:hover .wa-circle {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 16px 36px rgba(18, 140, 126, 0.28);
        }

        .wa-icon {
          width: 30px;
          height: 30px;
          color: white;
        }

        .wa-cartoon {
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }

        /* little waving hand */
        .wa-hand {
          font-size: 18px;
          margin-bottom: 6px;
          transform-origin: 50% 100%;
          animation: wave 1600ms infinite ease-in-out;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(-12deg); }
          30% { transform: rotate(10deg); }
          45% { transform: rotate(-8deg); }
          60% { transform: rotate(6deg); }
          100% { transform: rotate(0deg); }
        }

        /* chat bubble */
        .wa-bubble {
          width: 56px;
          height: 34px;
          background: white;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 26px rgba(0,0,0,0.08);
          transform-origin: center;
          animation: float 2200ms infinite ease-in-out;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }

        .dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          margin: 0 4px;
          background: #25D366;
          border-radius: 50%;
          opacity: 0.95;
        }

        .d1 { animation: dot-anim 1100ms infinite; }
        .d2 { animation: dot-anim 1100ms infinite 160ms; }
        .d3 { animation: dot-anim 1100ms infinite 320ms; }

        @keyframes dot-anim {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-6px) scale(1.1); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.5; }
        }

        /* small responsive adjustment */
        @media (max-width: 520px) {
          .wa-cartoon { display: none; } /* keep mobile simple */
          .wa-circle { width: 56px; height: 56px; }
        }
      `}</style>
    </>
  );
};

export default WhatsAppChatButton;
