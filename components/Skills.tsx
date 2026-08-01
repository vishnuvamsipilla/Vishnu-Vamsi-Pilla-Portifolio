import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <div data-reveal>
          <div className="eyebrow">Toolkit</div>
          <h2 className="h2">What I work with</h2>
        </div>

        <div style={{ marginTop: 30 }}>
          {SKILLS.map(([group, items], i) => (
            <div className="sk" key={group} data-reveal data-d={Math.min(i, 4)}>
              <div className="sk-h">{group}</div>
              <div className="sk-t">
                {items.map((it) => (
                  <span className="tag" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
