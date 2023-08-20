import { star } from "../assets/icons";
import { reviews } from "../constants";
const CustomerCard = () => {
  return (
    <>
      {reviews.map((review, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <img
            src={review.imgURL}
            alt={review.customerName}
            className="w-[120px] h-[120px] rounded-full object-cover"
          />
          <p className="info-text max-w-sm mt-6 text-center">
            {review.feedback}
          </p>
          <div className="flex mt-3">
            <img
              src={star}
              alt="star"
              width={24}
              height={24}
              className="mr-3"
            />
            <p className="info-text">({review.rating})</p>
          </div>
          <h2 className="text-3xl font-montserrat font-bold mt-2">
            {review.customerName}
          </h2>
        </div>
      ))}
    </>
  );
};

export default CustomerCard;
