import { updateTitle } from "@/utils/updateTitle";
import fallbackAvatar from "@assets/images/customers/fallbackAvatar.png";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineCamera } from "react-icons/hi2";
import { useOutletContext } from "react-router";
import Button from "../../../components/common/Button/Button";

const DashboardSettings = () => {
  const { setHeaderTitle } = useOutletContext();

  useEffect(() => {
    setHeaderTitle("Account Management");
    return () => setHeaderTitle("Dashboard");
  }, [setHeaderTitle]);

  updateTitle("Settings - Dashboard");

  // React Hook Form for personal information
  const {
    register: registerPersonal,
    handleSubmit: handleSubmitPersonal,
    formState: { errors: personalErrors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      timezone: "Pacific Standard Time",
    },
  });

  // React Hook Form for password change
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
    watch,
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // React Hook Form for logout sessions
  const {
    register: registerLogout,
    handleSubmit: handleSubmitLogout,
    formState: { errors: logoutErrors },
  } = useForm({
    defaultValues: {
      logoutPassword: "",
    },
  });

  // Avatar state
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(fallbackAvatar);

  // Handle avatar change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Form submission handlers
  const onPersonalInfoSubmit = (data) => {
    console.log("Submitting personal info:", data);
    // API call would go here
  };

  const onPasswordSubmit = (data) => {
    console.log("Submitting password change:", data);
    // API call would go here
  };

  const onLogoutOtherSessions = (data) => {
    console.log(
      "Logging out other sessions with password:",
      data.logoutPassword,
    );
    // API call would go here
  };

  const handleDeleteAccount = () => {
    // Handle account deletion (show confirmation modal first)
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone.",
      )
    ) {
      console.log("Deleting account");
      // API call would go here
    }
  };

  return (
    <div className="space-y-12">
      {/* Personal Information Section */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-secondary-900 mb-1 text-xl font-semibold">
            Personal Information
          </h2>
          <p className="text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmitPersonal(onPersonalInfoSubmit)}>
            <div className="mb-6 flex items-center">
              <div className="relative mr-6">
                <img
                  src={avatarPreview}
                  alt="User avatar"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <label
                  htmlFor="avatar-upload"
                  className="text-secondary-900 absolute -bottom-2 -right-2 cursor-pointer rounded-full border border-gray-200 bg-white p-1 hover:bg-gray-100"
                >
                  <HiOutlineCamera className="h-4 w-4" />
                </label>
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/jpeg, image/png, image/gif"
                  onChange={handleAvatarChange}
                />
              </div>

              <div>
                <label
                  htmlFor="avatar-button"
                  className="text-secondary-900 mb-1 block text-sm font-medium"
                >
                  Change avatar
                </label>
                <p className="text-xs text-gray-500">
                  JPG, GIF or PNG. 1MB max.
                </p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-secondary-900 mb-1 block text-sm font-medium"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  className={`input ${personalErrors.firstName ? "input-error" : ""}`}
                  placeholder="John"
                  {...registerPersonal("firstName", {
                    required: "First name is required",
                  })}
                />
                {personalErrors.firstName && (
                  <p className="mt-1 text-xs text-red-500">
                    {personalErrors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-secondary-900 mb-1 block text-sm font-medium"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  className={`input ${personalErrors.lastName ? "input-error" : ""}`}
                  placeholder="Doe"
                  {...registerPersonal("lastName", {
                    required: "Last name is required",
                  })}
                />
                {personalErrors.lastName && (
                  <p className="mt-1 text-xs text-red-500">
                    {personalErrors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-secondary-900 mb-1 block text-sm font-medium"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                className={`input ${personalErrors.email ? "input-error" : ""}`}
                placeholder="john.doe@example.com"
                {...registerPersonal("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {personalErrors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {personalErrors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="username"
                className="text-secondary-900 mb-1 block text-sm font-medium"
              >
                Username
              </label>
              <div className="flex overflow-hidden rounded border border-gray-200 bg-gray-50">
                <span className="border-r border-gray-200 bg-gray-100 px-3 py-2 text-gray-500">
                  example.com/
                </span>
                <input
                  id="username"
                  className={`flex-1 border-0 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 ${
                    personalErrors.username ? "bg-red-50" : ""
                  }`}
                  placeholder="janesmith"
                  {...registerPersonal("username", {
                    required: "Username is required",
                  })}
                />
              </div>
              {personalErrors.username && (
                <p className="mt-1 text-xs text-red-500">
                  {personalErrors.username.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="timezone"
                className="text-secondary-900 mb-1 block text-sm font-medium"
              >
                Timezone
              </label>
              <select
                id="timezone"
                className="select select-bordered w-full max-w-xs"
                {...registerPersonal("timezone")}
              >
                <option value="Pacific Standard Time">
                  Pacific Standard Time
                </option>
                <option value="Eastern Standard Time">
                  Eastern Standard Time
                </option>
                <option value="Central Standard Time">
                  Central Standard Time
                </option>
                <option value="Mountain Standard Time">
                  Mountain Standard Time
                </option>
                <option value="GMT">Greenwich Mean Time (GMT)</option>
                <option value="UTC">Universal Coordinated Time (UTC)</option>
              </select>
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                className="tw-btn tw-btn-primary"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Change Password Section */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-secondary-900 mb-1 text-xl font-semibold">
            Change password
          </h2>
          <p className="text-sm text-gray-500">
            Update your password associated with your account.
          </p>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmitPassword(onPasswordSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="currentPassword"
                className="text-secondary-900 mb-1 block text-sm font-medium"
              >
                Current password
              </label>
              <input
                type="password"
                id="currentPassword"
                className={`input ${passwordErrors.currentPassword ? "input-error" : ""}`}
                {...registerPassword("currentPassword", {
                  required: "Current password is required",
                })}
              />
              {passwordErrors.currentPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {passwordErrors.currentPassword.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="newPassword"
                className="text-secondary-900 mb-1 block text-sm font-medium"
              >
                New password
              </label>
              <input
                type="password"
                id="newPassword"
                className={`input ${passwordErrors.newPassword ? "input-error" : ""}`}
                {...registerPassword("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {passwordErrors.newPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {passwordErrors.newPassword.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="text-secondary-900 mb-1 block text-sm font-medium"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={`input ${passwordErrors.confirmPassword ? "input-error" : ""}`}
                {...registerPassword("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
              />
              {passwordErrors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {passwordErrors.confirmPassword.message}
                </p>
              )}
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                className="tw-btn tw-btn-primary"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Log Out Other Sessions Section */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-secondary-900 mb-1 text-xl font-semibold">
            Log out other sessions
          </h2>
          <p className="text-sm text-gray-500">
            Please enter your password to confirm you would like to log out of
            your other sessions across all of your devices.
          </p>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmitLogout(onLogoutOtherSessions)}>
            <div className="mb-6">
              <label
                htmlFor="logoutPassword"
                className="text-secondary-900 mb-1 block text-sm font-medium"
              >
                Your password
              </label>
              <input
                type="password"
                id="logoutPassword"
                className={`input ${logoutErrors.logoutPassword ? "input-error" : ""}`}
                {...registerLogout("logoutPassword", {
                  required: "Password is required to log out other sessions",
                })}
              />
              {logoutErrors.logoutPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {logoutErrors.logoutPassword.message}
                </p>
              )}
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                className="tw-btn tw-btn-primary"
              >
                Log out other sessions
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Delete Account Section */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-secondary-900 mb-1 text-xl font-semibold">
            Delete account
          </h2>
          <p className="text-sm text-gray-500">
            No longer want to use our service? You can delete your account here.
            This action is not reversible. All information related to this
            account will be deleted permanently.
          </p>
        </div>

        <div className="lg:col-span-2">
          <Button
            onClick={handleDeleteAccount}
            variant="danger"
            className="tw-btn tw-btn-destructive"
          >
            Yes, delete my account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DashboardSettings;
