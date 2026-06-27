import { useState } from "react";
import Dashboard from "./components/Dashboard";
import SkillMatrix from "./components/SkillMatrix";
import { motion } from "framer-motion";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div style={{ minHeight: "100vh", background: "#f8f7f2" }}>
      {/* Header */}
      <header style={{
        background: "#ffffff",
        borderBottom: "1px solid #e8e4dc",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 1px 12px rgba(0,0,0,0.05)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, #7db89a, #5a9e82)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: 700, fontSize: 16
          }}>B</div>
          <span style={{ fontWeight: 700, fontSize: 20, color: "#2d3748", letterSpacing: "-0.3px" }}>
            Bloom<span style={{ color: "#7db89a" }}>Path</span>
          </span>
        </div>

        {/* Nav Tabs */}
        <nav style={{ display: "flex", gap: "8px", background: "#f0ede6", padding: "4px", borderRadius: "12px" }}>
          {["dashboard", "skills"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 20px",
                borderRadius: "9px",
                border: "none",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: 14,
                fontFamily: "Inter, sans-serif",
                transition: "all 0.2s ease",
                background: activeTab === tab ? "#ffffff" : "transparent",
                color: activeTab === tab ? "#2d3748" : "#8a9e8a",
                boxShadow: activeTab === tab ? "0 1px 6px rgba(0,0,0,0.08)" : "none"
              }}
            >
              {tab === "dashboard" ? "🌱 My Growth" : "🧠 Skill Matrix"}
            </button>
          ))}
        </nav>

        {/* Avatar */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: 14, color: "#8a9e8a" }}>Hey, Arjun 👋</span>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, #b8d4c8, #8ab5a4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: 600, fontSize: 14
          }}>A</div>
        </div>
      </header>

      {/* Page Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {activeTab === "dashboard" ? <Dashboard /> : <SkillMatrix />}
      </motion.div>
    </div>
  );
}