import Layout from "./layout/Layout";
import ContentSection from './components/ContentSection/ContentSection';
import {lowerContentBlock, upperContentBlock} from '../src/API/API';
import ScrollSection from './components/scrollSection/ScrollSection';

function App() {
    return (
        <div className="App">
            <Layout>
                <ContentSection photo1={upperContentBlock.img1}
                                photo2={upperContentBlock.img2}
                                title={upperContentBlock.title}
                                subtitle={upperContentBlock.subtitle}
                                paragraph={upperContentBlock.paragraph}
                />
                <ScrollSection/>
                <ContentSection photo1={lowerContentBlock.img3}
                                photo2={lowerContentBlock.img4}
                                title={lowerContentBlock.title}
                                subtitle={lowerContentBlock.subtitle}
                                paragraph={lowerContentBlock.paragraph}
                />
            </Layout>
        </div>
    );
}

export default App;
