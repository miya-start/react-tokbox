import { useState } from 'react'
import { OTSession, preloadScript } from 'opentok-react'
import ConnectionStatus from './components/ConnectionStatus'
import CustomOTStreams from './components/CustomOTStreams'
import Menu from './components/Menu'
import Publisher from './components/Publisher'
import Subscriber from './components/Subscriber'
import VideosWrapper from './components/VideosWrapper'
import { SubscriberNumberProvider } from './contexts/subscriber-number-context'
import { VideoProvider } from './contexts/video-context'

function App({ apiKey, sessionId, token }) {
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState()

  const sessionConnected = () => setConnected(true)
  const sessionDisconnected = () => setConnected(false)
  const handleError = (err) => {
    setError('Failed to connect!')
    console.error(err)
  }

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
            {/* {error && <div id="error">{error}</div>} */}
            {/* <ConnectionStatus connected={connected} /> */}
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
