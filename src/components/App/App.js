import React from 'react'
import './style.css'
import { LinkToSource, Showtime, Review } from 'components'
import { LinksData, Combinations } from 'store'

export const App = () => {
  return (
    <LinksData.Provider>
      <Combinations.Provider>
        <div className="App">
          <header className="App-header">
            <div className="App-header-text">
              In vino veritas
              In vino veritas
              In vino veritas
              In vino veritas
            </div>
          </header>

          <main className="App-main">
            <div className="App-main-row">
              <LinkToSource />
            </div>
            <div className="App-main-row">
              <Review />
            </div>
            <div className="App-main-row">
              <Showtime />
            </div>
          </main>
        </div>
      </Combinations.Provider>
    </LinksData.Provider>
  )
}
