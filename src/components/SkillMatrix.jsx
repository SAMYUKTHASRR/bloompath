import { motion } from "framer-motion";

const skills = [
  { name: "Logic & Algorithms", level: 72, color: "#7db89a", bg: "#e8f5ee", icon: "🧩" },
  { name: "Creative UI Design", level: 85, color: "#89b4d4", bg: "#e3f2fd", icon: "🎨" },
  { name: "Technical Writing", level: 60, color: "#c4a4d4", bg: "#f3e5f5", icon: "📝" },
  { name: "Team Coordination", level: 78, color: "#d4a574", bg: "#fff3e0", icon: "🤝" },
  { name: "Problem Solving", level: 88, color: "#5a9e82", bg: "#e0f2f1", icon: "💡" },
  { name: "Communication", level: 65, color: "#a4b4d4", bg: "#e8eaf6", icon: "💬" },
];

const radar = [
  { label: "Logic", x: 200, y: 40, val: 0.72 },
  { label: "Design", x: 340, y: 110, val: 0.85 },
  { label: "Writing", x: 320, y: 270, val: 0.60 },
  { label: "Teamwork", x: 180, y: 330, val: 0.78 },
  { label: "Problem", x: 60, y: 270, val: 0.88 },
  { label: "Comms", x: 50, y: 110, val: 0.65 },
];

function getPolygonPoints(nodes, scale = 1) {
  return nodes.map(n => {
    const cx = 195, cy = 190;
    const px = cx + (n.x - cx) * n.val * scale;
    const py = cy + (n.y - cy) * n.val * scale;
    return `${px},${py}`;
  }).join(" ");
}

export default function SkillMatrix() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: "#2d3748" }}>Your Skill Constellation 🌌</h1>
        <p style={{ color: "#8a9e8a", marginTop: 4, fontSize: 15 }}>
          You're not one number. You're a universe of strengths — mapped just for you.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 28 }}>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          style={{ background: "#fff", borderRadius: 20, padding: 28, border: "1px solid #e8e4dc" }}
        >
          <h2 style={{ fontSize: 16, fontWeight: 600, color: "#2d3748", marginBottom: 16 }}>Strength Radar</h2>
          <svg viewBox="0 0 390 380" style={{ width: "100%", height: "auto" }}>
            {/* Background polygon */}
            <polygon points={getPolygonPoints(radar, 1)} fill="none" stroke="#e8e4dc" strokeWidth="1.5" />
            <polygon points={getPolygonPoints(radar, 0.75)} fill="none" stroke="#e8e4dc" strokeWidth="1" />
            <polygon points={getPolygonPoints(radar, 0.5)} fill="none" stroke="#e8e4dc" strokeWidth="1" />
            <polygon points={getPolygonPoints(radar, 0.25)} fill="none" stroke="#e8e4dc" strokeWidth="1" />

            {/* Lines from center */}
            {radar.map((n, i) => (
              <line key={i} x1="195" y1="190" x2={n.x} y2={n.y} stroke="#e8e4dc" strokeWidth="1" />
            ))}

            {/* Skill fill */}
            <motion.polygon
              points={getPolygonPoints(radar)}
              fill="rgba(125, 184, 154, 0.25)"
              stroke="#7db89a"
              strokeWidth="2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            {/* Dots */}
            {radar.map((n, i) => {
              const cx = 195, cy = 190;
              const px = cx + (n.x - cx) * n.val;
              const py = cy + (n.y - cy) * n.val;
              return (
                <motion.circle
                  key={i} cx={px} cy={py} r="6"
                  fill="#7db89a" stroke="#fff" strokeWidth="2"
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                />
              );
            })}

            {/* Labels */}
            {radar.map((n, i) => (
              <text key={i} x={n.x} y={n.y + (n.y < 190 ? -12 : 18)}
                textAnchor="middle" fontSize="12" fill="#718096" fontFamily="Inter, sans-serif">
                {n.label}
              </text>
            ))}
          </svg>
        </motion.div>

        {/* Skill Bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: skill.bg, borderRadius: 14,
                padding: "14px 18px", border: `1.5px solid ${skill.color}22`
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#2d3748" }}>
                  {skill.icon} {skill.name}
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: skill.color }}>{skill.level}%</span>
              </div>
              <div style={{ background: "#e8e4dc", borderRadius: 999, height: 8, overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                  style={{ height: "100%", background: skill.color, borderRadius: 999 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}