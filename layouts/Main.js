import Head from 'next/head';
import React from 'react';
import Header from '@/shared/header';
import Footer from '@/shared/footer';


export default ({ children, title = "Enternal Ganges", show }) => {


  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
        <Header />
        <main>
          <div className='main-content'>
            {children}
          </div>
        </main>
      <Footer />
    </>
  )
}