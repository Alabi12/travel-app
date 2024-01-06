import PropTypes from 'prop-types'

function Message({message}) {

    Message.propTypes = {
        message: PropTypes.string.isRequired
    }
  return (
    <div>{message}</div>
  )
}

export default Message;