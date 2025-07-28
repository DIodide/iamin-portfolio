import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ibraheem Amin - Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)",
            opacity: 0.1,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              background:
                "linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 20px 0",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Ibraheem Amin
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "32px",
              color: "#94a3b8",
              margin: "0 0 40px 0",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Computer Science Student at Princeton University
          </p>

          {/* Tech stack badges */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Next.js", "TypeScript", "Java", "Python", "AI/ML"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: "20px",
                    color: "#3b82f6",
                    fontSize: "18px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* Bottom accent */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "200px",
              height: "4px",
              background:
                "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
