export default function NotFound() {
  return (
    <div className="valentine-container text-center">
      <div className="text-6xl mb-4">🔍</div>
      <h2 className="text-2xl font-bold text-valentine-red mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Looks like you're lost in love! But don't worry, the Valentine's magic is waiting for you on the main page.
      </p>
      <a 
        href="/" 
        className="bg-valentine-pink hover:bg-valentine-red text-white font-bold py-3 px-6 rounded-full transition-all duration-300 inline-block"
      >
        Go to Valentine's Page 💕
      </a>
    </div>
  )
}