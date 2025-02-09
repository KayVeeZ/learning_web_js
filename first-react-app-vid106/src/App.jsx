import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {


  return (
    <>
      <Navbar />
      <main>
        This is my site's main content.
      </main>
      <div className="cards">
        <Card title="Card 1" description ="Card 1 desc" source="https://sphero.com/cdn/shop/articles/coding_languages_1200x.png?v=1619126283"/>
        <Card title="Card 2" description ="Card 2 desc" source="https://media.licdn.com/dms/image/v2/D4D12AQF6mW4EuB-99Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692951785182?e=1744848000&v=beta&t=At991jg23Nv-ZKhP1qkVJpNh3UCNj19A8w0TuNO_utA"/>
        <Card title="Card 3" description ="Card 3 desc" source="https://sphero.com/cdn/shop/articles/coding_languages_1200x.png?v=1619126283"/>
        <Card title="Card 4" description ="Card 4 desc" source="https://sphero.com/cdn/shop/articles/coding_languages_1200x.png?v=1619126283"/>
      </div>
      <Footer />
    </>
  )
}

export default App
