import lume from "lume/mod.ts";
import plugins from "./_plugins.ts";

const site = lume({
  src: "_src",
  location: new URL("https://polklusbedrijf.nl")
});

site.use(plugins());

// **✅ Cleanup script na build**
site.addEventListener("afterBuild", async () => {
  const buildPath = site.dest(); // Outputmap (_site)
  const usedImages = new Set();

  // 📌 **1. Functie om afbeeldingen uit tekst te halen**
  function extractImages(text: string) {
    const matches = text.match(/(["'])([^"']+\.(webp|jpg|jpeg|png))\1/g);
    if (matches) {
      matches.forEach((match) => {
        const imageUrl = match.replace(/["']/g, "").trim();
        usedImages.add(imageUrl);
      });
    }
  }

  // 📌 **2. Recursief ALLEEN `_src/` scannen**
  async function scanSrcDirectory(directory: string) {
    for await (const entry of Deno.readDir(directory)) {
      const filePath = `${directory}/${entry.name}`;
      
      if (entry.isDirectory) {
        await scanSrcDirectory(filePath); // Recursief verder zoeken in `_src/`
      } else if (entry.isFile) {
        const content = await Deno.readTextFile(filePath);
        extractImages(content);
      }
    }
  }

  await scanSrcDirectory("_src"); // 🔍 Start de scan in `_src/`

  // 📌 **3. Verwijder ongebruikte afbeeldingen uit `/img/` in `_site/`**
  const imgPath = `${buildPath}/img`;

  try {
    for await (const file of Deno.readDir(imgPath)) {
      const filePath = `/img/${file.name}`;
      if (!usedImages.has(filePath)) {
        console.log(`🗑️ Verwijderen: ${filePath}`);
        await Deno.remove(`${imgPath}/${file.name}`);
      }
    }
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      console.log("⚠️ Geen 'img' map gevonden, overslaan...");
    } else {
      throw err;
    }
  }
});

// **✅ Exporteer direct de `site` instantie**
export default site;

