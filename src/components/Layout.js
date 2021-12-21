import { useSubscriberNumberState } from './SubscriberNumberContext'

export default function Layout({ children }) {
  const subscriberNumber = useSubscriberNumberState()
  console.log(subscriberNumber)
  return <div className="grid grid-cols-2 gap-2">{children}</div>
}
