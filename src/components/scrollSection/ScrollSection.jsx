import {useEffect, useRef} from 'react';
import styles from './ScrollSection.module.scss';
import {sliders} from '../../API/API';

const ScrollSection = () => {
    const slider = useRef(null);
    const scrollWrapper = useRef(null);
    const scrollSection = useRef(null);

    useEffect(function () {
        if (
            slider.current
        ) {
            let windowWidth = window.innerWidth;
            let horLength = slider.current.scrollWidth;
            let distFromTop = scrollWrapper.current.offsetTop;
            let scrollDistance = distFromTop + horLength - windowWidth;

            scrollWrapper.current.style.height = horLength + "px";

            window.onscroll = function () {
                let scrollTop = window.pageYOffset;
                slider.current.style.paddingLeft = "8vw";

                if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
                    slider.current.style.transform = "translateX(-" + ((scrollTop - distFromTop)) + "px)";
                }
            }
        }
    }, []);

    return (
        <>
            <section className={styles.scrollSection} ref={scrollSection}>
                <div className={styles.sliderWrapper} ref={scrollWrapper}>
                    <h1 className={styles.scrollTitle}>
                        Lorem ipsum dolor sit amet
                    </h1>
                    <div className={styles.stickyWrapper}>
                        <div className={styles.slider} ref={slider}>
                            {sliders.map((img) => (
                                <div
                                    className={styles.photoWrapper}
                                    key={img}
                                >
                                    <img src={img} alt="slider-img" className={styles.img}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ScrollSection;