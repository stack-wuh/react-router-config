import '../styles/globals.css';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (<>
    <div className='App'>
      <Component {...pageProps} />
    </div>
  </>)
}

export default MyApp
