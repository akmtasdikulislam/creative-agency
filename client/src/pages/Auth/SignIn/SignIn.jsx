import Button from "@/components/common/Button/Button";
import AuthFormWrapper from "@/components/layout/Auth/AuthFormWrapper";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const SignIn = () => {
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
      title="Sign in to your account"
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkTo="/sign-up"
      showSocialLogin={true}
    >
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
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </fieldset>
        <div className="flex items-center justify-between">
          <fieldset className="fieldset">
            <label className="fieldset-label">
              <input
                type="checkbox"
                className="checkbox"
                {...register("rememberMe")}
              />
              Remember me
            </label>
          </fieldset>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
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
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default SignIn;
