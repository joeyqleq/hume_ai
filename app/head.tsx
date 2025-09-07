// app/head.tsx
export default function Head() {
  return (
    <>
      {/* Tianji tracker */}
      <script
        async
        defer
        src="https://tianji.motherfucking.fun/tracker.js"
        data-website-id="cmf94whfu0k28130at07v8sf2"
      />

      {/* Matomo tracker */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var _paq = window._paq = window._paq || [];
            _paq.push(["setCookieDomain", "*.alice.p5n.lol"]);
            _paq.push(["setDomains", [
              "*.alice.p5n.lol",
              "*.hume-79yarzm8z-joeyqleqs-projects.vercel.app",
              "*.humeai-git-main-joeyqleqs-projects.vercel.app"
            ]]);
            _paq.push(["enableCrossDomainLinking"]);
            _paq.push(["trackPageView"]);
            _paq.push(["enableLinkTracking"]);
            (function() {
              var u = "//matomo.motherfucking.fun/";
              _paq.push(["setTrackerUrl", u+"matomo.php"]);
              _paq.push(["setSiteId", "7"]);
              var d = document, g = d.createElement("script"), s = d.getElementsByTagName("script")[0];
              g.async = true; g.src = u+"matomo.js"; s.parentNode.insertBefore(g,s);
            })();
          `,
        }}
      />

      {/* NoScript fallback */}
      <noscript>
        <p>
          <img
            referrerPolicy="no-referrer-when-downgrade"
            src="//matomo.motherfucking.fun/matomo.php?idsite=7&amp;rec=1"
            style={{ border: 0 }}
            alt=""
          />
        </p>
      </noscript>
    </>
  );
}
