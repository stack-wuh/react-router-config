import Image from 'next/image'
import Head from 'next/head'

const Header = () => {
  return (<>
    <header className='header'>
      <Head>
        <link rel="icon" href="/image/avatar.jpeg" />
      </Head>
      <div className='container'>
        <Image src="/favicon.ico" width={50} height={50} />

        <strong className='title'>自小多才俊, 向来志气高</strong>
      </div>
    </header>
    <style jsx>{`
      .header {
        position: fixed;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        background-color: #fbf7f7;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }

      .header .container {
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0 auto;
      }

      .header .container .title {
        font-size: 14px;
        color: #1890ff;
        font-weight: normal;
      }
    `}</style>
  </>)
}

export default Header