/* eslint-disable */
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.lenkadesign.cz";
const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "src", "data");
const OUT = path.join(ROOT, "public", "sitemap.xml");

const read = (name) => JSON.parse(fs.readFileSync(path.join(DATA, name), "utf8"));

const blog = read("blogData.json");
const services = read("services.json");
const portfolio = read("portfolioData.json");
const galerie = read("GalerieData.json");
const web = read("webData.json");

const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/o-nas", priority: "0.8", changefreq: "monthly" },
  { loc: "/nase-sluzby", priority: "0.9", changefreq: "monthly" },
  { loc: "/portfolio", priority: "0.9", changefreq: "weekly" },
  { loc: "/fotogalerie", priority: "0.8", changefreq: "monthly" },
  { loc: "/blog", priority: "0.9", changefreq: "weekly" },
  { loc: "/kontakt", priority: "0.8", changefreq: "yearly" },
  { loc: "/cenik", priority: "0.7", changefreq: "monthly" },
  { loc: "/web-a-grafika", priority: "0.6", changefreq: "monthly" },
  { loc: "/podminky-a-pravidla", priority: "0.3", changefreq: "yearly" },
  { loc: "/zasady-obchodnich-udaju", priority: "0.3", changefreq: "yearly" },
];

const urls = [];

for (const p of staticPages) {
  urls.push({ loc: SITE_URL + p.loc, lastmod: today, changefreq: p.changefreq, priority: p.priority });
}

for (const post of blog) {
  if (!post.link) continue;
  const lastmod = post.date ? new Date(post.date).toISOString().split("T")[0] : today;
  urls.push({
    loc: `${SITE_URL}/blog/${post.link}`,
    lastmod,
    changefreq: "monthly",
    priority: "0.8",
    image: post.coverImage || post.image,
  });
}

for (const s of services) {
  if (!s.nav) continue;
  urls.push({
    loc: `${SITE_URL}/nase-sluzby/${s.nav}`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.8",
    image: s.image,
  });
}

for (const p of portfolio) {
  if (!p.nav) continue;
  urls.push({
    loc: `${SITE_URL}/portfolio/${p.nav}`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.7",
    image: (p.gallery && p.gallery[0]) || p.image,
  });
}

for (const g of galerie) {
  if (!g.link) continue;
  urls.push({
    loc: `${SITE_URL}/fotogalerie/${g.link}`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.6",
    image: (g.gallery && g.gallery[0]) || g.image,
  });
}

for (const w of web) {
  if (!w.nav) continue;
  urls.push({
    loc: `${SITE_URL}/web-a-grafika/${w.nav}`,
    lastmod: today,
    changefreq: "yearly",
    priority: "0.5",
  });
}

const escape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls
  .map((u) => {
    const img = u.image
      ? `\n    <image:image><image:loc>${escape(SITE_URL + u.image)}</image:loc></image:image>`
      : "";
    return `  <url>
    <loc>${escape(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${img}
  </url>`;
  })
  .join("\n")}
</urlset>
`;

fs.writeFileSync(OUT, xml, "utf8");
console.log(`✓ sitemap.xml: ${urls.length} URLs → ${OUT}`);
