import React from 'react'
import { Link } from 'react-router'
import {PlusIcon} from "lucide-react"

const Navbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto mx-w-6xl py-4 px-10'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2'>
                <img src='/note.png' className='size-9'></img>
                <h1 className='text-4xl font-bold text-primary font-mono tracking-tighter'>
                    Keep It
                </h1>
                </div>
                <div className='flex items-center gap-4'>
                    <Link to={"/create"} className='btn btn-primary'>
                        <PlusIcon className='size-5'/>
                        <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar