import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import sass from "lume/plugins/sass.ts";
import svgo from "lume/plugins/svgo.ts";
import transform_images from "lume/plugins/transform_images.ts";
import decapCMS from "lume/plugins/decap_cms.ts";

export default function () {
  return (site: Site) => {
    site
      .copy("js")
      .copy("static", ".")
      .filter(
        "getRelatedPosts",
        (postsList, tags) =>
          postsList.filter((post) => {
            for (let tag of tags) {
              if (post.tags.includes(tag)) return post;
            }
          }),
      )
      .use(date())
      .use(esbuild({ target: "es6" }))
      .use(inline())
      .use(metas())
      .use(robots())
      .use(sass())
      .use(svgo())
      .use(transform_images())
      .use(decapCMS());
  };
}
