export const greetingMessage = (language = "pt-BR") => {
  const normalizedLanguage = language === "en" ? "en-US" : language;

  let hour = Number(
    new Date().toLocaleTimeString(normalizedLanguage, {
      hour: "numeric",
      hour12: false,
    })
  );

  if (hour >= 0 && hour <= 3) {
    return normalizedLanguage === "en-US" ? "Good early morning" : "Boa madrugada";
  } else if (hour >= 4 && hour < 12) {
    return normalizedLanguage === "en-US" ? "Good morning" : "Bom dia";
  } else if (hour >= 12 && hour < 18) {
    return normalizedLanguage === "en-US" ? "Good afternoon" : "Boa tarde";
  }

  if (hour >= 18 && hour <= 23) {
    return normalizedLanguage === "en-US" ? "Good evening" : "Boa noite";
  }

  return normalizedLanguage === "en-US" ? "Hello" : "Ola";
};

// Static images handling.
export const profilePicture = new URL(
  "/src/assets/images/perfil.webp",
  import.meta.url
).href;

export const etc1 = new URL(
  "/src/assets/images/semana_etc_1.webp",
  import.meta.url
).href;

export const etc2 = new URL(
  "/src/assets/images/semana_etc_2.webp",
  import.meta.url
).href;

export const vitec1 = new URL(
  "/src/assets/images/vitrines_tec_1.webp",
  import.meta.url
).href;

export const vitec2 = new URL(
  "/src/assets/images/vitrines_tec_2.webp",
  import.meta.url
).href;

export const ember_chat = new URL(
  "/src/assets/images/emberchat.webp",
  import.meta.url
).href;

export const mostra = new URL(
  "/src/assets/images/mostra_ifrj.webp",
  import.meta.url
).href;

export const last = new URL("/src/assets/images/last.webp", import.meta.url)
  .href;

export const selos = new URL(
  "/src/assets/images/selos-agro.webp",
  import.meta.url
).href;

// static download handling
export const etc = new URL(
  "/src/assets/downloads/Certificado Exposição de Jogos.pdf",
  import.meta.url
).href;

export const vitec = new URL(
  "/src/assets/downloads/certificado-artigo-821610-9maoY.pdf",
  import.meta.url
).href;

export const developmentInfo = [
  {
      titleKey: "development.etcTitle",
      descriptionKey: "development.etcDescription",
      href: etc,
      images: [
          { alt: "etc1", src: etc1 },
          { alt: "etc2", src: etc2 }
      ]
  },
  {
      titleKey: "development.mostraTitle",
      descriptionKey: "development.mostraDescription",
      href: vitec,
      images: [
          { alt: "vitec1", src: vitec1 },
          { alt: "vitec2", src: vitec2 }
      ]
  }
];

export const sites = [
  {
    image: {
      alt: "Ember Chat",
      src: ember_chat
    },
    url: "https://emberchat.app",
    title: "Ember Chat - Bate Papo Temporario"
  },
  {
    image: {
      alt: "Mostra IFRJ",
      src: mostra
    },
    url: "https://mostraifrjduquedecaxias.labculturadigital.com.br/",
    title: "#Mostra IFRJ"
  },
  {
    image: {
      alt: "Last 2",
      src: last
    },
    url: "https://app.last.app.br/dashboard/",
    title: "Projeto LAST 2"
  },
  {
    image: {
      alt: "Selos do Agro",
      src: selos
    },
    url: "https://www-dev.selosdoagro.com/",
    title: "Selos do Agro"
  }
];
