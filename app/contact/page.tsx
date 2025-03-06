import React from 'react'
import { Button } from '@/components/ui/button'
const Contact  = () => {
  return (
    <div className='bg-gray-50 min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='py-16'>
            <div className=''>
                <h1 className='text-2xl font-bold text-blue-500 uppercase text-center'>Contactez-nous</h1>
            </div>
            <div>
                <form className='max-w-2xl mx-auto grid grid-cols-1 gap-4 shadow-md p-8 rounded-md'>
                    <div>
                        <label htmlFor="name" className=''>Nom</label>
                        <input type="text" id="name" name="name" className='w-full p-2 rounded-md bg-gray-100 border-none border-gray-300' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className='w-full p-2 rounded-md bg-gray-100 border-none border-gray-300' />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={4} cols={20} name="message" className='w-full p-2 rounded-md bg-gray-100 border-none border-gray-300' />
                    </div>
                    <Button type="submit" className='bg-blue-500 text-white px-2 py-2 rounded-md'>Envoyer</Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact 