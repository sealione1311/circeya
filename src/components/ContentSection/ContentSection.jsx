import styles from './ContentSection.module.scss'

const ContentSection = (
    {photo1, photo2, title, subtitle, paragraph}
) => {
    return (
        <section className={styles.contentSection}>
            <h1 className={styles.title}>
                {title}
            </h1>
            <div className={styles.leftPhotoSection}>
                <div className={styles.imgContainer}>
                    <img src={photo1} alt="content-img" className={styles.photo}/>
                </div>
                <div className={styles.text}>
                    <h1>{subtitle}</h1>
                    <p>
                        {paragraph}
                    </p>
                </div>
            </div>
            <div className={styles.rightPhotoSection}>
                <div className={styles.text}>
                    <h1>{subtitle}</h1>
                    <p>
                        {paragraph}
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <img src={photo2} alt="content-img"/>
                </div>
            </div>
        </section>
    );
}

export default ContentSection;