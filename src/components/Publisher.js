import { useState } from 'react'
import { useCalcVideoSize } from '../contexts/subscriber-number-context'
import CustomOTPublisher from './CustomOTPublisher'
import { useVideoState } from '../contexts/video-context'

function Publisher() {
  const [error, setError] = useState()
  const [isAudio, setIsAudio] = useState(false)

  const [videoSource, setVideoSource] = useState('camera')

  const { isVideo } = useVideoState()

  const [videoWidth, videoHeight] = useCalcVideoSize()

  const handleAudio = (isChecked) => {
    setIsAudio(isChecked)
  }

  const changeVideoSource = () => {
    videoSource !== 'camera'
      ? setVideoSource('camera')
      : setVideoSource('screen')
  }

  const handleError = (err) => {
    setError('Failed to connect!')
    console.error(err)
  }

  return (
    <CustomOTPublisher
      properties={{
        publishAudio: isAudio,
        publishVideo: isVideo,
        videoSource: videoSource === 'screen' ? 'screen' : undefined,
      }}
      videoWidth={videoWidth}
      videoHeight={videoHeight}
      onError={handleError}
    />
    // <>
    //   Publisher
    //   {error && <div id="error">{error}</div>}
    //   <OTPublisher
    //     properties={{
    //       publishAudio: isAudio,
    //       publishVideo: isVideo,
    //       videoSource: videoSource === 'screen' ? 'screen' : undefined,
    //     }}
    //     onError={handleError}
    //   />
    //   <CheckBox label="Share Screen" onChange={changeVideoSource} />
    //   <CheckBox
    //     label="Publish Audio"
    //     initialChecked={isAudio}
    //     onChange={handleAudio}
    //   />
    //   <CheckBox
    //     label="Publish Video"
    //     initialChecked={isVideo}
    //     onChange={handleVideo}
    //   />
    // </>
  )
}
export default Publisher
