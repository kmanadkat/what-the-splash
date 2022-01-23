import React from 'react'

const Errors = ({ errors }) => {
  return (
    <div>
      {errors &&
        errors.length > 0 &&
        errors.map((error) => (
          <p
            key={error}
            style={{ color: '#ff8c8c', fontSize: 22, fontStyle: 'italic' }}>
            {error}
          </p>
        ))}
    </div>
  )
}

export default Errors
