import { PROJECTS } from "@/lib/data";

export default function Work() {
  return (
    <section className="sec sec-alt" id="work">
      <div className="wrap">
        <div data-reveal>
          <div className="eyebrow">Selected work</div>
          <h2 className="h2">The product I own</h2>
          <p className="sub">
            Two of the three pillars of a multi-tenant SaaS platform — the editor people build in,
            and the storefront their customers shop on.
          </p>
        </div>

        <article className="feat" data-reveal data-d="1">
          <div className="feat-top">
            <span className="chip chip-sig">SellersCommerce</span>
            <span className="chip">2024 — present</span>
            <span className="chip">Multi-tenant SaaS</span>
            <h3 className="feat-h">CommerceEdge</h3>
            <p className="txt" style={{ maxWidth: "64ch" }}>
              A CMS, a drag-and-drop page builder, and a live storefront rendering engine in one
              platform. Admins design and publish full ecommerce sites without touching code.
            </p>
          </div>

          <div className="feat-cols">
            <div>
              <div className="pill-h mono">The hard part</div>
              <p className="txt">
                A page builder is a browser app doing a compiler&apos;s job — holding an entire
                site&apos;s component tree in memory while staying responsive to every drag and style
                change. <b>And whatever it produces has to render for real shoppers in under two
                seconds.</b> The editor wants everything loaded; the storefront wants almost nothing.
              </p>
            </div>

            <div>
              <div className="pill-h mono">What I shipped</div>
              <ul className="wins">
                <li>
                  <span>
                    <b>Independent deploys</b> — split Builder and Storefront into micro-frontends
                    with Module Federation.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Lag-free editing</b> — heavy tree computation on Web Workers, working document
                    cached in IndexedDB.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Sub-2s storefronts</b> — targeted rendering and bundle work on
                    conversion-critical pages.
                  </span>
                </li>
                <li>
                  <span>
                    <b>AI in the loop</b> — Claude Code and Copilot for scaffolding, refactors and
                    first-pass review.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="feat-foot">
            {["React", "Next.js", "Module Federation", "Web Workers", "IndexedDB", "Webpack"].map(
              (t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              )
            )}
          </div>
        </article>

        <div className="cards">
          {PROJECTS.map((p, i) => {
            const inner = (
              <>
                <div className="card-top">
                  <div className="card-k mono">{p.kind}</div>
                  {p.url && (
                    <span className="live-tag">
                      <span className="dot" /> Live
                    </span>
                  )}
                </div>
                <h3 className="card-n">{p.name}</h3>
                <p className="card-b">{p.body}</p>
                <div>
                  {p.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.url && <div className="card-go">Visit troven.in →</div>}
              </>
            );

            return p.url ? (
              <a
                className="card live"
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                data-reveal
                data-d={i + 1}
              >
                {inner}
              </a>
            ) : (
              <div className="card" key={p.name} data-reveal data-d={i + 1}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
