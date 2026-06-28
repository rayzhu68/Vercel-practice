export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        background: "#f6f7f9",
        color: "#111827",
      }}
    >
      <section
        style={{
          padding: 32,
          border: "1px solid #d8dee9",
          borderRadius: 8,
          background: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 32 }}>
          Hello from Vercel practice
        </h1>
        <p style={{ marginTop: 12, color: "#4b5563" }}>
          If you can see this, Root Directory = web is working.
        </p>
      </section>
    </main>
  );
}
