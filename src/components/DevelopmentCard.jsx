import { Button, Card, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import { HiBadgeCheck } from "react-icons/hi";

import { developmentInfo } from "/src/utils/helpers.js";

const DevelopmentInfo = ({ title = '', description = '', href = '', images = [{ alt: '', src: '' }] }) => {
    return (
        <Card className="container d-flex flex-column">
            <div className="d-flex flex-row align-items-start gap-2">
                <h5>{title}</h5>
                <OverlayTrigger placement="right" overlay={<Tooltip>Baixar Certificação</Tooltip>}>
                    <Button aria-label="Baixar Certificação" className="button" href={href} download>
                        <HiBadgeCheck color="green" size={18} />
                    </Button>
                </OverlayTrigger>
            </div>
            <p className="m-0">{description}</p>
            <div className="container d-flex flex-column flex-md-row justify-content-between gap-4 my-4 p-0 h-auto">
                {images.map(({ alt, src }) => (<Image alt={alt} src={src} key={alt} className="w-100" height="250px" />))}
            </div>
        </Card>
    );
};

export const DevelopmentCard = () => {
    return (
        <Card className="container d-flex flex-column p-4 h-auto">
            {developmentInfo.map((item) => (
                <DevelopmentInfo
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    images={item.images}
                />
            ))}
        </Card>
    );
};
