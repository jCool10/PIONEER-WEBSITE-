import React from 'react';
<<<<<<< HEAD
import './Product.scss'
import { productData } from '../../assets/productData';
import ProductCard from '../../components/ProductCard/ProductCard';
=======
import Header from '../../components/Header/Header.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import OutTeam from '../../assets/product_cover.png';
import styles from './Product.module.css'
import Footer from '../../components/Footer/Footer.js'
>>>>>>> 33e0fcb46e702d1e21a862f36915b38ab36649cf


const renderProductList = () => {
  return (
    productData.map((product) => {
      return <ProductCard product={product} />
    })
  )
}
function Product() {
  return (
<<<<<<< HEAD
    <section className='product'>
      <div className='cover'></div>
      <div className='label'>SẢN PHẨM</div>
      <ul className='list'>
        {renderProductList()}
=======
  <section className={styles.page}>
    <Sidebar />
    <div className={styles.container}>
      <Header />
      <img src={OutTeam} alt="Introduce"></img>
      <div className={styles.label}>SẢN PHẨM</div> 
      <ul className={styles.list}>
        <PostProductItems />
>>>>>>> 33e0fcb46e702d1e21a862f36915b38ab36649cf
      </ul>
    </section>
  )
}

export default Product;
