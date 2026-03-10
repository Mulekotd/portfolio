import { Button, Card, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import { HiBadgeCheck } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { developmentInfo } from "/src/utils/helpers.js";

const DevelopmentInfo = ({ title = "", description = "", href = "", images = [{ alt: "", src: "" }] }) => {
    const { t } = useTranslation();

    return (
        <Card className="glass-card development-item d-flex flex-column">
            <div className="d-flex flex-row align-items-start gap-2">
                <h5 className="mb-1">{title}</h5>
                <OverlayTrigger placement="right" overlay={<Tooltip>{t("development.downloadCertificate")}</Tooltip>}>
                    <Button aria-label={t("development.downloadCertificate")} className="button" href={href} download>
                        <HiBadgeCheck color="#1ce4a4" size={20} />
                    </Button>
                </OverlayTrigger>
            </div>
            <p className="m-0">{description}</p>

            <div className="development-images">
                {images.map(({ alt, src }) => (
                    <Image
                        alt={alt}
                        src={src}
                        key={alt}
                        className="w-100"
                        loading="lazy"
                        decoding="async"
                    />
                ))}
            </div>
        </Card>
    );
};

export const DevelopmentCard = () => {
    const { t } = useTranslation();

    return (
        <motion.section
            className="development-stack"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
        >
            <h2 className="title text-uppercase mb-3">{t("home.developmentTitle")}</h2>
            {developmentInfo.map((item) => (
                <DevelopmentInfo
                    key={item.titleKey}
                    title={t(item.titleKey)}
                    description={t(item.descriptionKey)}
                    href={item.href}
                    images={item.images}
                />
            ))}
        </motion.section>
    );
};
