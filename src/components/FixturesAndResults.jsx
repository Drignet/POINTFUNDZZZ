import arsenalLogo from "../images/arsenal.png"
import miamiLogo from "../images/miami.png"
import cityLogo from "../images/manc.png"
import barcaLogo from "../images/barca.png"
import realLogo from "../images/real.png"
import unitedLogo from "../images/manu.png"
import juveLogo from "../images/juventus.png"
import dortmundLogo from "../images/dortmund.png"

const FixturesA = [
  {
    teamName: "Arsenal",
    logo: arsenalLogo,
    score: 0,
    id:1
  },
  {
    teamName: "Inter Miami",
    logo: miamiLogo,
    score: 0,
    id:2
  },
{
    teamName: "Manchester City",
    logo: cityLogo,
    score: 0,
    id:3
  },
{
    teamName: "Barcelonia",
    logo: barcaLogo,
    score: 0,
    id:4
  }
  ]
  
  const FixturesB = [
  {
    teamName: "Real Madrid",
    logo: realLogo,
    score: 0,
    id:1
  },
  {
    teamName: "Manchester United",
    logo: unitedLogo,
    score: 0,
    id:2
  },
{
    teamName: "Juventus",
    logo: juveLogo,
    score: 0,
    id:3
  },
{
    teamName: "Dortmund",
    logo: dortmundLogo,
    score: 0,
    id:4
  }
  ]

const FixturesAndResults = () => {
  return (
    <>
    <h2 className="FR-heading">Fixtures And Results</h2>
    <section className="fixtures-results">
    <div>
      {FixturesA.map((fixtureA => {
        return <FixtureAndResultA {...fixtureA} key={fixtureA.id} />
      }))}
      </div>
      <div>
      {FixturesB.map((fixtureB => {
        return <FixtureAndResultB {...fixtureB} key={fixtureB.id} />
      }))}
      </div>
    </section>
    </>
    )
}
export default FixturesAndResults;

const FixtureAndResultA = ({logo, teamName, score}) => {
  return (
    <div className="teamA">
      <img src={logo} width={30} height={30} alt={`${teamName} logo`} />
      <p>{teamName}</p>
      <span>{score}</span>
    </div>
    )
}

const FixtureAndResultB = ({logo, teamName, score}) => {
  return (
    <div className="teamB">
    <span>{score}</span>
    <p>{teamName}</p>
      <img src={logo} width={30} height={30} alt={`${teamName} logo`} />
    </div>
    )
}