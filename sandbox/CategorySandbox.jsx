// import React, {useState} from "react"
// import "./Category.css"

// export default function Category({title, cluesCount}) {
//     const [toggle, setToggle] = useState("yellow");

//     const handleToggle = () => {
//         if(toggle == "yellow") {
//             setToggle("blue")
//         } else {
//             setToggle("yellow")
//         }
//     }

//     return (
//         <div onClick={handleToggle} className={`category ${toggle}`}>
//             <h3>{title}</h3>
//             {toggle == "blue" && (
//               <>
//               <p>{cluesCount}</p>
//               <button onClick={() => alert(`Plahing ${title}`)}>Play Category</button>
//               </>
//             )}
//         </div>
//     )
// }