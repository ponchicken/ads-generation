import React from 'react'
import './style.css'
import { LinkToSource, Showtime, Review } from 'components'
import { LinksData, Combinations, Banners, Result } from 'store'

export const App = () => {
  return (
    <LinksData.Provider>
      <Combinations.Provider>
        <Banners.Provider>
          <Result.Provider>
            <div className="App">
              <header className="App-header">
                <div className="App-header-text">
                  In vino veritas
                  In vino veritas
                  In vino veritas
                  In vino veritas
                </div>
                {/* <img src='http://127.0.0.1:3006/imageUrl/https%3A%2F%2Fimages.pexels.com%2Fphotos%2F36717%2Famazing-animal-beautiful-beautifull.jpg%3Fcs%3Dsrgb%26dl%3Dflight-landscape-nature-sky-36717.jpg%26fm%3Djpg' /> */}
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
          </Result.Provider>
        </Banners.Provider>
      </Combinations.Provider>
    </LinksData.Provider>
  )
}
