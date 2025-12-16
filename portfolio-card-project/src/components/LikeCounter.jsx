import { useState } from "react";

export default function LikeCounter() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="likes">
      <button onClick={() => setLikes(likes + 1)}>❤️</button>
      <span>{likes}</span>
    </div>
  );
}
