import data from '../data.json'

const Education = () => {
    return ( 
        <section className='row darker-bg p-5'>
            <h1 className='mb-4'>Education</h1>
            <div className='col-sm-6 mb-3'>
                <div className='card p-3'>
                <h6 className='gray'><i>{data.education.start} - {data.education.graduation}</i></h6>
                <h3 className='mb-2'>{data.education.school}</h3>
                <h4 className='highlight'>{data.education.degree} in {data.education.major}</h4>
                <h4>Minor in {data.education.minor}</h4>
                <p className=''>BYU Developers Club | Competative Programming Club | Humor U Stand-up Comedy Club</p>
                <p className=''>Grade: {data.education.gpa} GPA</p>
                </div>
            </div>
            <div className='col-sm-6'>
                <div className='card p-3'>
                <h3>Relevant Coursework:</h3>
                <ul className='mb-3'>
                    {data.education.courses.map((course, index) => {
                        return <li key={index}>{course}</li>
                    })}
                </ul>
                </div>
            </div>
        </section>
     );
}
 
export default Education;