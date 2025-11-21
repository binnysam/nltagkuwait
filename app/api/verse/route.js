// app/api/verse/route.js
import * as cheerio from "cheerio";

export async function GET() {
  const url = "https://www.tamil-bible.com/";

  // DEFINING THE BACKUP VERSE
  const fallbackVerse =
    "உன் தேவனாகிய கர்த்தர் உன்னோடே இருக்கிறார்; அவர் வல்லமையுள்ளவர், அவர் இரட்சிப்பார். (செப்பனியா 3:17)";

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 0 }, // currently 0 for testing, change to 60 later
    });

    if (!res.ok) {
      // If the server is down, throw error to jump to the catch block
      throw new Error(`Site returned status ${res.status}`);
    }

    const buffer = await res.arrayBuffer();
    const decoder = new TextDecoder("utf-8");
    const html = decoder.decode(buffer);
    const $ = cheerio.load(html);

    let verseText = "";

    // 1. Find the Header
    const headerEl = $("*:contains('இன்றைய வசனம்')").last();

    if (headerEl.length) {
      // 2. Extract Parent Text
      let fullText = headerEl.parent().text();

      // If parent is too small, grab the whole row
      if (fullText.length < 20) {
        fullText = headerEl.closest("tr").text();
      }

      // 3. Split and Clean
      if (fullText.includes("இன்றைய வசனம்")) {
        const parts = fullText.split("இன்றைய வசனம்");
        verseText = parts[1];
      }
    }

    // Cleanup Logic
    if (verseText) {
      verseText = verseText
        .replace(/இன்றைய வேதவாசிப்பு.*/s, "")
        .replace(/Read More.*/gi, "")
        .replace(/[|&;$%@"<>()+,]/g, "")
        .replace(/\s{2,}/g, " ")
        .trim();
    }

    // --- SAFETY NET 1: EMPTY RESULT ---
    // If scraping logic didn't find text, use fallback
    if (!verseText || verseText.length < 5) {
      console.error("Scraping returned empty. Using fallback verse.");
      return new Response(JSON.stringify({ ok: true, verse: fallbackVerse }), {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
    }

    // SUCCESS
    return new Response(JSON.stringify({ ok: true, verse: verseText }), {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  } catch (err) {
    // --- SAFETY NET 2: CRASH/NETWORK ERROR ---
    console.error("Scraper error:", err);

    // Return the fallback verse instead of a 500 Error
    return new Response(JSON.stringify({ ok: true, verse: fallbackVerse }), {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }
}
