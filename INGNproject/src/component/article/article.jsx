import React from 'react'



export const article = () => {
    <div>{data.articles.map((item) => {
        return(
          <>
          <h2>{item.headline}</h2>
          <img src={item.media.url}/>
          </>
        )
      })}</div>
}

