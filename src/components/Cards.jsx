import React, { useState } from "react"
import "./Cards.css"

export default function Cards({ countryName, countryCapital }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)

    
  }
	// <main>
      //   <h2>Click here for capitals flashcards</h2>
      //   <div className="regionselection">
      //     <section>
      //       <div className="stuff-box">
      //         <h1>Americas</h1>
      //       </div>
      //     </section>
      //     <section>
      //       <div className="stuff-box">
      //         <h1>Africa</h1>
      //       </div>
      //     </section>
      //     <section>
      //       <div className="stuff-box">
      //         <h1>Asia</h1>
      //       </div>
      //     </section>
      //     <section>
      //       <div className="stuff-box">
      //         <h1>Europe</h1>
      //       </div>
      //     </section>
      //     <section>
      //       <div className="stuff-box">
      //         <h1>Oceania</h1>
      //       </div>
      //     </section>
      //   </div>
      //   <nav>
      //     <button>&laquo; Previous</button>
      //     <button>Next &raquo;</button>
      //   </nav>
      // </main>

  return (
    <div onClick={handleToggle} className="Cards" >
      <h1>Country: {countryName}</h1>
      {toggle && (<h2>Capital: {countryCapital}</h2>)}
    </div>
  )

  // return (
  //   <div className="Cards" >
  //     <h1>Sus</h1>
  //   </div>
  // )
}
