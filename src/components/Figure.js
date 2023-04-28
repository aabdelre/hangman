import React from 'react'

export const Figure = () => {
    const errors = 0; //Errors should be calculated
  return (
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */} {/*These are comments in HTML Surround them by to get neglected in React*/}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {errors > 0 &&
        <circle cx="140" cy="70" r="20" />
      }
      {/* <!-- Body --> */}
      {errors > 1 &&
        <line x1="140" y1="90" x2="140" y2="150" />
      }
      {/* <!-- Arms --> */}
      {errors > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" />
      }
      {errors > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" />
      }
      {/* <!-- Legs --> */}
      {errors > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" />
      }
      {errors > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" />
      }
    </svg>
  )
}
//This line exports the file as Figure (needed to be imported successfully in App.js)
export default Figure
