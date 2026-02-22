import { useState } from "react";


export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* FLOATING BUTTON (ONLY WHEN CLOSED) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 58,
            height: 58,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899)",
            color: "#000",
            fontSize: 24,
            border: "none",
            cursor: "pointer",
            zIndex: 2147483647,
          }}
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {/* CHATBOT IFRAME (ONLY WHEN OPEN) */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 360,
            height: 520,
            zIndex: 2147483647,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            backgroundColor: "#0b0b0b",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              height: 44,
              background: "linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6,#ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 12px",
              fontWeight: 700,
              color: "#000",
            }}
          >
            <span>BrevaNext AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: 18,
                cursor: "pointer",
              }}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* IFRAME */}
          <iframe
            src="https://breva-next-chat-bot.vercel.app/embed"
            title="BrevaNext AI Assistant"
            style={{
              width: "100%",
              height: "calc(100% - 44px)",
              border: "none",
              backgroundColor: "#0b0b0b",
            }}
          />
        </div>
      )}
    </>
  );
}
