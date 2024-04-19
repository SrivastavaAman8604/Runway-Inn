import React from 'react'

const Button = () => {
  return (
    <div>
       <button
       className="btn btn-danger"
            style={{
                position: 'fixed',
                bottom: '5%',
                right: '5%',
                zIndex: 99999,
            }}
        >
            Book Now
        </button>
    </div>
  )
}

export default Button
