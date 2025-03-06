import Script from 'next/script'
import React from 'react'


const contact = () => {
  return (
    <div>
      <Script>
        {` alert("Welcome to Contact Page") `}
      </Script>
      Contact
    </div>
  )
}

export default contact

export const metadata = {
  title: " Contact Facebook - Connect with the world",
  description: "This is a page where you can facebook and we can connect with the world",
};