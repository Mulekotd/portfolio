import { Fragment } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const SocialMedias = () => {
    const { t } = useTranslation();

    const socialLinks = [
        {
            ariaLabel: "Siga-me no Instagram",
            title: t("social.instagram"),
            icon: AiFillInstagram,
            href: "https://www.instagram.com/mulekotd/",
        },
        {
            ariaLabel: "Conecte-se comigo no LinkedIn",
            title: t("social.linkedin"),
            icon: BsLinkedin,
            href: "https://www.linkedin.com/in/mulekotd/",
        },
        {
            ariaLabel: "Veja meu GitHub",
            title: t("social.github"),
            icon: BsGithub,
            href: "https://github.com/Mulekotd",
        },
    ];

    return (
        <Fragment>
            <p className="title text-uppercase">{t("contact.socialTitle")}</p>
            <div className="d-flex justify-content-center flex-wrap gap-2 overflow-hidden">
                {socialLinks.map(({ ariaLabel, title, icon: Icon, href }) => (
                    <a
                        key={title}
                        href={href}
                        className="social-chip"
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
