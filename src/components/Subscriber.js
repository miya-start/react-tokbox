import { useState } from 'react'
import CustomOTSubscriber from './CustomOTSubscriber'
import CheckBox from './CheckBox'

function Subscriber() {
  const [error, setError] = useState()
  const [isAudio, setIsAudio] = useState(false)
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

  const calcHeight = (params) => {}

  return (
    <>
      {error && <div id="error">{error}</div>}
      <CustomOTSubscriber
        properties={{
          subscribeToAudio: isAudio,
          subscribeToVideo: isVideo,
        }}
        onError={handleError}
      />
      {/* <CheckBox
        label="Subscribe to Audio"
        initialChecked={isAudio}
        onChange={handleAudio}
      />
      <CheckBox
        label="Subscribe to Video"
        initialChecked={isVideo}
        onChange={handleVideo}
      /> */}
    </>
  )
}

export default Subscriber
