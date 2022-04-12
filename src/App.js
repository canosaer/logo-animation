import './styles/main.scss'
import React from 'react';

let verticalBars = ['','','','','','','','','','','','','','','']
let horizontalBars = ['','','','','','','','']
verticalBars.fill('logo1__bar logo1__bar_vertical')
horizontalBars.fill('logo1__bar logo1__bar_horizontal')

function App() {
  return (
    <>
      <section className="logo1">
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
      </section>
      <section className="logo2">
        <figure className="logo2__image">
            E
        </figure>
        <figcaption className="logo2__name">
            Eric Canosa
        </figcaption>
      </section>
    </>
  );
}

export default App;
