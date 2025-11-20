// app/api/verse/route.js
import * as cheerio from "cheerio";

export async function GET() {
  const url = "https://www.tamil-bible.com/";

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Next.js scraper)",
        Accept: "text/html,application/xhtml+xml",
      },
      // Use Next.js revalidation for caching instead of AbortController
      next: { revalidate: 60 }, // Re-fetch data every 60 seconds
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ ok: false, status: res.status }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    let verseText = "";

    // --- NEW ROBUST SELECTORS ---

    // Strategy 1: Find the heading <b> and get the next <font> tag's text
    // This is precise. Structure: <b>Heading</b><font>Verse</font>
    const heading = $("#mr-right-pane b:contains('இன்றைய வசனம்.')");
    if (heading.length) {
      verseText = heading.next("font").text().trim();
    }

    // Strategy 2: Try finding a font tag that's a direct child of center
    if (!verseText) {
      verseText = $("#mr-right-pane table font center > font").text().trim();
    }

    // Strategy 3: Use your original selector as a fallback
    if (!verseText) {
      verseText = $("#mr-right-pane table font center font").text().trim();
    }

    // Strategy 4: Clean up the text if it grabbed too much
    // (e.g., if it got the heading and the verse in one go)
    if (verseText.includes("இன்றைய வசனம்.")) {
      verseText = verseText
        .split("இன்றைய வசனம்.")[1] // Get text *after* the heading
        .split("இன்றைய வேதவாசிப்பு பகுதி.")[0] // Get text *before* the next section
        .trim();
    }

    // --- END OF NEW SELECTORS ---

    // Final cleanup of any remaining whitespace
    verseText = verseText.replace(/\s{2,}/g, " ").trim();

    if (!verseText) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "No match found. Selectors may be broken.",
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return the successful response
    return new Response(JSON.stringify({ ok: true, verse: verseText }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Let Next.js handle caching via the fetch `revalidate` option
      },
    });
  } catch (err) {
    console.error("Scrape error:", err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
