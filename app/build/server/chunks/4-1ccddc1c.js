const load = async () => {
  const forms = {
    "NISP Policy": [
      {
        title: "Innovation and Startup Policy",
        href: "https://iiitdm.ac.in/img/Innovation_Initiatives/IIITDM-NISP-Version-1.2-28Oct2021.pdf"
      },
      {
        title: "MoE National Innovation & Startup Policy",
        href: "https://iiitdm.ac.in/img/Innovation_Initiatives/MoE-Innovation_and_startup_policy_2019.pdf"
      },
      {
        title: "TN Startup Policy",
        href: "https://iiitdm.ac.in/img/Innovation_Initiatives/STARTUP-TN-Policy.pdf"
      }
    ],
    "IPR Policy": [
      {
        title: "Intellectual Property Rights Policy",
        href: "https://iiitdm.ac.in/img/Innovation_Initiatives/IIITDM-IPR-Policy-Version-2-20Apr2022.pdf"
      },
      {
        title: "MoE National Innovation & Startup Policy",
        href: "https://iiitdm.ac.in/img/Innovation_Initiatives/MoE-Innovation_and_startup_policy_2019.pdf"
      }
    ],
    "Innovation Grant and Support": [
      {
        title: "Advance Budget Request Form",
        href: "/docs/Advance_Request_Form.pdf"
      },
      {
        title: "Budget Request Form",
        href: "/docs/Budget_Request_form.pdf"
      },
      {
        title: "Reimbursement Form",
        href: "/docs/Reimbursement_Form.pdf"
      },
      {
        title: "Advance Settlement Form",
        href: "/docs/SA_Tech_Advance_Settlement_Form.pdf"
      },
      {
        title: "Asset Transform Form",
        href: "/docs/SA_Tech_03_ASSET_TRANSFER_FORM.pdf"
      },
      {
        title: "Non Consumable Indent Form",
        href: "/docs/SA_Tech_Non_Consumable_Indent.pdf"
      },
      {
        title: "Temporary Advance Form",
        href: "/docs/SA_Tech_Temporary_Advance_Form.pdf"
      }
    ],
    ARIIA: [
      {
        title: "Certificate of Appreciation",
        href: "https://iiitdm.ac.in/img/Innovation_Initiatives/ARI-U-0455-2020-e-certificate.pdf"
      },
      {
        title: "Certificate of Recognition",
        href: "https://iiitdm.ac.in/img/Innovation_Initiatives/ARI-U-0455-2021.pdf"
      }
    ],
    "Innovative Idea to Reality (I2R) Makerspace": [
      {
        title: "Makerspace usage Form",
        href: "https://docs.google.com/document/d/1r8gTKgbhtiYPMCVVTHUTe97uFcEpFMG-e1pJwtALNEI/edit"
      }
    ]
  };
  return {
    forms
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-73ff97cb.js')).default;
const server_id = "src/routes/forms/+page.server.ts";
const imports = ["_app/immutable/nodes/4.5128c211.js","_app/immutable/chunks/scheduler.af88fea6.js","_app/immutable/chunks/index.3c1d0bd2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Heading.cbbf760d.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-1ccddc1c.js.map
