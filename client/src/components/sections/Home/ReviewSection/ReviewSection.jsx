import customer1 from "@assets/images/customers/customer-1.png";
import customer2 from "@assets/images/customers/customer-2.png";
import customer3 from "@assets/images/customers/customer-3.png";
import customer4 from "@assets/images/customers/customer-4.png";
import customer5 from "@assets/images/customers/customer-5.png";
import ReviewCard from "@components/sections/Home/ReviewSection/ReviewCard";

const ReviewSection = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Marketing Director",
      companyName: "TechCorp",
      imageUrl: customer1,
      reviewText:
        "The creative team delivered exceptional results for our brand. Their attention to detail and innovative approach helped us stand out in the market.",
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "CEO",
      companyName: "Innovate Solutions",
      imageUrl: customer2,
      reviewText:
        "Working with this agency was a game-changer for our business. Their web development expertise transformed our online presence completely.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      designation: "Brand Manager",
      companyName: "StyleHouse",
      imageUrl: customer3,
      reviewText:
        "The digital marketing campaign they created exceeded our expectations. We saw a 150% increase in engagement within the first month.",
    },
    {
      id: 4,
      name: "David Thompson",
      designation: "Product Owner",
      companyName: "NextGen Apps",
      imageUrl: customer4,
      reviewText:
        "Their UI/UX design work is outstanding. They perfectly understood our vision and delivered a user interface that our customers love.",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      designation: "Creative Director",
      companyName: "Digital Spark",
      imageUrl: customer5,
      reviewText:
        "The content strategy they developed has helped us build a strong brand voice. Our social media presence has never been better.",
    },
  ];

  return (
    <section className="2xl:max-w-7/8 my-10 md:my-20 2xl:mx-auto">
      <h2 className="text-center text-2xl font-bold md:text-4xl">
        Clients <span className="text-secondary">Feedback</span>
      </h2>

      <div className="xl:px-30 mt-10 flex flex-wrap items-center justify-center gap-5 px-5 md:px-10">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
