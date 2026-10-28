import { useEffect, useState } from "react";

export function UniConnectPreview() {
  return (
    <div className="flex h-full gap-3 p-4" aria-hidden>
      <div className="hidden w-14 flex-col gap-2 rounded-lg bg-secondary p-2 sm:flex">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-6 rounded ${i === 0 ? "bg-orange-500/60" : "bg-border"}`} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
          <div className="h-9 w-9 rounded-full bg-orange-500/30" />
          <div className="flex-1">
            <p className="text-xs font-semibold text-foreground">Dhruv Dash</p>
            <p className="mt-0.5 font-mono text-[9px] text-muted-foreground">AI and machine learning student</p>
          </div>
          <span className="rounded-full border border-orange-400/40 px-2 py-0.5 font-mono text-[9px] text-orange-400">AI summary</span>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3">
          <div className="flex h-full flex-col rounded-lg border border-orange-400/25 bg-orange-500/10 p-3">
            <div>
              <p className="font-mono text-[9px] font-semibold text-orange-400">AI profile summary</p>
              <p className="mt-2 text-[9px] leading-relaxed text-foreground">Dhruv is an AI and machine learning student at Sri Sri University. He builds practical projects in computer vision and web development.</p>
              <p className="mt-2 text-[9px] leading-relaxed text-muted-foreground">His recent work includes training a YOLO model to detect objects in side scan sonar images.</p>
            </div>
            <div className="mt-3 border-t border-orange-400/20 pt-2">
              <p className="font-mono text-[8px] uppercase tracking-wide text-orange-300">Focus areas</p>
              <p className="mt-1 text-[8px] leading-relaxed text-foreground">Computer vision · YOLO · Python · AI applications</p>
            </div>
          </div>
          <div className="flex h-full flex-col rounded-lg border border-orange-400/30 bg-secondary p-3">
            <p className="font-mono text-[9px] text-orange-400">CareerBot</p>
            <div className="mt-2 flex flex-1 flex-col justify-around gap-1.5">
              <p className="chat-line w-fit rounded-md bg-orange-500/15 px-2 py-1 text-[8px] text-foreground">How do I start with computer vision?</p>
              <p className="chat-line chat-reply ml-auto w-fit rounded-md bg-orange-500/25 px-2 py-1 text-[8px] text-foreground">Try a small dataset and learn how to evaluate each result.</p>
              <p className="chat-line chat-followup w-fit rounded-md bg-orange-500/15 px-2 py-1 text-[8px] text-foreground">I’m training a YOLO model now.</p>
              <p className="chat-line chat-last ml-auto w-fit rounded-md bg-orange-500/25 px-2 py-1 text-[8px] text-foreground">Great. Compare its predictions with your validation labels.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SonarPreview() {
  return (
    <div className="sonar-stage relative h-full overflow-hidden bg-secondary" aria-hidden>
      <div className="sonar-texture absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_100%)] opacity-50" />
      <div className="sonar-sweep-line absolute inset-0 z-10" />
      {[
        { l: "18%", t: "22%", w: "22%", h: "28%", delay: "3.55s", n: "wreck 0.91", object: "sonar-wreck" },
        { l: "56%", t: "48%", w: "18%", h: "22%", delay: "1.55s", n: "debris 0.84", object: "sonar-debris" },
        { l: "70%", t: "14%", w: "14%", h: "18%", delay: "0.3s", n: "target 0.78", object: "sonar-object-target" },
      ].map((b) => (
        <div key={b.n} className="sonar-target absolute border" style={{ left: b.l, top: b.t, width: b.w, height: b.h, animationDelay: b.delay }}>
          <span className="sonar-label absolute -top-4 left-0 whitespace-nowrap rounded px-1 font-mono text-[9px]">{b.n}</span>
          <span className={`sonar-object ${b.object}`} style={{ animationDelay: b.delay }} />
        </div>
      ))}
      <span className="absolute bottom-3 left-3 z-20 font-mono text-[9px] uppercase tracking-wider text-accent/80">Side scan · live pass</span>
      <span className="absolute bottom-3 right-3 z-20 font-mono text-[9px] text-muted-foreground">Illustrative preview</span>
    </div>
  );
}

export function CampusFindPreview() {
  const [statuses, setStatuses] = useState(["Lost", "Found", "Lost"]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStatuses((current) => {
        const next = [...current];
        const index = Math.floor(Math.random() * next.length);
        next[index] = next[index] === "Lost" ? "Found" : "Lost";
        return next;
      });
    }, 1400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="flex h-full flex-col gap-2.5 p-4" aria-hidden>
      <div className="flex gap-2">
        <div className="h-7 flex-1 rounded-md bg-secondary px-2 py-2 font-mono text-[9px] text-muted-foreground">Search campus listings</div>
        <span className="campus-post rounded-md bg-primary/20 px-2 py-1.5 font-mono text-[9px] text-primary">+ Post</span>
      </div>
      {[
        ["Blue water bottle", "Library, 2F"],
        ["Student ID card", "Cafeteria"],
        ["Black earbuds case", "Block C"],
      ].map(([n, p], i) => (
        <div key={n} className="campus-listing flex items-center gap-3 rounded-lg bg-secondary p-2.5">
          <div className="h-8 w-8 rounded bg-border" />
          <div className="flex-1">
            <p className="text-[11px] text-foreground">{n}</p>
            <p className="font-mono text-[9px] text-muted-foreground">{p}</p>
          </div>
          <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] ${statuses[i] === "Found" ? "text-accent border-accent/40" : "text-violet border-violet/40"}`}>{statuses[i]}</span>
        </div>
      ))}
    </div>
  );
}
