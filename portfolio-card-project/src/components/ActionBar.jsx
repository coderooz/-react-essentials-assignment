import { Sun, MoonStar, Heart, Image } from "lucide-react";

export default function ActionBar({
  likes,
  isDark,
  onLike,
  onThemeToggle,
  onImageChange,
}) {
  return (
    <div className="actions">
      <button className="cardBtn" onClick={onThemeToggle}>
        {isDark ? <Sun size={16} /> : <MoonStar size={16} />}
        Theme
      </button>

      <button className="cardBtn" onClick={onImageChange}>
        <Image size={16} />
        Photo
      </button>

      <button className="cardBtn like" onClick={onLike}>
        <Heart size={16} />
        {likes}
      </button>

      <button
        className="cardBtn"
        onClick={() => alert("Contact clicked")}
      >
        ✉️ Contact
      </button>
    </div>
  );
}
