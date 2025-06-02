import { Fragment } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const SocialMedias = () => {
    const socialLinks = [
        {
            ariaLabel: "Siga-me no Instagram",
            title: "Instagram",
            icon: AiFillInstagram,
            href: "https://www.instagram.com/mulekotd/",
        },
        {
            ariaLabel: "Conecte-se comigo no LinkedIn",
            title: "LinkedIn",
            icon: BsLinkedin,
            href: "https://www.linkedin.com/in/mulekotd/",
        },
        {
            ariaLabel: "Veja meu GitHub",
            title: "GitHub",
            icon: BsGithub,
            href: "https://github.com/Mulekotd",
        },
    ];

    return (
        <Fragment>
            <p className="title text-uppercase">Redes Sociais</p>
            <div className="d-flex justify-content-center gap-3 overflow-hidden">
                {socialLinks.map(({ ariaLabel, title, icon: Icon, href }) => (
                    <a
                        key={title}
                        href={href}
                        className="link text-decoration-none d-flex align-items-center gap-1"
                        aria-label={ariaLabel}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon /> {title}
                    </a>
                ))}
            </div>
        </Fragment>
    );
};
