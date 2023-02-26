import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>

        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">
                Personal Digital Assistants
                </p>
                <p className="subtitle">
                a small collection of big name Personal Digital Assistants
                </p>
            </div>
        </section>

            <div className="container">
                <div className="section">
                    <div className='columns'>
                        <div className='column is-4'>
                        <ProfileCard title="Alexa" twitterHandle="alexa9000" imageSrc={AlexaImage} description="Alexa listens for the keyword Alexa" />
                        </div>
                        <div className='column is-4'>
                        <ProfileCard title="Cortana" twitterHandle="cortana9000" imageSrc={CortanaImage} description="Oh Microsoft you done changed the game"  />
                            </div>
                            <div className='column is-4'>
                            <ProfileCard title="Siri" twitterHandle="siri9000" imageSrc={SiriImage} description="Hey Siri"  />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;