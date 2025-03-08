import Button from "@/components/common/Button/Button";
import AuthFormWrapper from "@/components/layout/Auth/AuthFormWrapper";
import { useForm } from "react-hook-form";
import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission here
    console.log(data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <AuthFormWrapper narrowForm={true}>
      <h1 className="mb-3 flex items-center gap-3 text-2xl font-bold">
        <Link to="/sign-in">
          <HiArrowLeft />
        </Link>
        Forgot password
      </h1>
      <p className="mb-5 text-sm text-gray-600">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>

      {isSubmitSuccessful ? (
        <div className="mb-3 rounded-md bg-green-50 p-4 text-center">
          <p className="font-medium text-green-600">Reset link sent!</p>
          <p className="mt-1 text-sm text-gray-600">
            Please check your email for instructions to reset your password.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              className={`input w-full ${errors.email ? "border-red-500" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </fieldset>
          <Button
            variant="primary"
            fullWidth
            className="mb-3 mt-5"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner loading-md mr-2"></span>{" "}
                Sending...
              </>
            ) : (
              "Send reset link"
            )}
          </Button>
        </form>
      )}
    </AuthFormWrapper>
  );
};

export default ForgotPassword;
