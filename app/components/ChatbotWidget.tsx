"use client";

export default function ChatbotWidget() {
  return (
    <iframe
      src="https://breva-next-chat-bot.vercel.app/"
      title="BrevaNext AI Assistant"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "360px",
        height: "520px",
        border: "none",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        zIndex: 9999,
        backgroundColor: "#0b0b0b",
      }}
    />
  );
}
