import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { getAge, greetingMessage, profilePicture } from "/src/utils/helpers.js";

export const AboutCard = () => {
    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage || i18n.language;

    return (
        <motion.section
            className="about-grid"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div className="avatar-shell" whileHover={{ rotate: 1.5, scale: 1.03 }}>
                <img
                    className="rounded-circle object-fit-cover w-100 h-100"
                    alt="Foto de perfil de João Pedro"
                    src={profilePicture}
                    loading="eager"
                    fetchpriority="high"
                />
            </motion.div>

            <Card className="glass-card about-card">
                <h2 className="title text-uppercase">{t("home.aboutTitle")}</h2>
                <p>{t("home.aboutDescription", { greeting: greetingMessage(language) })}</p>
                <h2 className="title text-uppercase">{t("home.summaryTitle")}</h2>
                {t("home.summaryDescription").split("\n\n").map((paragraph, i, arr) => (
                    <p key={i} className={i === arr.length - 1 ? "mb-0" : undefined}>
                        {paragraph}
                    </p>
                ))}
            </Card>
        </motion.section>
    );
};
