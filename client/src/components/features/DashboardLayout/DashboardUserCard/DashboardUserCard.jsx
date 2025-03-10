const DashboardUserCard = ({ user }) => {
  const { name, email, avatar, role } = user;
  return (
    <div className="card border-accent-200 sm:min-w-2xs relative flex-auto border p-5 sm:max-w-xs sm:flex-1">
      <div className="card-image mx-auto">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src={avatar} alt={name} />
          </div>
        </div>
      </div>
      <div className="card-title mt-5 flex-col gap-0">
        <h6 className="font-bold">{name}</h6>
        <p className="text-text-secondary body-sm font-normal">{email}</p>
      </div>
      <div className="card-actions mt-3 justify-between">
        <button className="tw-btn tw-btn-cancel btn-sm flex-auto">
          Delete
        </button>
        {role === "admin" ? (
          <button className="tw-btn tw-btn-destructive btn-sm flex-auto">
            Revoke Admin
          </button>
        ) : (
          <button className="tw-btn tw-btn-destructive btn-sm flex-auto">
            Promote to Admin
          </button>
        )}
      </div>
      {role === "admin" && (
        <div className="tw-badge tw-badge-admin absolute right-4 top-4">
          Admin
        </div>
      )}
    </div>
  );
};

export default DashboardUserCard;
