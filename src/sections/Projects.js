import ProjectCard from '../components/ProjectCard';
import data from '../data.json'

const Projects = () => {
    return ( 
        <section className='row dark-bg p-5' id='projects'>
            <h1 className='mb-4'>Projects</h1>
            <div className='row'>
                {data.projects.map((project, index) => (
                    <ProjectCard project={project} />
                ))}
            </div>

            {/* {showPopup && (
            <ProjectDetail onClose={handleClosePopup} />
            )} */}
        </section>
     );
}
 
export default Projects;