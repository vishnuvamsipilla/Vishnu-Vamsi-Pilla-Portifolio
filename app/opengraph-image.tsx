import { ImageResponse } from "next/og";

export const alt = "N S Vishnu Vamsi Pilla — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07070B",
          padding: "68px 72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 60,
            width: 700,
            height: 420,
            borderRadius: 9999,
            background: "rgba(67,97,255,0.30)",
            filter: "blur(140px)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              borderRadius: 100,
              border: "1px solid rgba(61,220,151,0.3)",
              background: "rgba(61,220,151,0.08)",
              color: "#3DDC97",
              fontSize: 22,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 9999, background: "#3DDC97", display: "flex" }} />
            Open to roles · Available for freelance
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.03,
            color: "#F6F6F2",
          }}
        >
          <span>I build the tools</span>
          <span>other people build</span>
          <span style={{ color: "#6D8BFF" }}>websites with.</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #22222F",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, color: "#F6F6F2", fontWeight: 600 }}>
              N S Vishnu Vamsi Pilla
            </div>
            <div style={{ fontSize: 22, color: "#8A8A9C", marginTop: 6 }}>
              Full Stack Developer · React, Next.js, Node
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["React", "Next.js", "Node.js"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: 100,
                  border: "1px solid #22222F",
                  color: "#8A8A9C",
                  fontSize: 20,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
