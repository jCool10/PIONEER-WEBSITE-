import React from 'react';
import Header from '../../components/Header/Header.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import OutTeam from '../../assets/product_cover.png';
import styles from './Product.module.css'
import Footer from '../../components/Footer/Footer.js'

const PostProductItems = () => 
{
  const productInfo = [
    { 
      id: 1,
      name: 'This is product name 1', 
      path: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/286866351_4632906913478083_6758325693158619585_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=xUussfUaqFMAX80DxNf&_nc_ht=scontent.fhan2-5.fna&oh=00_AT95SAEN122O8feqFSCAVnohWZX-H1TDsLR23YmQObxI-w&oe=633B4064' , 
      summary: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
    },
    { 
      id: 2,
      name: 'This is product name 2', 
      path: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/286866351_4632906913478083_6758325693158619585_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=xUussfUaqFMAX80DxNf&_nc_ht=scontent.fhan2-5.fna&oh=00_AT95SAEN122O8feqFSCAVnohWZX-H1TDsLR23YmQObxI-w&oe=633B4064' , 
      summary: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
    },
    { 
      id: 3,
      name: 'This is product name 3', 
      path: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/286866351_4632906913478083_6758325693158619585_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=xUussfUaqFMAX80DxNf&_nc_ht=scontent.fhan2-5.fna&oh=00_AT95SAEN122O8feqFSCAVnohWZX-H1TDsLR23YmQObxI-w&oe=633B4064' , 
      summary: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
    },
  ]
  return (
    productInfo.map((product) => 
    {
      return (
        <li
          className={styles.item}
          key={product.id}>
          <div className={styles.description}>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.summary}>{product.summary}</p>
            <a href='/' target="_blank" className={styles.more}>Tìm hiểu thêm</a>
          </div>
          <div 
            className={styles.image}
            style={{backgroundImage: "url(" + product.path + ")"}}>
          </div>
        </li>
      )
    })
    )
}
function Product() {
  return (
  <section className={styles.page}>
    <Sidebar />
    <div className={styles.container}>
      <Header />
      <img src={OutTeam} alt="Introduce"></img>
      <div className={styles.label}>SẢN PHẨM</div> 
      <ul className={styles.list}>
        <PostProductItems />
      </ul>
      <Footer style={{margin: 0}} />
    </div>
  </section>
  )
}

export default Product;
