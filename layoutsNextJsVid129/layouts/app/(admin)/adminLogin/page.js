import React from 'react'

const page = () => {
  return (
    <div>
      Admin Login
      <p>
        Feel Free to Login as an admin
      </p>
    </div>
  )
}

export default page

export async function generateMetadata({ params }) {
  return {
    title: 'Login',
  }
}