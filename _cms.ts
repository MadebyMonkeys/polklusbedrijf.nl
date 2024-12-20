import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.upload("images", "src:img");

// Define the testimonials collection
cms.document({
  name: "Settings",
  store: "src:_data/site.yaml",
  fields: [
    { name: "name", label: "Naam", type: "text" },
    { name: "logo", label: "Logo", type: "file", accept: [".svg", ".png"] },
    { name: "kvk", label: "Kvk nummer", type: "text" },
    {
      name: "contact",
      label: "Contact gegevens",
      type: "object",
      fields: [
        { name: "phone", label: "Telefoon nummer", type: "text" },
        { name: "email", label: "Email", type: "email" },
      ],
    },
    {
      name: "address",
      label: "Address",
      type: "object-list",
      fields: [
        { name: "street", label: "Straat", type: "text" },
        { name: "zipcode", label: "Postcode", type: "text" },
        { name: "city", label: "Stad", type: "text" },
      ],
    },
    {
      name: "socials",
      label: "Socials",
      type: "object-list",
      fields: [
        { name: "name", label: "name", type: "text" },
        { name: "icon", label: "Icon", type: "text" },
        { name: "url", label: "Url", type: "url" },
      ],
    },
  ],
});

cms.document({
  name: "Homepage",
  store: "src:index.vto",
  fields: [
    {
      name: "layout",
      label: "Layout",
      type: "hidden",
      value: "layouts/page.vto",
    },
    {
      name: "templateEngine",
      label: "Template engine",
      type: "hidden",
      value: "[vto,md]",
    },
    {
      name: "hasCarousel",
      label: "has Carousel",
      type: "checkbox",
    },
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "metas",
      label: "SEO details",
      type: "object",
      fields: [
        { name: "title", label: "SEO Title", type: "text" },
        { name: "description", label: "SEO Description", type: "textarea" },
      ],
    },
    {
      name: "hero_section",
      label: "Hero Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
        { name: "body", label: "Body", type: "textarea" },
      ],
    },
    {
      name: "portfolio_section",
      label: "Project Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
        {
          name: "button",
          label: "Button",
          type: "object",
          fields: [
            { name: "title", label: "Text", type: "text" },
            { name: "url", label: "link", type: "text" },
          ],
        },
      ],
    },
    {
      name: "about_section",
      label: "About Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
        { name: "body", label: "Body", type: "textarea" },
        {
          name: "list",
          label: "Option",
          type: "object-list",
          fields: [
            "title: text",
          ],
        },
        {
          name: "button",
          label: "Button",
          type: "object",
          fields: [
            { name: "title", label: "Text", type: "text" },
            { name: "url", label: "link", type: "text" },
          ],
        },
      ],
    },
    {
      name: "services_section",
      label: "Diensten Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
        {
          name: "button",
          label: "Button",
          type: "object",
          fields: [
            { name: "title", label: "Text", type: "text" },
            { name: "url", label: "link", type: "text" },
          ],
        },
      ],
    },
    {
      name: "testimonials_section",
      label: "Review Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
      ],
    },
  ],
});

cms.document({
  name: "About pagina",
  store: "src:about.vto",
  fields: [
    {
      name: "hasCarousel",
      label: "has Carousel",
      type: "checkbox",
    },
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "metas",
      label: "SEO details",
      type: "object",
      fields: [
        { name: "title", label: "SEO Title", type: "text" },
        { name: "description", label: "SEO Description", type: "textarea" },
      ],
    },
    {
      name: "about_section",
      label: "About Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
        { name: "body", label: "Body", type: "textarea" },
        { name: "image", label: "Image", type: "file" },
      ],
    },
    {
      name: "testimonials_section",
      label: "Review Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
      ],
    },
  ],
});

cms.document({
  name: "Diensten pagina",
  store: "src:diensten.vto",
  fields: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "metas",
      label: "SEO details",
      type: "object",
      fields: [
        { name: "title", label: "SEO Title", type: "text" },
        { name: "description", label: "SEO Description", type: "textarea" },
      ],
    },
    {
      name: "services_section",
      label: "Diensten Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
      ],
    },
  ],
});

cms.document({
  name: "Projecten pagina",
  store: "src:projecten.vto",
  fields: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "metas",
      label: "SEO details",
      type: "object",
      fields: [
        { name: "title", label: "SEO Title", type: "text" },
        { name: "description", label: "SEO Description", type: "textarea" },
      ],
    },
    {
      name: "projecten_section",
      label: "Projecten Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
      ],
    },
  ],
});

cms.document({
  name: "Contact pagina",
  store: "src:contact.vto",
  fields: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "metas",
      label: "SEO details",
      type: "object",
      fields: [
        { name: "title", label: "SEO Title", type: "text" },
        { name: "description", label: "SEO Description", type: "textarea" },
      ],
    },
    {
      name: "contact_section",
      label: "Contact Sectie",
      type: "object",
      fields: [
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
        { name: "body", label: "Body", type: "textarea" },
      ],
    },
  ],
});

cms.document({
  name: "Algemene voorwaarden pagina",
  store: "src:algemene-voorwaarden.md",
  fields: [
    {
      name: "layout",
      label: "Layout",
      type: "hidden",
      value: "layouts/algemene-voorwaarden.vto",
    },
    {
      name: "templateEngine",
      label: "Template engine",
      type: "hidden",
      value: "[vto,md]",
    },
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "metas",
      label: "SEO details",
      type: "object",
      fields: [
        { name: "title", label: "SEO Title", type: "text" },
        { name: "description", label: "SEO Description", type: "textarea" },
      ],
    },
    { name: "content", label: "Body", type: "markdown" },
  ],
});

cms.collection({
  name: "projecten",
  store: "src:projecten/*.md",
  fields: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "text" },
    {
      name: "metas",
      label: "SEO details",
      type: "object",
      fields: [
        { name: "title", label: "SEO Title", type: "text" },
        { name: "description", label: "SEO Description", type: "textarea" },
      ],
    },
    {
      name: "tags",
      label: "Tags",
      type: "list",
      fields: [
        { name: "tag", label: "Tag", type: "text" },
      ],
    },
    { name: "year", label: "Year", type: "text" },
    { name: "content", label: "Content", type: "markdown" },
    {
      name: "image",
      label: "Cover Image",
      type: "file",
      accept: [".jpg", ".jpeg", ".png"],
    },
    {
      name: "images",
      label: "Gallery Images",
      type: "object-list",
      fields: [
        { name: "alt", label: "Image Title", type: "text" },
        {
          name: "path",
          label: "Image File",
          type: "file",
          accept: [".jpg", ".jpeg", ".png"],
        },
      ],
    },
  ],
});

cms.collection({
  name: "diensten",
  store: "src:diensten/*.md",
  fields: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "text" },
    {
      name: "metas",
      label: "SEO details",
      type: "object",
      fields: [
        { name: "title", label: "SEO Title", type: "text" },
        { name: "description", label: "SEO Description", type: "textarea" },
      ],
    },
    { name: "content", label: "Content", type: "markdown" },
    {
      name: "image",
      label: "Cover Image",
      type: "file",
      accept: [".jpg", ".jpeg", ".png"],
    },
  ],
});

// Define the testimonials collection
cms.document({
  name: "testimonials",
  store: "src:_data/testimonials.yml",
  fields: [
    {
      name: "testimonials",
      label: "testimonials",
      type: "object-list",
      fields: [
        { name: "name", label: "Naam", type: "text" },
        { name: "body", label: "Body", type: "textarea" },
      ],
    },
  ],
});

export default cms;
