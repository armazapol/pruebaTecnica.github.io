import React from 'react'

const Button2 = ({text, ...props}) => {
  return (
    <div className="bg-[#5b9bd5] border-[#548ec3] border-2 w-full py-3 rounded-full cursor-pointer" {...props}>
    <p className="text-white font-semibold ">{text} </p>
  </div>
  )
}

export default Button2