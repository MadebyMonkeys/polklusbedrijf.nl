import lume from "lume/mod.ts";
import plugins from "./_plugins.ts";

const site = lume({
  src: "_src",
  location: new URL("https://polklusbedrijf.nl")
});

site.use(plugins());

export default site;
