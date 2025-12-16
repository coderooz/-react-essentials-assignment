export default function SkillChip({ label, theme }) {
  return (
    <span className={`chip ${theme === "dark" ? "chip_dark" : "chip_light"}`}>
      {label}
    </span>
  );
}
