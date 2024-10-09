import React from 'react'

export default function TripCard() {
  return (
    <div className='relative z-30 text-white'>
        <p className='font-semibold text-xl'>Trip to Cuba</p>
        <p className='text-xs mb-3 text-gray-200'>14 - 29 June | Mr Joseph</p>
        <div className="flex gap-5">
            {[1,2,3].map(() => (
                <div className="h-10 w-10 bg-rose-50 rounded-full border-2 grid place-content-center">
                    <p></p>
                </div>
            ))}
        </div>
        <p className='font-semibold text-sm mt-2'>24 People going</p>
    </div>
  )
}
