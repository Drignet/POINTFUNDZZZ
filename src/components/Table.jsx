import arsenalLogo from "../images/arsenal.png"
import miamiLogo from "../images/miami.png"
import cityLogo from "../images/manc.png"
import barcaLogo from "../images/barca.png"
import realLogo from "../images/real.png"
import unitedLogo from "../images/manu.png"
import juveLogo from "../images/juventus.png"
import dortmundLogo from "../images/dortmund.png"

const Table = () => {
  return (
    <section className="table">
    <h2>Table</h2>
    <table>
      <tr>
          <th>CLUB</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>PTS</th>
      </tr>
      <tr>
          <td className="table-headings"><img src={arsenalLogo} width={20} height={20} alt="logo" />Arsenal</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
      </tr>
      <tr>
          <td className="table-headings"><img src={arsenalLogo} width={20} height={20} alt="logo" />Inter Miami</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
      </tr>
      <tr>
          <td className="table-headings"><img src={barcaLogo} width={20} height={20} alt="logo" />Barcelonia</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
      </tr>
      <tr>
          <td className="table-headings"><img src={realLogo} width={20} height={20} alt="logo" />Real Madrid</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
      </tr>
     <tr>
          <td className="table-headings"><img src={arsenalLogo} width={20} height={20} alt="logo" />Man. City</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
      </tr>
     <tr>
          <td className="table-headings"><img src={unitedLogo} width={20} height={20} alt="logo" />Man. United</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
      </tr>
     <tr>
          <td className="table-headings"><img src={juveLogo} width={20} height={20} alt="logo" />Juventus</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
      </tr>
     <tr>
          <td className="table-headings"><img src={dortmundLogo} width={20} height={20} alt="logo" />Dortmund</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
      </tr>
    </table>
    </section>
    )
}
export default Table;