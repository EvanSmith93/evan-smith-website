import SocialButtons from "../components/SocialButtons";
import data from '../data.json';
import Navbar from "../components/Navbar";

const Header = () => {
    return ( 
        <div>
            <Navbar />
            <section className='row dark-bg p-5 header' id="header">
                <div className='col-md-6 d-flex align-items-center'>
                {/* Left Column - Text */}
                <div className='text-right'>
                    <h2>Hi, I'm</h2>
                    <h1 className='name highlight'>{data.name}</h1>
                    <h3>{data.bio}</h3>
                    <div className='py-2'>
                    <SocialButtons />
                    </div>
                </div>
                </div>
                <div className='col-md-6 d-flex'>
                {/* Right Column - Image */}
                <div className='my-auto mx-auto'>
                    <img
                    src={'/assets/profile-picture.jpg'}
                    alt='Evan Smith'
                    className='img-fluid mb-3 rounded profile-picture'
                    />
                </div>
                </div>
            </section>
        </div>
     );
}
 
export default Header;