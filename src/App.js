import { useState } from 'react'
import { OTSession, OTStreams, preloadScript } from 'opentok-react'
import ConnectionStatus from './components/ConnectionStatus'
import Publisher from './components/Publisher'
import Subscriber from './components/Subscriber'

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
      {error && <div id="error">{error}</div>}
      <ConnectionStatus connected={connected} />
      <Publisher />
      <OTStreams>
        <Subscriber />
      </OTStreams>
    </OTSession>
  )
}

export default preloadScript(App)
