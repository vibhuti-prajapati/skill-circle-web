import GithubActivity from "./GithubActivity";
import { FaEdit } from "react-icons/fa";

const ProfileView = ({ user, editable = false, onEdit }) => {
  return (
    <>
      {/* Banner */}
      <div className="h-32 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="px-6 pb-6">
        {/* Avatar + info */}
        <div className="flex gap-4 -mt-10 items-end">
          <img
            src={user.profileImage}
            className="w-24 h-24 rounded-full border-4 border-base-100 object-cover"
          />

          <div className="mb-2 flex items-center gap-2">
            <div>
              <h3 className="font-bold text-lg">{user.name}</h3>
              <p className="opacity-70 text-sm">{user.email}</p>
            </div>

            {editable && (
              <button
                className="btn btn-xs btn-ghost"
                onClick={onEdit}
              >
                <FaEdit />
              </button>
            )}
          </div>
        </div>

        {/* About */}
        <div className="mt-4">
          <h4 className="font-semibold mb-1">About</h4>
          <p className="text-sm opacity-80">{user.about}</p>
        </div>

        <div className="mt-4">
          <GithubActivity username={user.github} />
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((s, i) => (
              <span key={i} className="badge badge-primary">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
