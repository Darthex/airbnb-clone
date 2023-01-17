import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {

  const newElement =  data.map(cardItem => {
    return <Card 
      key = {cardItem.id}
      img = {cardItem.coverImg}
      rating = {cardItem.stats.rating}
      reviewCount = {cardItem.stats.reviewCount}
      country = {cardItem.location}
      title = {cardItem.title}
      price = {cardItem.price}
      openSpots = {cardItem.openSpots}
    />
  })

  return(
    <div>
      <Navbar />
      <Hero />
      <section className="card--list">
        {newElement}
      </section>
    </div>
  )
}
