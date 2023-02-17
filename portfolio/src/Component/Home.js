import { useEffect } from 'react'
import Sections from './Home/Sections'
import Header from './Header'
import img from './images/arjunPic.jpg'
import HomeData from './Home/HomeData'


const Home = () => {
  useEffect(() => {
    document.title = 'Portfolio | Home';
  }, []);
  return (
    <>
      <Header img={img} txt="Arjun Rajput The" htxt=" Web Developer" />

      
      {
        HomeData.map((currElem, indx) => {
          const { heading, txt, type, wantBtn, btnText, to } = currElem;
          return <Sections heading={heading} txt={txt} type={type} wantBtn={wantBtn} btnText={btnText} to={to} key={indx} />
        })
      }

    </>
  )
}

export default Home
