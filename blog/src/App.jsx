import { useState } from 'react'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  return (
    <div className='bg-amber-300'>
      <h1>Welcome to the Blog App</h1>
      <p>this is the blog website</p>
    </div>
  )
}

export default App
