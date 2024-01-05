import ExperienceCard from '../components/ExperienceCard';
import data from '../data.json'

const Experience = () => {
    return ( 
        <section className='row darker-bg p-5' id='experience'>
            <h1 className='mb-4'>Experience</h1>
            <div className='row'>
                {data.experience.map((exp, index) => (
                <ExperienceCard exp={exp} key={index} />
                ))}
            </div>
        </section>
     );
}
 
export default Experience;