const slugify = require("slugify");

const textoOriginal = "¡Quiero viajar a Bélgica & España! 🇪🇦 🇧🇪";

const slug = slugify(textoOriginal, {
  lower: true,
  strict: true,
  locale: "es",
  replacement: "-",
});

console.log(slug);
