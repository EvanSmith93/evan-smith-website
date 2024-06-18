const ProjectCard = ({ project }) => {
    const handleClick = () => {
        if (project.link) {
            window.open(project.link, '_blank');
        }
    };

    return (
        <div className={"col-md-4 mb-4 project-card " + (project.link ? "clickable" : "")} onClick={handleClick}>
            <div className='card h-100'>
                <img className="mb-2" src={project.image} alt={project.name} />
                <div className="p-3">
                    <h3 className=''>{project.name}</h3>
                    <h6 className='highlight'>{project.description}</h6>
                    <ul>
                        {project.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectCard;