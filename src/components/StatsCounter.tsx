"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  target: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { target: 15, suffix: "+", label: "Années d'expérience" },
  { target: 500, suffix: "+", label: "Clients satisfaits" },
  { target: 7, suffix: "j/7", label: "Disponibilité" },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.target, 1800, started);
  return (
    <div>
      <div className="text-4xl font-extrabold text-white">
        {count}
        <span>{stat.suffix}</span>
      </div>
      <div className="text-amber-900 font-medium mt-1">{stat.label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-amber-500 py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} started={started} />
        ))}
        {/* Devis gratuit */}
        <div>
          <div className="text-4xl font-extrabold text-white">Devis</div>
          <div className="text-amber-900 font-medium mt-1">Gratuit</div>
        </div>
      </div>
    </section>
  );
}
