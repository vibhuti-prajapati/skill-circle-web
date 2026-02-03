import { useState } from "react";

const EditProfileView = () => {
  const [form, setForm] = useState({
    name: "User Name",
    email: "user@email.com",
    about:
      "Full stack developer passionate about building scalable apps.",
    skills: "Java, Spring Boot, React",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    banner:
      "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500",
  });
  const [avatarPreview, setAvatarPreview] = useState(
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  );
  const [bannerPreview, setBannerPreview] = useState(null);

  const [avatarFile, setAvatarFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      {/* Banner */}
      <div className="h-32 w-full bg-base-300 relative overflow-hidden">
        {bannerPreview && (
          <img
            src={bannerPreview}
            className="w-full h-full object-cover"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange=""
          className="file-input file-input-sm absolute bottom-2 right-2"
        />
      </div>


      <div className="px-6 pb-6">
        <div className="flex gap-4 -mt-10 items-end">
          <div className="relative">
            <img
              src={form.avatar}
              className="w-24 h-24 rounded-full border-4 border-base-100 object-cover"
            />

            <input
              type="text"
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              className="input input-sm mt-2 w-56"
              placeholder="Avatar URL"
            />
          </div>

          <div className="mb-2 w-full">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input input-bordered w-full mb-2"
              placeholder="Name"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>
        </div>

        {/* About */}
        <div className="mt-4">
          <h4 className="font-semibold mb-1">About</h4>
          <textarea
            name="about"
            value={form.about}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows={3}
          />
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Skills</h4>

          <input
            name="skills"
            value={form.skills}
            onChange={handleChange}
            className="input input-bordered w-full mb-2"
            placeholder="Comma separated skills"
          />

          <div className="flex flex-wrap gap-2">
            {form.skills.split(",").map((skill, i) => (
              <span key={i} className="badge badge-primary">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Save */}
        <div className="mt-6 flex justify-end gap-2">
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </>
  );
};

export default EditProfileView;
