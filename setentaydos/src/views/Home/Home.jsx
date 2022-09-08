import React from 'react'
import WriteApp from '../../components/WriteApp/WriteApp';
import Style from './Home.module.css';

const Home = () => {
  return (
    <main className={Style.HomeContainer}>
        <WriteApp/>
    </main>
  )
}

export default Home;