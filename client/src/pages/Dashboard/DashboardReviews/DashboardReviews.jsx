import Button from "@/components/common/Button/Button";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import SortOptions from "@/components/common/SortOptions/SortOptions";
import DashboardReviewCard from "@/components/features/DashboardLayout/DashboardReviewCard/DashboardReviewCard";
import { updateTitle } from "@/utils/updateTitle";
import { useEffect } from "react";
import { HiPlus } from "react-icons/hi2";
import { useOutletContext } from "react-router";

const DashboardReviews = () => {
  const { setHeaderTitle } = useOutletContext();

  useEffect(() => {
    setHeaderTitle("Reviews Management");
    return () => setHeaderTitle("Dashboard");
  }, [setHeaderTitle]);

  updateTitle("Reviews - Dashboard");

  const reviewsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Marketing Director",
      companyName: "TechCorp",
      date: "15 Mar 2024",
      reviewText:
        "The creative team delivered exceptional results for our brand. Their attention to detail and innovative approach helped us stand out in the market.",
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "CEO",
      companyName: "Innovate Solutions",
      date: "22 Jun 2024",
      reviewText:
        "Working with this agency was a game-changer for our business. Their web development expertise transformed our online presence completely.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      designation: "Brand Manager",
      companyName: "StyleHouse",
      date: "08 Sep 2024",
      reviewText:
        "The digital marketing campaign they created exceeded our expectations. We saw a 150% increase in engagement within the first month.",
    },
    {
      id: 4,
      name: "David Thompson",
      designation: "Product Owner",
      companyName: "NextGen Apps",
      date: "12 Jan 2025",
      reviewText:
        "Their UI/UX design work is outstanding. They perfectly understood our vision and delivered a user interface that our customers love.",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      designation: "Creative Director",
      companyName: "Digital Spark",
      date: "03 Apr 2025",
      reviewText:
        "The content strategy they developed has helped us build a strong brand voice. Our social media presence has never been better.",
    },
  ];
  return (
    <section className="h-full w-full">
      <div className="action-bar border-accent-200 flex flex-wrap items-center justify-between gap-4 border-b pb-10">
        <SearchBar />
        <div className="flex items-center gap-4">
          <SortOptions />
          <Button
            variant="primary"
            size="sm"
            className="flex-auto md:flex-none"
          >
            <HiPlus size="1.25em" />
            <span className="hidden md:block">Add new</span>
          </Button>
        </div>
      </div>
      <div className="tw-badge tw-badge-info badge-sm float-right mt-2 rounded-DEFAULT">
        Total: {reviewsData.length}
      </div>
      <div className="mx-0 my-10 flex w-full flex-wrap justify-start gap-5 px-0">
        {reviewsData.map((review) => (
          <DashboardReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default DashboardReviews;
