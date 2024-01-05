import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub
  } from '@fortawesome/free-brands-svg-icons';

const SocialButtons = () => {
    return ( 
        <div className='social-buttons'>
          <a href='https://linkedin.com/in/evansmith04/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
          <a href='https://github.com/EvanSmith93' target='_blank' rel='noreferrer' className='last-social-button'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
        </div>
     );
}
 
export default SocialButtons;