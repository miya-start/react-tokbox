import { useState } from 'react'
import CustomOTSubscriber from './CustomOTSubscriber'

function Subscriber() {
  const [error, setError] = useState()

  const handleError = (err) => {
    setError('Failed to connect!')
    console.error(err)
  }

  return (
    <>
      {error && <div id="error">{error}</div>}
      <CustomOTSubscriber
        properties={{
          subscribeToAudio: true,
          subscribeToVideo: true,
        }}
        onError={handleError}
      />
    </>
  )
}

export default Subscriber
