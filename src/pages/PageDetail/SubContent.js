import React from 'react';
import SliderArticles from './SliderArticles';
import styles from './SubContent.module.css';
import { articleInfo } from './DetailPageData';

const SubContent = () => {
    return (
        <section className={styles.subContent}>
            <SliderArticles articleContents={articleInfo} />
        </section>
    );
};

export default SubContent;


