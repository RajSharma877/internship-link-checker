import React, { useState } from "react";

function LinkForm({ onLinkSubmit }) {
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLinkSubmit(link);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Paste internship link..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button type="submit">Check Link</button>
    </form>
  );
}

export default LinkForm;
