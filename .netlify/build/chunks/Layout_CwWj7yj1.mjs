import { c as createAstro, a as createComponent, b as addAttribute, e as renderHead, f as renderSlot, r as renderTemplate } from './astro/server_Cvgj1JaP.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                               */

const $$Astro = createAstro("https://creatiocontact.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Formulario de contacto simple con Astro"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Usuario/Desktop/Proyectos/ceatiocontact/creatiocontact/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
