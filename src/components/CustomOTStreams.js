import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import OTSubscriberContext from './OTSubscriberContext'
import { useSubscriberNumberUpdate } from './SubscriberNumberContext'

export default function CustomOTStreams(props, context) {
  const session = props.session || context.session || null
  const streams = props.streams || context.streams || null

  const subscriberNumberUpdate = useSubscriberNumberUpdate()
  subscriberNumberUpdate(streams ? streams.length : 0)

  if (!session) {
    return <div />
  }

  const child = Children.only(props.children)
  console.log(streams.length)

  const childrenWithContextWrapper = Array.isArray(streams)
    ? streams.map((stream) =>
        child ? (
          <OTSubscriberContext stream={stream} key={stream.id}>
            {cloneElement(child)}
          </OTSubscriberContext>
        ) : (
          child
        )
      )
    : null

  return <div>{childrenWithContextWrapper}</div>
}

CustomOTStreams.propTypes = {
  children: PropTypes.element.isRequired,
  session: PropTypes.shape({
    publish: PropTypes.func,
    subscribe: PropTypes.func,
  }),
  streams: PropTypes.arrayOf(PropTypes.object),
}

CustomOTStreams.defaultProps = {
  session: null,
  streams: null,
}

CustomOTStreams.contextTypes = {
  session: PropTypes.shape({
    publish: PropTypes.func,
    subscribe: PropTypes.func,
  }),
  streams: PropTypes.arrayOf(PropTypes.object),
}
