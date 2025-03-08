import Button from "@/components/common/Button/Button";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-3"
    >
      <div className="form-control w-full">
        <input
          type="text"
          placeholder="Your name / company's name"
          className={`input input-lg w-full ${errors.name ? "input-error" : ""}`}
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && (
          <label className="label">
            <span className="label-text-alt text-error mt-1">
              {errors.name.message}
            </span>
          </label>
        )}
      </div>

      <div className="form-control w-full">
        <input
          type="email"
          placeholder="Your email address"
          className={`input input-lg w-full ${errors.email ? "input-error" : ""}`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <label className="label">
            <span className="label-text-alt text-error mt-1">
              {errors.email.message}
            </span>
          </label>
        )}
      </div>

      <div className="form-control w-full">
        <textarea
          className={`textarea textarea-lg h-40 w-full ${errors.message ? "textarea-error" : ""}`}
          placeholder="Your message"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        ></textarea>
        {errors.message && (
          <label className="label">
            <span className="label-text-alt text-error mt-1">
              {errors.message.message}
            </span>
          </label>
        )}
      </div>

      <Button
        type="submit"
        className={`btn btn-neutral`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="loading loading-spinner loading-md mr-2"></span>{" "}
            Submitting
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default ContactUsForm;
