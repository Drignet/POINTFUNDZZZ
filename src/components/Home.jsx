import ball from "../images/ball.png"

const Home = () => {
  return (
    <header>
      <h1>POINTFUNDZZZ LEAGUE 2023</h1>
      <picture>
        <img src={ball} width={20} height={20} alt="ball" />
        <img src={ball} width={20} height={20} alt="ball" />
        <img src={ball} width={20} height={20} alt="ball" />
      </picture>
    </header>
    )
  }
export default Home;