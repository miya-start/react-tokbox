import { useEffect, useState, useRef } from 'react'
import { OTSession, preloadScript } from 'opentok-react'
import ConnectionStatus from './components/ConnectionStatus'
import CustomOTStreams from './components/CustomOTStreams'
import HeadlessDialog from './components/HeadlessDialog'
import Menu from './components/Menu'
import Publisher from './components/Publisher'
import Subscriber from './components/Subscriber'
import VideosWrapper from './components/VideosWrapper'
import { SubscriberNumberProvider } from './contexts/subscriber-number-context'
import { VideoProvider } from './contexts/video-context'

function App({ apiKey, sessionId, token }) {
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState()
  const savedIsConnected = useRef(isConnected)

  const sessionConnected = () => setIsConnected(true)
  const sessionDisconnected = () => setIsConnected(false)
  const handleError = (err) => {
    setError('Failed to connect!')
    console.error(err)
  }

  useEffect(() => {
    if (savedIsConnected.current !== isConnected) {
      savedIsConnected.current = isConnected
      setIsConnected(isConnected)
      console.log('isConnected:', isConnected)
    }
  }, [isConnected, setIsConnected])

  return (
    <OTSession
      apiKey={apiKey}
      sessionId={sessionId}
      token={token}
      eventHandlers={{ sessionConnected, sessionDisconnected }}
      onError={handleError}
    >
      <VideoProvider>
        <SubscriberNumberProvider>
          <VideosWrapper>
            {error && <HeadlessDialog msg={error} />}
            <Publisher />
            <CustomOTStreams>
              <Subscriber />
            </CustomOTStreams>
          </VideosWrapper>
        </SubscriberNumberProvider>
        <Menu />
      </VideoProvider>
    </OTSession>
  )
}

export default preloadScript(App)
