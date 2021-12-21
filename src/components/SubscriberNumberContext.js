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

function useSubscriberNumberUpdate() {
  const context = useContext(SubscriberNumberUpdateContext)
  if (context === undefined) {
    throw new Error(
      'useSubscriberNumberUpdate must be used within a SubscriberNumberProvider'
    )
  }
  return context
}

export {
  SubscriberNumberProvider,
  useSubscriberNumberState,
  useSubscriberNumberUpdate,
}
