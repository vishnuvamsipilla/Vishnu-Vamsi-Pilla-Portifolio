import { ROLES } from "@/lib/data";

export default function Experience() {
  return (
    <section className="sec sec-alt" id="experience">
      <div className="wrap">
        <div data-reveal>
          <div className="eyebrow">Experience</div>
          <h2 className="h2">Four years, three products, one platform</h2>
        </div>

        <div className="tl-wrap">
          {ROLES.map((r, i) => (
            <div className={`job ${r.now ? "now" : ""}`} key={r.company} data-reveal data-d={i + 1}>
              <div className="job-top">
                <span className="job-r">{r.role}</span>
                <span className="job-c">{r.company}</span>
                <span className="job-p mono">{r.period}</span>
              </div>
              <ul className="job-l">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
