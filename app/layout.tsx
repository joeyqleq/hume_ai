import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Alice AI - EVI - Next.js Starter",
  description: "A Next.js starter using Hume AI's Empathic Voice Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<head>
<script async defer src="https://tianji.motherfucking.fun/tracker.js" data-website-id="cmf94whfu0k28130at07v8sf2"></script>

  <!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setCookieDomain", "*.alice.p5n.lol"]);
  _paq.push(["setDomains", ["*.alice.p5n.lol","*.alice.p5n.lol","*.hume-79yarzm8z-joeyqleqs-projects.vercel.app","*.humeai-git-main-joeyqleqs-projects.vercel.app"]]);
  _paq.push(["enableCrossDomainLinking"]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matomo.motherfucking.fun/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '7']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img referrerpolicy="no-referrer-when-downgrade" src="//matomo.motherfucking.fun/matomo.php?idsite=7&amp;rec=1" style="border:0;" alt="" /></p></noscript>
<!-- End Matomo Code -->

</head>
      
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "flex flex-col min-h-screen"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Toaster position="top-center" richColors={true} />
        </ThemeProvider>
      </body>
    </html>
  );
}
