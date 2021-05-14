// import React, { useState, useEffect } from 'react';
// import Header from './components/Header'
// import Category from './components/Category'
// import './App.css';

// function App() {
//   const count = 8;
//   const [categories, setCategories] = useState([])
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     fetch(`https://jservice.io/api/categories?count=8&offset=${offset}`)
//       .then(response => response.json())
//       .then(data => setCategories(data))
//   }, [offset])

//   const handleNext = () => {
//     if (categories.length == count) {
//       setOffset(offset + count)
//     }
//   }

//   const handlePrev = () => {
//     if (offset != 0) {
//       setOffset(offset - count)
//     }
//   }

//   return (
//     <>
//       <Header title="Super Quiz" />
//       <main>
//         <h2>Categories</h2>
//         <section>
//           {categories
//             // .slice(offset, offset + 4)
//             .map(({ id, title, clues_count }) =>
//               <Category key={id} title={title} cluesCount={clues_count} />
//             )}
//         </section>
//         <nav>
//           <button disabled={offset == 0} onClick={handlePrev}>&laquo; Previous</button>
//           <button disabled={categories.length < count} onClick={handleNext}>Next &raquo;</button>
//         </nav>
//       </main>
//     </>
//   );
// }

// export default App;