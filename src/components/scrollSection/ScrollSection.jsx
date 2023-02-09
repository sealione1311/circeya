import {useEffect, useRef} from 'react';
import styles from './ScrollSection.module.scss';
import {sliders} from '../../API/API';

const ScrollSection = () => {
    const slider = useRef(null);
    const scrollWrapper = useRef(null);
    const scrollSection = useRef(null);
    let windowWidth = window.innerWidth;
    let x = null;
    let currentSliderX = 0;

    const onScroll = () => {
        if (
            slider.current && windowWidth > 821
        ) {

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
    }
    const onTouchStart = (evt) => {
        x = evt.touches[0].clientX;
        console.dir(slider.current.scrollWidth)
    }

    const onTouchMove = (evt) => {
        let touch = evt.touches[0];
        let diff = x - touch.clientX;
        if (diff < 0) {
            slider.current.style.transform = `translateX(${currentSliderX+Math.abs(diff)}px)`;
            currentSliderX = (slider.current.style.transform.slice(11, -3));
            if(currentSliderX > 0 ) {
                return
            }
        }
        if (currentSliderX < -(slider.current.scrollWidth - windowWidth) ) {
            currentSliderX = -(slider.current.scrollWidth - windowWidth)
            return
        }
        slider.current.style.transform = `translateX(${(currentSliderX - diff)}px)`;
        currentSliderX = (slider.current.style.transform.slice(11, -3));
    }
    const onTouchEnd = () => {
        slider.current.style.transform = `translateX(${(currentSliderX)}px)`;
    }

    useEffect(function () {
        window.addEventListener("scroll", onScroll);

        return function () {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <>
            <section className={styles.scrollSection} ref={scrollSection}>
                <div className={styles.sliderWrapper} ref={scrollWrapper}>
                    <h1 className={styles.scrollTitle}>
                        Lorem ipsum dolor sit amet
                    </h1>
                    <div className={styles.stickyWrapper}
                         onTouchStart={onTouchStart}
                         onTouchMove={onTouchMove}
                         onTouchEnd={onTouchEnd}
                    >
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