import { useState } from 'react'
import { useCalcVideoSize } from '../contexts/subscriber-number-context'
import CustomOTPublisher from './CustomOTPublisher'
import { useVideoState } from '../contexts/video-context'

function Publisher() {
  const [error, setError] = useState()
  const { isVideo, isAudio, isScreen } = useVideoState()
  const [videoWidth, videoHeight] = useCalcVideoSize()

  const handleError = (err) => {
    setError('Failed to connect!')
    console.error(err)
  }

  return (
    <CustomOTPublisher
      properties={{
        publishAudio: isAudio,
        publishVideo: isVideo,
        videoSource: isScreen === true ? 'screen' : undefined,
      }}
      videoWidth={videoWidth}
      videoHeight={videoHeight}
      onError={handleError}
    />
    // <>
    //   Publisher
    //   {error && <div id="error">{error}</div>}
  )
}
export default Publisher
