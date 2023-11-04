import arsenalLogo from "../images/arsenal.png"
import miamiLogo from "../images/miami.png"
import cityLogo from "../images/manc.png"
import barcaLogo from "../images/barca.png"
import realLogo from "../images/real.png"
import unitedLogo from "../images/manu.png"
import juveLogo from "../images/juventus.png"
import dortmundLogo from "../images/dortmund.png"

import martin from "../images/martin.jpeg"
import messi from "../images/messi.jpeg"
import halland from "../images/halland.jpeg"
import barca from "../images/barca.jpeg"
import benzema from "../images/benzema.jpeg"
import rashford from "../images/rashford.jpeg"
import juve from "../images/juve.jpeg"
import judeDort from "../images/judeDort.jpeg"

const teamsProfile = [{
    profilePics : martin,
    teamName : "Arsenal",
    teamCoach : "Agbara & Robinho",
    logo : arsenalLogo,
    id:1
  },
  {
    profilePics : messi,
    teamName : "Inter Miami",
    teamCoach : "Point Funds",
    logo : miamiLogo,
    id:2
  },
    {
    profilePics : halland,
    teamName : "Manchester City",
    teamCoach : "Matt Manny",
    logo : cityLogo,
    id:3
  },
  {
    profilePics : barca,
    teamName : "Barcelonia",
    teamCoach : "Aritex Global",
    logo : barcaLogo,
    id:4
  },
  {
    profilePics : benzema,
    teamName : "Real Madrid",
    teamCoach : "Broda & Pirate",
    logo : realLogo,
    id:5
  },
  {
    profilePics : rashford,
    teamName : "Manchester United",
    teamCoach : "Jibulin",
    logo : unitedLogo,
    id:6
  },
  {
    profilePics : juve,
    teamName : "Juventus",
    teamCoach : "Og Cantona",
    logo : juveLogo,
    id:7
  },
  {
    profilePics : judeDort,
    teamName : "Dortmund",
    teamCoach : "Ethereum & Izu Sky",
    logo : dortmundLogo,
    id:8
  }
  ]

const Teams = () => {
  return (
    <section className="team">
    <h2>Teams & Sponsors</h2>
    <div className="teams">
    {teamsProfile.map((teamProfile => {
      return <Card {...teamProfile} key={teamProfile.id} />
    }))}
    </div>
    </section>
    )
}
export default Teams

const Card = ({profilePics, teamName, teamCoach, logo}) => {
  
  return (
    <figure className="team-profiles">
      <img src={profilePics} width={150} height={150} alt={`${teamName} player`} loading="lazy" className="profile-img" />
      <figcaption className="team-details">
        <img src={logo} width={30} height={30} alt={`${teamName} logo`} />
        <h4>{teamName}</h4>
        <span className="hyphen"></span>
        <h4>{teamCoach}</h4>
      </figcaption>
    </figure>
    )
}