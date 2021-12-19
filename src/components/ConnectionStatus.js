function ConnectionStatus({ connected }) {
  return (
    <div className="connectionStatus">
      <strong>Status:</strong> {connected ? 'Connected' : 'Disconnected'}
    </div>
  )
}

export default ConnectionStatus
