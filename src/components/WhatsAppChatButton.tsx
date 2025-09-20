// src/components/WhatsAppChatButton.jsx
import React from "react";

const WhatsAppChatButton = ({
  phone = "923111786602",
  message = "Hello! I'm interested in Kunjwal City plots.",
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
      >
        <div className="wa-circle">
          {/* WhatsApp logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="white"
            viewBox="0 0 24 24"
            className="wa-logo"
          >
            <path d="M12.004 2c-5.514 0-10 4.486-10 10 0 1.771.469 3.473 1.357 4.978L2 22l5.176-1.328A9.933 9.933 0 0 0 12.004 22c5.514 0 10-4.486 10-10s-4.486-10-10-10zm.003 18c-1.592 0-3.14-.422-4.492-1.219l-.321-.187-3.07.787.82-2.994-.209-.34A7.943 7.943 0 0 1 4.004 12c0-4.411 3.589-8 8.003-8s8.003 3.589 8.003 8-3.589 8-8.003 8zm4.446-5.746c-.242-.121-1.436-.707-1.657-.787-.222-.08-.383-.121-.544.121-.16.242-.625.787-.767.949-.141.162-.283.182-.525.061-.242-.121-1.023-.377-1.949-1.201-.72-.641-1.207-1.433-1.348-1.676-.141-.242-.015-.373.106-.494.11-.11.242-.283.363-.424.121-.141.161-.242.242-.403.081-.162.04-.303-.02-.424-.061-.121-.544-1.312-.746-1.795-.196-.471-.396-.407-.544-.415h-.465c-.162 0-.424.061-.645.303-.222.242-.846.827-.846 2.018 0 1.191.866 2.344.987 2.506.121.162 1.705 2.6 4.134 3.641.578.25 1.029.4 1.38.511.58.185 1.107.159 1.523.096.465-.07 1.436-.586 1.639-1.152.202-.566.202-1.051.141-1.152-.06-.101-.22-.162-.461-.283z"/>
          </svg>
        </div>
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 9999;
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .wa-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: transform 0.3s ease;
        }

        .whatsapp-float:hover .wa-circle {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        .wa-logo {
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .wa-circle {
            width: 60px;
            height: 60px;
          }
          
          .wa-logo {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppChatButton;
