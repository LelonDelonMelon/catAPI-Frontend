import { useState } from 'react'
import CatGallery from './components/CatGallery'

export default function App() {
  return (
    <div className='bg-slate-600'>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
        <CatGallery></CatGallery>
      </h1>
    </div>
  )
}