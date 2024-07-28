
const Transition = () => {
  return (
    <>
        <h1 className="transTitle">Transition</h1>
        <div className="transBall"></div>

        <form className="transForm">
          <input type="text" className="transForm--input" placeholder="Your@email.com"/>
          <button className="transForm--button">
            <span>Subscribe</span>
          </button>
        </form>
    </>
  )
}

export default Transition