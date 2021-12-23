import { createContext, useContext, useState } from 'react'

const SubscriberNumberStateContext = createContext(0)
const SubscriberNumberUpdateContext = createContext()

function SubscriberNumberProvider({ children }) {
  const [subscriberNumber, setSubscriberNumber] = useState(0)
  return (
    <SubscriberNumberStateContext.Provider value={subscriberNumber}>
      <SubscriberNumberUpdateContext.Provider value={setSubscriberNumber}>
        {children}
      </SubscriberNumberUpdateContext.Provider>
    </SubscriberNumberStateContext.Provider>
  )
}

function useSubscriberNumberState() {
  const context = useContext(SubscriberNumberStateContext)
  if (context === undefined) {
    throw new Error(
      'useSubscriberNumberState must be used within a SubscriberNumberProvider'
    )
  }
  return context
}

function useCalcVideoSize() {
  const subscriberNumber = useSubscriberNumberState()
  const videoNumber = subscriberNumber + 1
  const videoWidth = `${100 / Math.ceil(Math.sqrt(videoNumber))}vw`
  const videoHeight = `${100 / Math.round(Math.sqrt(videoNumber))}vh`
  return [videoWidth, videoHeight]
}

function useSubscriberNumberUpdate() {
  const context = useContext(SubscriberNumberUpdateContext)
  if (context === undefined) {
    throw new Error(
      'useSubscriberNumberUpdate must be used within a SubscriberNumberProvider'
    )
  }
  return context
}

export { SubscriberNumberProvider, useCalcVideoSize, useSubscriberNumberUpdate }
