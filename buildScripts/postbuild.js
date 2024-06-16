const fs = require('fs');

// For some reason next-sitemap copies sitemaps and robots.txt from public BEFORE generating them
// so public ends up having the correct sitemaps but out ends up with outdated sitemaps
// so this script will copy robots.txt and sitemap*.xml from public to out
// bash scripts make it terminal dependent since pwsh doesnt have the cp or mv

fs.readdirSync('./public').forEach(file => {
    const sitemapRegex = new RegExp(/^sitemap.*\.xml$/);
    if(file === 'robots.txt' || sitemapRegex.test(file)) {
        fs.copyFileSync(`./public/${file}`, `./out/${file}`);
        console.log(`Copied: ./public/${file} -> ./out/${file}`);
    }
});
