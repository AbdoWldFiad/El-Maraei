import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function CountUp({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let startTime: number;

        const animate = (time: number) => {
          if (!startTime) startTime = time;

          const progress = Math.min((time - startTime) / duration, 1);

          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(easeOutCubic * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
