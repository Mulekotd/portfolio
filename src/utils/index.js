export function getAge(birthday) {
  var birthday = new Date("May 20, 2005 00:00:00");
  var year = new Date().getFullYear() - birthday.getFullYear();
  var month = new Date().getMonth() - birthday.getMonth();

  if (month < 0 || (month === 0 && new Date().getDate() < birthday.getDate())) {
    year--;
  }

  return year;
}

export const greetingMessage = () => {
  let h = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    hour12: false,
  });

  if (h >= 0 && h <= 5) {
    return "Boa madrugada";
  } else if (h >= 6 && h < 12) {
    return "Bom dia";
  } else if (h >= 12 && h < 18) {
    return "Boa tarde";
  } else if (h >= 18 && h <= 23) {
    return "Boa noite";
  }
};

// static images handling
export const perfil = new URL("/src/assets/images/perfil.jpg", import.meta.url)
  .href;

export const etc1 = new URL(
  "/src/assets/images/semana_etc (1).jpg",
  import.meta.url
).href;

export const etc2 = new URL(
  "/src/assets/images/semana_etc (2).jpg",
  import.meta.url
).href;

export const vitec1 = new URL(
  "/src/assets/images/vitrines_tec (1).jpg",
  import.meta.url
).href;

export const vitec2 = new URL(
  "/src/assets/images/vitrines_tec (2).jpg",
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
