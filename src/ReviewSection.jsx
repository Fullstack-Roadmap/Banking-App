import Review from "./Review";
import React from "react";
import reviewImage1 from "./assets/Ellipse.png";
import reviewImage2 from "./assets/Ellipse (1).png";
import reviewImage3 from "./assets/Ellipse (2).png";

const ReviewSection = () => {
  return (
    <>
      <div className="flex justify-center mx-[3rem] gap-[2vw] sm:grid sm:gap-10 mt-16">
        <Review
          review="Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."
          image={reviewImage1}
          name="Hadid Khan"
          job="UIUX Designer"
        />
        <Review
          review="It's both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."
          image={reviewImage2}
          name="Wade Warren"
          job="Web Designer"
        />
        <Review
          review="I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "
          image={reviewImage3}
          name="Jenny Wilson"
          job="Trust Administrator"
        />
      </div>
    </>
  );
};

export default ReviewSection;
