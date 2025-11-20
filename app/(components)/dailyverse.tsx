"use client";
import React from "react";

export default function DailyVerse() {
  const [verse, setVerse] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [err, setErr] = React.useState(null as string | null);

  React.useEffect(() => {
    let mounted = true;
    fetch("/api/verse")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        if (!data.ok) setErr(data.message || data.error || "No data");
        else setVerse(data.verse);
      })
      .catch((e) => setErr(String(e)))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  //   if (loading) return <div>Loading verse…</div>;
  if (loading)
    return (
      <div className="flex items-center justify-center space-x-2 min-h-screen">
        <div className="h-4 w-4 dark:bg-gray-50  bg-black rounded-full animate-bounce"></div>
        <div className="h-4 w-4 dark:bg-gray-50  bg-black rounded-full animate-bounce [animation-delay:-0.2s]"></div>
        <div className="h-4 w-4 dark:bg-gray-50  bg-black rounded-full animate-bounce [animation-delay:-0.4s]"></div>
      </div>
    );
  if (err) return <div style={{ color: "red" }}>Error: {err}</div>;
  return (
    <div>
      <h3 className="mb-4 headline">📖 Daily Verse</h3>
      <p style={{ whiteSpace: "pre-wrap" }}>{verse}</p>
    </div>
  );
}
