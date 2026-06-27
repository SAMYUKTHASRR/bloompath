import { motion } from "framer-motion";

const weekData = [
  { day: "Mon", value: 60 },
  { day: "Tue", value: 75 },
  { day: "Wed", value: 65 },
  { day: "Thu", value: 85 },
  { day: "Fri", value: 78 },
  { day: "Sat", value: 90 },
  { day: "Sun", value: 82 },
];

const cards = [
  { label: "Day Streak", value: "12 days", icon: "🔥", color: "#fff3e0", border: "#f6c89f" },
  { label: "Tasks Done This Week", value: "18 / 20", icon: "✅", color: "#e8f5e9", border: "#a5d6a7" },
  { label: "Focus Hours", value: "34 hrs", icon: "⏱️", color: "#e3f2fd", border: "#90caf9" },
  { label: "Mood Average", value: "Calm 😌", icon: "🌿", color: "#f3e5f5", border: "#ce93d8" },
];

export default function Dashboard() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>

      {/* Welcome */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: "#2d3748" }}>Your Personal Horizon 🌅</h1>
        <p style={{ color: "#8a9e8a", marginTop: 4, fontSize: 15 }}>
          You're not competing with anyone. Just growing — one day at a time.
        </p>
      </motion.div>

      {/* Stat Cards */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16, marginTop: 28
      }}>
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            whileHover={{ scale: 1.03 }}
            style={{
              background: card.color,
              border: `1.5px solid ${card.border}`,
              borderRadius: 16,
              padding: "20px 24px",
              cursor: "default"
            }}
          >
            <div style={{ fontSize: 28 }}>{card.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#2d3748", marginTop: 8 }}>{card.value}</div>
            <div style={{ fontSize: 13, color: "#718096", marginTop: 2 }}>{card.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        style={{
          background: "#ffffff", borderRadius: 20, padding: "28px 32px",
          marginTop: 28, border: "1px solid #e8e4dc"
        }}
      >
        <h2 style={{ fontSize: 17, fontWeight: 600, color: "#2d3748" }}>Weekly Activity</h2>
        <p style={{ fontSize: 13, color: "#a0aec0", marginTop: 2 }}>Your consistency this week — no ranks, just your rhythm.</p>

        <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginTop: 24, height: 120 }}>
          {weekData.map((d, i) => (
            <div key={d.day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${d.value}%` }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                style={{
                  width: "100%", background: d.value >= 85
                    ? "linear-gradient(180deg, #7db89a, #5a9e82)"
                    : "linear-gradient(180deg, #b8d4c8, #9ec4b4)",
                  borderRadius: "6px 6px 0 0",
                  minHeight: 8
                }}
              />
              <span style={{ fontSize: 12, color: "#a0aec0" }}>{d.day}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Affirmation */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        style={{
          marginTop: 24, background: "linear-gradient(135deg, #e8f5ee, #d4ede3)",
          borderRadius: 16, padding: "20px 28px", border: "1px solid #b2d8c4",
          display: "flex", alignItems: "center", gap: 16
        }}
      >
        <span style={{ fontSize: 32 }}>🌱</span>
        <div>
          <p style={{ fontWeight: 600, color: "#2d5a3d", fontSize: 15 }}>
            You improved your focus time by 18% compared to last week.
          </p>
          <p style={{ color: "#5a8a6a", fontSize: 13, marginTop: 3 }}>
            That's YOU vs. yesterday. No one else matters here.
          </p>
        </div>
      </motion.div>

    </div>
  );
}