import data from '../data.json'

const Education = () => {
    return ( 
        <section className='row darker-bg p-5' id='education'>
            <h1 className='mb-4'>Education</h1>
            <div className='col-sm-6 mb-3 school-card'>
                <div className='flex-column'>
                    { /* Basic Info */ }
                    <div className='card p-3 mb-4'>
                        <div className='corner-image-card-header'>
                            <h6 className='gray'><i>{data.education.start} - {data.education.graduation}</i></h6>
                            <h3 className='mb-2'>{data.education.school.name}</h3>
                        </div>
                        <h4 className='highlight'>{data.education.degree} in {data.education.major}</h4>
                        <ul>
                            <li>Minor in {data.education.minor}</li>
                            <li>GPA: {data.education.gpa} / 4.00</li>
                        </ul>
                        <a href={data.education.school.link}>
                            <img src={data.education.school.image} alt={data.education.school.name + " Logo"} className="corner-image"></img>
                        </a>
                    </div>

                    { /* Activities */ }
                    <div className='card p-3'>
                        <h2 className='mb-3'>Activities</h2>
                        <div className='activities row'>
                            {data.education.activities.map((activity, index) => {
                                return (
                                    <div className='col-sm-4'>
                                        <a href={activity.link}>
                                            <img src={activity.image} alt={activity.name}></img>
                                            <p className='gray'>{activity.name}</p>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            
            { /* Relevant Coursework */ }
            <div className='col-sm-6'>
                <div className='card p-3'>
                    <h2>Relevant Coursework</h2>
                    <div className='row mb-3'>
                        {data.education.courses.map((course, index) => {
                            return (
                                <div className='col-sm-6'>
                                    <p>
                                        <i className='gray'>{course.number}</i>
                                        <br/>{course.name}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Education;