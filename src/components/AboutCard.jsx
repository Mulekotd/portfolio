import { Card, Image } from "react-bootstrap";

import { useMediaQuery } from "react-responsive";
import { getAge, greetingMessage, profilePicture } from "/src/utils/helpers.js";

export const AboutCard = () => {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 576px)" });

    return (
        <div className="container bd-highlight d-flex flex-column flex-md-row align-items-center gap-4">
            <div
                className="d-flex align-items-center justify-content-center overflow-hidden"
                style={{ width: "180px", height: isSmallScreen ? "180px" : "160px" }}
            >
                <Image className="rounded-circle object-fit-cover w-100 h-100" alt="perfil" src={profilePicture} />
            </div>

            <Card className="container d-flex flex-column p-4 w-100" style={{ backgroundColor: "#f3f5f7" }}>
                <h2 className="title text-uppercase">Sobre Mim</h2>
                <p>{greetingMessage()}, eu me chamo João Pedro Silverio Gama tenho {getAge()} anos e possuo experiência em Desenvolvimento Web Full-Stack.</p>

                <h2 className="title text-uppercase">Resumo</h2>
                <p className="mb-0">Natural de São Gonçalo sempre fui interessado na área de TI. Para alcançar os meus objetivos, em 2020 ingressei no Instituto Federal do Rio de Janeiro - Campus Niterói, onde finalizei o curso Técnico em Informática no começo do ano de 2023.</p>
            </Card>
        </div>
    );
};
