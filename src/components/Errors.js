import React from 'react'

const Errors = ({ errors }) => {
  return <div>{errors && errors.length > 0 && errors.map((error) => <p style={{ color: 'red' }}>{error}</p>)}</div>
}

export default Errors
