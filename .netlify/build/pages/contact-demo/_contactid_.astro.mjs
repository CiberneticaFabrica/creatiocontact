import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_Cvgj1JaP.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CwWj7yj1.mjs';
import 'clsx';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://creatiocontact.com");
const $$ContactInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  const { contactId = "60d45129-99d1-44a9-8c74-1d0b924795f4", includePhoto = true, editable = true } = Astro2.props;
  async function getContactInfo(contactId2, includePhoto2) {
    try {
      const requestBody = {
        contact_id: contactId2,
        include_photo: includePhoto2
      };
      const response = await fetch("https://h9hl7f2ijf.execute-api.us-east-1.amazonaws.com/dev/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error2) {
      console.error("Error fetching contact info:", error2);
      return null;
    }
  }
  let contactData = null;
  let isLoading = true;
  let error = null;
  try {
    contactData = await getContactInfo(contactId, includePhoto);
    isLoading = false;
  } catch (err) {
    error = err;
    isLoading = false;
  }
  return renderTemplate`${maybeRenderHead()}<div class="contact-info-container" data-astro-cid-7oabtla5> ${isLoading ? renderTemplate`<div class="loading-state" data-astro-cid-7oabtla5> <div class="loading-spinner" data-astro-cid-7oabtla5></div> <h3 data-astro-cid-7oabtla5>Cargando información del contacto...</h3> <p data-astro-cid-7oabtla5>Por favor espera mientras obtenemos los datos del CRM Creatio.</p> </div>` : error ? renderTemplate`<div class="error-state" data-astro-cid-7oabtla5> <div class="error-icon" data-astro-cid-7oabtla5>⚠️</div> <h3 data-astro-cid-7oabtla5>Error al cargar la información del contacto</h3> <p data-astro-cid-7oabtla5>Hubo un error al obtener los datos del contacto: ${error.message}</p> </div>` : contactData && contactData.success ? renderTemplate`<div class="contact-card" data-astro-cid-7oabtla5> <!-- Header con foto y nombre --> <div class="contact-header" data-astro-cid-7oabtla5> <div class="contact-avatar" data-astro-cid-7oabtla5> ${contactData.photo ? renderTemplate`<img${addAttribute(contactData.photo, "src")} alt="Contact Photo" class="avatar-image" data-astro-cid-7oabtla5>` : renderTemplate`<div class="avatar-placeholder" data-astro-cid-7oabtla5> ${contactData.data.GivenName?.charAt(0) || "?"} ${contactData.data.Surname?.charAt(0) || ""} </div>`} </div> <div class="contact-basic-info" data-astro-cid-7oabtla5> <h2 class="contact-name" data-astro-cid-7oabtla5> ${contactData.data.GivenName} ${contactData.data.MiddleName} ${contactData.data.Surname} </h2> <p class="contact-title" data-astro-cid-7oabtla5>${contactData.data.JobTitle}</p> <div class="contact-status" data-astro-cid-7oabtla5> <span${addAttribute(`status-badge ${contactData.data.Confirmed ? "confirmed" : "pending"}`, "class")} data-astro-cid-7oabtla5> ${contactData.data.Confirmed ? "\u2713 Confirmed" : "\u23F3 Pending"} </span> <span class="completeness" data-astro-cid-7oabtla5>Completeness: ${contactData.data.Completeness}%</span> </div> </div> </div> <!-- Información de contacto --> <div class="contact-details" data-astro-cid-7oabtla5> <div class="detail-section" data-astro-cid-7oabtla5> <h3 data-astro-cid-7oabtla5>Información de Contacto</h3> <div class="detail-grid" data-astro-cid-7oabtla5> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>📧 Email:</span> ${editable ? renderTemplate`<input type="email" class="editable-field"${addAttribute(contactData.data.Email, "value")} data-field="Email" data-astro-cid-7oabtla5>` : renderTemplate`<span class="detail-value" data-astro-cid-7oabtla5>${contactData.data.Email}</span>`} </div> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>📱 Mobile:</span> ${editable ? renderTemplate`<input type="tel" class="editable-field"${addAttribute(contactData.data.MobilePhone || "", "value")} data-field="MobilePhone" placeholder="Enter mobile phone" data-astro-cid-7oabtla5>` : renderTemplate`<span class="detail-value" data-astro-cid-7oabtla5>${contactData.data.MobilePhone || "Not provided"}</span>`} </div> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>☎️ Phone:</span> ${editable ? renderTemplate`<input type="tel" class="editable-field"${addAttribute(contactData.data.Phone || "", "value")} data-field="Phone" placeholder="Enter phone number" data-astro-cid-7oabtla5>` : renderTemplate`<span class="detail-value" data-astro-cid-7oabtla5>${contactData.data.Phone || "Not provided"}</span>`} </div> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>🏠 Address:</span> ${editable ? renderTemplate`<input type="text" class="editable-field"${addAttribute(contactData.data.Address || "", "value")} data-field="Address" placeholder="Enter address" data-astro-cid-7oabtla5>` : renderTemplate`<span class="detail-value" data-astro-cid-7oabtla5>${contactData.data.Address || "Not provided"}</span>`} </div> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>💼 Job Title:</span> ${editable ? renderTemplate`<input type="text" class="editable-field"${addAttribute(contactData.data.JobTitle || "", "value")} data-field="JobTitle" placeholder="Enter job title" data-astro-cid-7oabtla5>` : renderTemplate`<span class="detail-value" data-astro-cid-7oabtla5>${contactData.data.JobTitle || "Not specified"}</span>`} </div> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>🎂 Birth Date:</span> ${editable ? renderTemplate`<input type="date" class="editable-field"${addAttribute(contactData.data.BirthDate ? contactData.data.BirthDate.split("T")[0] : "", "value")} data-field="BirthDate" data-astro-cid-7oabtla5>` : renderTemplate`<span class="detail-value" data-astro-cid-7oabtla5> ${contactData.data.BirthDate ? new Date(contactData.data.BirthDate).toLocaleDateString() : "Not provided"} </span>`} </div> </div> </div> <!-- Información adicional --> <div class="detail-section" data-astro-cid-7oabtla5> <h3 data-astro-cid-7oabtla5>Información Adicional</h3> <div class="detail-grid" data-astro-cid-7oabtla5> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>👤 Age:</span> <span class="detail-value" data-astro-cid-7oabtla5>${contactData.data.Age || "Not specified"}</span> </div> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>📧 Email Confirmed:</span> <span class="detail-value" data-astro-cid-7oabtla5> <span${addAttribute(`status-indicator ${contactData.data.IsEmailConfirmed ? "confirmed" : "not-confirmed"}`, "class")} data-astro-cid-7oabtla5> ${contactData.data.IsEmailConfirmed ? "\u2713 Yes" : "\u2717 No"} </span> </span> </div> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>🆔 ID Number:</span> <span class="detail-value" data-astro-cid-7oabtla5>${contactData.data.labNumCedula || "Not provided"}</span> </div> <div class="detail-item" data-astro-cid-7oabtla5> <span class="detail-label" data-astro-cid-7oabtla5>📅 ID Expiry:</span> <span class="detail-value" data-astro-cid-7oabtla5> ${contactData.data.labVencimientoCedula ? new Date(contactData.data.labVencimientoCedula).toLocaleDateString() : "Not provided"} </span> </div> </div> </div> <!-- Preferencias de comunicación --> <div class="detail-section" data-astro-cid-7oabtla5> <h3 data-astro-cid-7oabtla5>Preferencias de Comunicación</h3> <div class="preferences-grid" data-astro-cid-7oabtla5> <div class="preference-item" data-astro-cid-7oabtla5> <span class="preference-label" data-astro-cid-7oabtla5>📧 Email</span> <span${addAttribute(`preference-status ${contactData.data.DoNotUseEmail ? "disabled" : "enabled"}`, "class")} data-astro-cid-7oabtla5> ${contactData.data.DoNotUseEmail ? "\u2717 Disabled" : "\u2713 Enabled"} </span> </div> <div class="preference-item" data-astro-cid-7oabtla5> <span class="preference-label" data-astro-cid-7oabtla5>📞 Calls</span> <span${addAttribute(`preference-status ${contactData.data.DoNotUseCall ? "disabled" : "enabled"}`, "class")} data-astro-cid-7oabtla5> ${contactData.data.DoNotUseCall ? "\u2717 Disabled" : "\u2713 Enabled"} </span> </div> <div class="preference-item" data-astro-cid-7oabtla5> <span class="preference-label" data-astro-cid-7oabtla5>📱 SMS</span> <span${addAttribute(`preference-status ${contactData.data.DoNotUseSms ? "disabled" : "enabled"}`, "class")} data-astro-cid-7oabtla5> ${contactData.data.DoNotUseSms ? "\u2717 Disabled" : "\u2713 Enabled"} </span> </div> <div class="preference-item" data-astro-cid-7oabtla5> <span class="preference-label" data-astro-cid-7oabtla5>📬 Mail</span> <span${addAttribute(`preference-status ${contactData.data.DoNotUseMail ? "disabled" : "enabled"}`, "class")} data-astro-cid-7oabtla5> ${contactData.data.DoNotUseMail ? "\u2717 Disabled" : "\u2713 Enabled"} </span> </div> </div> </div> <!-- Redes sociales --> ${(contactData.data.Skype || contactData.data.Facebook || contactData.data.LinkedIn || contactData.data.Twitter) && renderTemplate`<div class="detail-section" data-astro-cid-7oabtla5> <h3 data-astro-cid-7oabtla5>Redes Sociales</h3> <div class="social-links" data-astro-cid-7oabtla5> ${contactData.data.Skype && renderTemplate`<a${addAttribute(`skype:${contactData.data.Skype}`, "href")} class="social-link skype" data-astro-cid-7oabtla5>
💬 Skype: ${contactData.data.Skype} </a>`} ${contactData.data.Facebook && renderTemplate`<a${addAttribute(contactData.data.Facebook, "href")} class="social-link facebook" target="_blank" rel="noopener noreferrer" data-astro-cid-7oabtla5>
📘 Facebook
</a>`} ${contactData.data.LinkedIn && renderTemplate`<a${addAttribute(contactData.data.LinkedIn, "href")} class="social-link linkedin" target="_blank" rel="noopener noreferrer" data-astro-cid-7oabtla5>
💼 LinkedIn
</a>`} ${contactData.data.Twitter && renderTemplate`<a${addAttribute(contactData.data.Twitter, "href")} class="social-link twitter" target="_blank" rel="noopener noreferrer" data-astro-cid-7oabtla5>
🐦 Twitter
</a>`} </div> </div>`} <!-- Metadatos --> <div class="metadata" data-astro-cid-7oabtla5> <p class="last-updated" data-astro-cid-7oabtla5>
Última actualización: ${new Date(contactData.data.ModifiedOn).toLocaleString()} </p> <p class="fetched-at" data-astro-cid-7oabtla5>
Datos obtenidos: ${new Date(contactData.fetched_at).toLocaleString()} </p> </div> </div> <!-- Botones de acción si es editable --> ${editable && renderTemplate`<div class="action-buttons" data-astro-cid-7oabtla5> <button type="button" class="btn btn-secondary" id="cancelBtn" data-astro-cid-7oabtla5>
Cancelar
</button> <button type="button" class="btn btn-primary" id="saveBtn" data-astro-cid-7oabtla5>
Guardar Cambios
</button> </div>`} </div>` : renderTemplate`<div class="error-state" data-astro-cid-7oabtla5> <div class="error-icon" data-astro-cid-7oabtla5>⚠️</div> <h3 data-astro-cid-7oabtla5>No se pudo cargar la información del contacto</h3> <p data-astro-cid-7oabtla5>Hubo un error al obtener los datos del contacto. Por favor intenta de nuevo más tarde.</p> </div>`} </div>  `;
}, "C:/Users/Usuario/Desktop/Proyectos/ceatiocontact/creatiocontact/src/components/ContactInfo.astro", void 0);

const $$Astro = createAstro("https://creatiocontact.com");
const $$contactId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$contactId;
  const { contactId } = Astro2.params;
  if (!contactId) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Contact Information` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "ContactInfo", $$ContactInfo, { "contactId": contactId, "includePhoto": true, "editable": true })} </main> ` })}`;
}, "C:/Users/Usuario/Desktop/Proyectos/ceatiocontact/creatiocontact/src/pages/contact-demo/[contactId].astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/Proyectos/ceatiocontact/creatiocontact/src/pages/contact-demo/[contactId].astro";
const $$url = "/contact-demo/[contactId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$contactId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
