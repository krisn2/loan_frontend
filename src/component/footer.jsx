import React from 'react'

const footer = () => {
  return (
    <div className='bg-neutral-900 w-full pt-10 p-10'>
        <div className=" ">
            <div className="flex justify-center gap-3">
                <p className="text-neutral-300 ">Copyright © 2023. All rights reserved.</p>
                <p> Powered by <span className="text-violet-400">Ofin</span> </p><br />
                <p> Deveploped by <a href="https://krisn-sarone.vercel.app/" className='text-violet-400'>Krishna sarone</a></p><br />
            </div>
        </div>
    </div>
  )
}

export default footer