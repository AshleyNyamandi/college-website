import { FiStar } from "react-icons/fi";

const Ratings = ({rating = 0}) => {
  return (
    Array.from({ length:5 }).map((_, index) => (
        <div className="" key={index}>
            <FiStar
                size={25}
                strokeWidth={0}
                fill={index + 1 <= rating ? "gold" : "#D6DBDF"}
            />
        </div>
    ))
  )
}

export default Ratings