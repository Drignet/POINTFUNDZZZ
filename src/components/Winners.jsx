import cup from "../images/cup-1.png"

const Winners = () => {
  return (
    <section className="winners">
      <h2>Winner</h2>
      <figure>
        <img src={cup} width={200} height={250} alt="cup" />
        <figcaption>
          <h3>TEAM</h3>
          <h3>COACH</h3>
        </figcaption>
      </figure>
    </section>
    )
}
export default Winners;