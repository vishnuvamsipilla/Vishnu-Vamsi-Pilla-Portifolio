import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="stats">
          {STATS.map(([n, l, s], i) => (
            <div className="stat" key={l} data-reveal data-d={i}>
              <div className="stat-n">{n}</div>
              <div className="stat-l">{l}</div>
              <div className="stat-s">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
