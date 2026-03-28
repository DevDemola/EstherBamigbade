import React, { useEffect, useState, useRef } from "react";
import "./Stats.css";

const statsData = [
  { label: "Years Active", value: 5 },
  { label: "Clients Patronage", value: 17 },
  { label: "Projects", value: 22 },
  { label: "Available to Work", value: "NOW" },
];

const Stats = () => {
  const [counts, setCounts] = useState(
    statsData.map((stat) => (typeof stat.value === "number" ? 0 : stat.value))
  );
  const statsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          statsData.forEach((stat, index) => {
            if (typeof stat.value === "number") {
              let start = 0;
              const end = stat.value;
              const duration = 2000;
              const stepTime = Math.abs(Math.floor(duration / end));

              const counter = setInterval(() => {
                start += 1;
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = start;
                  return newCounts;
                });

                if (start === end) clearInterval(counter);
              }, stepTime);
            } else {
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = stat.value;
                return newCounts;
              });
            }
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats-container">
        {statsData.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <span className="stat-number">
              {counts[idx]}
              {typeof stat.value === "number" ? "+" : ""}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;