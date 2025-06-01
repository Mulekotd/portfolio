import { Card, Image } from "react-bootstrap";

export const ProjectCard = ({ image = { alt: '', src: '' }, title, url }) => {
  return (
    <Card className="project-card border border-black border-1 rounded d-flex flex-column align-items-center overflow-hidden w-100 h-auto">
      <div
        className="border-0 position-relative object-fit-contain w-100"
        style={{
          height: "260px",
          backdropFilter: "blur(6.5px)",
          WebkitBackdropFilter: "blur(6.5px)"
        }}
      >
        <Image className="h-100 w-100" alt={image.alt} src={image.src} />
      </div>
      <a className="project-card-link" href={url}>{title}</a>
    </Card>
  );
};
