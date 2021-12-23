import { useState } from 'react'
import { OTSession, preloadScript } from 'opentok-react'
import ConnectionStatus from './components/ConnectionStatus'
import CustomOTStreams from './components/CustomOTStreams'
import Layout from './components/Layout'
import Publisher from './components/Publisher'
import Subscriber from './components/Subscriber'
import { SubscriberNumberProvider } from './contexts/SubscriberNumberContext'

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
      <SubscriberNumberProvider>
        <Layout>
          {/* {error && <div id="error">{error}</div>} */}
          {/* <ConnectionStatus connected={connected} /> */}
          <Publisher />
          <CustomOTStreams>
            <Subscriber />
          </CustomOTStreams>
        </Layout>
      </SubscriberNumberProvider>
    </OTSession>
  )
}

export default preloadScript(App)
