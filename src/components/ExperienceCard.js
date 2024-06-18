const ExperienceCard = ({ exp, index }) => {
    return ( 
        <div className='col-md-6 mb-4 experience-card' key={index}>
            <div className='card p-3 h-100'>
                <div className='corner-image-card-header'>
                    <h6 className='gray'><i>{exp.start} - {exp.end}</i></h6>
                    <h3>{exp.company}</h3>
                    <h4 className='highlight'>{exp.position}</h4>
                </div>
                <ul>
                {exp.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
                </ul>
            </div>
            <a href={exp.link} target='_blank' rel="noreferrer">
                <img src={exp.image} alt={exp.company + " Logo"} className="corner-image"></img>
            </a>
        </div>
     );
}
 
export default ExperienceCard;