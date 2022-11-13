import React from 'react';
import styles from './PageDetail.module.css';
import Header from '../../components/Header/Header.js'
// import Sidebar from '../../components/Sidebar/Sidebar.js'
import Footer from '../../components/Footer/Footer.js'
import MainContent from './MainContent'
import SubContent from './SubContent'

const PageDetail = () => {
   
    return (
        <div className={styles.pageDetail}>
            <div className={styles.sideBar}>Sidebar</div>
            {/* <Sidebar /> */}
            <div className={styles.container}>
                <Header />
                <div className={styles.bodyContent}>
                    {/* <MainContent /> */}
                    <SubContent />
                    
                </div>
                <Footer style={{margin: 0}} />
            </div>
            
        </div>
    );
};

export default PageDetail;