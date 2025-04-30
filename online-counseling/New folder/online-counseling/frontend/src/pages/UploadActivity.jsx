import { useState } from "react";

const UploadActivity = () => {
  const [activity, setActivity] = useState({
    title: "",
    description: "",
    link: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Activity to upload:", activity);
    // Later send to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Assign New Activity</h3>
      <input
        type="text"
        placeholder="Title"
        value={activity.title}
        onChange={(e) => setActivity({ ...activity, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={activity.description}
        onChange={(e) => setActivity({ ...activity, description: e.target.value })}
        required
      />
      <input
        type="url"
        placeholder="Activity Link"
        value={activity.link}
        onChange={(e) => setActivity({ ...activity, link: e.target.value })}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadActivity;
