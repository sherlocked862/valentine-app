'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="valentine-container text-center">
      <div className="text-6xl mb-4">💔</div>
      <h2 className="text-2xl font-bold text-valentine-red mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Don't worry, this is just a technical glitch. Our love for you remains strong!
      </p>
      <button
        className="bg-valentine-pink hover:bg-valentine-red text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
        onClick={reset}
      >
        Try again 💖
      </button>
    </div>
  )
}