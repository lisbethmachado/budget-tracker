const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const staticFilesToPreCache = [
  "/",
  "/db.js",
  "index.html",
  "/manifest.json",
  "public/icons/icon-192x192.png",
  "public/icons/icon-512x512.png",
  "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0",
  "https://cdn.jsdelivr.net/npm/chart.js@2.8.0"
];