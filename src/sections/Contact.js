import SocialButtons from '../components/SocialButtons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    // send email function
    function sendEmail(e) {
        e.preventDefault();

        if (e.target.name.value === '' || e.target.email.value === '' || e.target.message.value === '') {
            alert('Please fill out all fields.')
            return;
        }

        emailjs.sendForm('service_3a1ma5d', 'template_dq0vqpg', e.target, 'N283oizvm3R5qjxeM')
        e.target.reset()

        alert('Message sent successfully!')
      }

    return ( 
        <div>
            <section className='darker-bg pt-5 px-5 pb-3' id='contact'>
                <h2 className='mb-4'>Contact Me</h2>

                {/* Contact Form */}
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <form onSubmit={sendEmail}>
                            <div className='row mb-4'>
                                <div className='col form-group'>
                                    <input type='text' className='form-control form-item' placeholder='Name' name='name' />
                                </div>
                                <div className='col form-group'>
                                    <input type='email' className='form-control form-item' placeholder='Email Address' name='email' />
                                </div>
                            </div>
                            <div className='form-group mb-4'>
                                <textarea className='form-control form-item' rows='6' placeholder='Your Message' name='message'></textarea>
                            </div>
                            <div className='form-group text-center mb-5'>
                                <input type='submit' className='btn btn-primary button' value='Send Message' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className='dark-bg p-4 text-center'>
                <SocialButtons />
            </section>
        </div>
     );
}
 
export default Contact;