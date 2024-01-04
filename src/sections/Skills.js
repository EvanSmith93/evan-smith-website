import data from '../data.json'

const Skills = () => {
    return ( 
    <section className='dark-bg p-5'>
        <h1 className='mb-4'>Skills</h1>
        <div className='skills-container px-5'>
            {data.skills.map((skill, index) => (
            <div key={index} className="skill-item mx-4">
                <img className='mb-3' src={skill.image} alt={skill.name} height='40px' />
                <h4 className='my-1 gray'>{skill.name}</h4>
            </div>
            ))}
        </div>
    </section>
    );
}
 
export default Skills;