import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import './App.css'
// import Header from "./components/Header"
import Region from './Region.jsx'


function App() {
  const [currentPage, setCurrentPage] = useState(0);


  const handleNav = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
			<Header title="Countries & Capitals Study Cards" handleNav={handleNav} />
      {currentPage == 0 && (<Region />)}
			{currentPage == 1 && (<Cards />)}
    </>
  );
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

export default App;