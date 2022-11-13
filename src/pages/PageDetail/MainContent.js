import React from 'react';
import styles from './MainContent.module.css';
import { articleInfo } from './DetailPageData.js';


const MainContent = (props) => {
    
    // const selectedArticle = props.articlces.find(article =>  props.articlces.indexOf(article) === props.selectedItem)
    
    const selectedArticle = articleInfo[1];
    return (
        <section className={styles.mainContent}>
            <header  className={styles.heading}>
                <img className={styles.authorImg} src={selectedArticle.imgAuthor}  alt= 'Author'/>
                <div className={styles.authorInfo}>
                    <h2 className={styles.authorName}>{selectedArticle.author}</h2>
                    <span className={styles.postDate}>{selectedArticle.postDate}</span>
                </div>
            </header>
            <article className={styles.article}>
                <h1 className={styles.articlceTitle}>{selectedArticle.title}</h1>
                <img className={styles.articleImg} src={selectedArticle.imgArticle} alt="Artcicle" />
                <p className={styles.articleParagraph}>{selectedArticle.paragraph}</p>
            </article>
        </section>
    );
};
export default MainContent;