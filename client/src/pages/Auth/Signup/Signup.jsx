import Button from "@/components/common/Button/Button";
import AuthFormWrapper from "@/components/layout/Auth/AuthFormWrapper";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission here
    console.log(data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <AuthFormWrapper
      title="Create a new account"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkTo="/sign-in"
      showSocialLogin={true}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Fullname</legend>
          <input
            type="text"
            className={`input w-full ${errors.name ? "border-red-500" : ""}`}
            {...register("name", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              maxLength: {
                value: 50,
                message: "Name cannot exceed 50 characters",
              },
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </fieldset>
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
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className={`input w-full ${errors.password ? "border-red-500" : ""}`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must include uppercase, lowercase, number and special character",
              },
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </fieldset>
        <Button
          variant="primary"
          fullWidth
          className="mb-6 mt-5"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner loading-md mr-2"></span>{" "}
              Creating account...
            </>
          ) : (
            "Sign up"
          )}
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default SignUp;
