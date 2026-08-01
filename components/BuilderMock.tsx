/**
 * Static illustration of the CommerceEdge builder.
 * Pure CSS animation, so this stays a server component.
 */
export default function BuilderMock() {
  return (
    <div className="mock" aria-hidden>
      <div className="mock-bar">
        <span className="tl" />
        <span className="tl" />
        <span className="tl" />
        <span className="mock-title mono">commerceedge / builder</span>
      </div>

      <div className="mock-body">
        <div className="mock-side">
          <span className="tool act" />
          <span className="tool" />
          <span className="tool" />
          <span className="tool" />
          <span className="tool" />
        </div>

        <div className="mock-canvas">
          <div className="blk blk-1" />
          <div className="blk blk-2">
            <span className="sel">
              <i className="hnd a" />
              <i className="hnd b" />
              <i className="hnd c" />
              <i className="hnd d" />
            </span>
          </div>
          <div className="blk-row">
            <div className="blk blk-3" />
            <div className="blk blk-4" />
          </div>
          <div className="blk blk-5" />
        </div>

        <div className="mock-insp">
          {[
            ["Layout", false],
            ["Spacing", true],
            ["Color", false],
            ["Breakpoint", false],
          ].map(([label, active]) => (
            <div className="ir" key={label as string}>
              <div className="ir-k mono">{label}</div>
              <div className={`ir-v ${active ? "sig" : ""}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="mock-cap mono">Drag → drop → publish. Rendered storefront in under 2s.</div>
    </div>
  );
}
