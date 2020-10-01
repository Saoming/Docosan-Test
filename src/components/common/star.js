import React from "react"
import { FaStar } from "react-icons/fa"

const Star = ({number}) => {

    return (
        <div> 
        { [...Array(parseInt(number)).keys()].map((i) => {
            return <FaStar className="yellow" key={i} size={25} />
        })}
        </div>
    )
}


export default Star