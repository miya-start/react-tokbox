import { useState } from 'react'
import { OTSubscriber } from 'opentok-react'
import CheckBox from './CheckBox'

function Subscriber() {
  const [error, setError] = useState()
  const [isAudio, setIsAudio] = useState(true)
  const [isVideo, setIsVideo] = useState(true)

  const handleAudio = (isChecked) => {
    setIsAudio(isChecked)
  }

  const handleVideo = (isChecked) => {
    setIsVideo(isChecked)
  }

  const handleError = (err) => {
    setError('Failed to connect!')
    console.error(err)
  }

  return (
    <div className="subscriber">
      Subscriber
      {error && <div id="error">{error}</div>}
      <OTSubscriber
        properties={{
          subscribeToAudio: isAudio,
          subscribeToVideo: isVideo,
        }}
        onError={handleError}
      />
      <CheckBox
        label="Subscribe to Audio"
        initialChecked={isAudio}
        onChange={handleAudio}
      />
      <CheckBox
        label="Subscribe to Video"
        initialChecked={isVideo}
        onChange={handleVideo}
      />
    </div>
  )
}

export default Subscriber
