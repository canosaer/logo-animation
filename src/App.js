import './styles/main.scss'
import React from 'react';

let verticalBars = ['','','','','','','','','','','','','','','']
let horizontalBars = ['','','','','','','','']
verticalBars.fill('logo1__bar logo1__bar_vertical')
horizontalBars.fill('logo1__bar logo1__bar_horizontal')

function App() {
  return (
    <>
      <main className="logo1">
        <figure className="logo1__image">
          {verticalBars.map((bar, i) => {
            const key = `vertical-bar--${i}`

            return(
                <div className={bar} key={key}>
                </div>
            )
                    
          })}
          <section className="logo1__circle">
            {horizontalBars.map((bar, i) => {
              const key = `vertical-bar--${i}`

              return(
                  <div className={bar} key={key}>
                  </div>
              )

            })}
          </section>
        </figure>
        <figcaption className="logo1__name">
            Eric Canosa
        </figcaption>
      </main>
    </>
  );
}

export default App;
