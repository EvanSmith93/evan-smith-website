const ProjectDetail = ({ onClose }) => {
    return ( 
        <div className="project-details">
            <h2>Project Details</h2>
            <button onClick={onClose}>Close</button>
        </div>
     );
}
 
export default ProjectDetail;