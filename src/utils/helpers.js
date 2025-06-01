export function getAge() {
  let birthday = new Date("May 20, 2005 00:00:00");
  let year = new Date().getFullYear() - birthday.getFullYear();
  let month = new Date().getMonth() - birthday.getMonth();

  if (month < 0 || (month === 0 && new Date().getDate() < birthday.getDate())) {
    year--;
  }

  return year;
}

export const greetingMessage = () => {
  let time = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    hour12: false,
  });

  if (time >= 0 && time <= 5) {
    return "Boa madrugada";
  } else if (time >= 6 && time < 12) {
    return "Bom dia";
  } else if (time >= 12 && time < 18) {
    return "Boa tarde";
  } else if (time >= 18 && time <= 23) {
    return "Boa noite";
  }
};

// static images handling
export const profilePicture = new URL(
  "/src/assets/images/perfil.jpg",
  import.meta.url
).href;

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

export const parrotcloud = new URL(
  "/src/assets/images/parrotcloud.png",
  import.meta.url
).href;

export const mostra = new URL(
  "/src/assets/images/mostra_ifrj.png",
  import.meta.url
).href;

export const last = new URL("/src/assets/images/last.png", import.meta.url)
  .href;

export const excelGraphicx = new URL(
  "/src/assets/images/excelgraphicx.gif",
  import.meta.url
).href;

export const selos = new URL(
  "/src/assets/images/selos-agro.png",
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
      title: "Semana de Educação, Tecnologia, Ciência e Cultura",
      description: "Dentro do IFRJ, participei de eventos que moldaram de diversas maneiras meu caráter sendo um desses a semana ETC onde desempenhei o papel de palestrante e monitor de uma sala temática, aberta ao público externo, de jogos desenvolvidos no âmbito da instituição.",
      href: etc,
      images: [
          { alt: "etc1", src: etc1 },
          { alt: "etc2", src: etc2 }
      ]
  },
  {
      title: "#Mostra IFRJ",
      description: "Além do acontecimento citado anteriormente, participei também da apresentação do projeto de extensão Vitrines Tecnológicas, cujo atuei durante 2022. Essa é uma plataforma web contendo um portfólio de produtos e serviços panteados resultantes de projetos de pesquisa e inovação. Essa Vitrine visa promover a visibilidade perante o público interno e externo da instituição, bem como obter parcerias e financiamentos.",
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
      alt: "Parrotcloud",
      src: parrotcloud,
    },
    url: "https://mulekotd.github.io/store.parrotcloud/",
    title: "Parrotcloud: Site de Publicação de Jogos"
  },
  {
    image: {
      alt: "Mostra IFRJ",
      src: mostra,
    },
    url: "https://mostraifrjduquedecaxias.labculturadigital.com.br/",
    title: "#Mostra IFRJ"
  },
  {
    image: {
      alt: "Last 2",
      src: last,
    },
    url: "https://app.last.app.br/dashboard/",
    title: "Projeto LAST 2"
  },
  {
    image: {
      alt: "Selos do Agro",
      src: selos,
    },
    url: "https://www-dev.selosdoagro.com/",
    title: "Selos do Agro"
  },
  {
    image: {
      alt: "ExcelGraphicx",
      src: excelGraphicx,
    },
    url: "http://ec2-3-89-199-188.compute-1.amazonaws.com/",
    title: "Conversor de Arquivos em Gráficos"
  },
];
