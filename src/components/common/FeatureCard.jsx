function FeatureCard({ Icon, title, description }) {
  return (
    <div
      className="rounded-3xl border p-8 transition-all duration-300
      hover:-translate-y-2 hover:border-emerald-500"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
        style={{
          background: "var(--primary)",
        }}
      >
        <Icon color="black" size={26} />
      </div>

      <h3
        className="text-2xl font-bold mb-4"
        style={{
          color: "var(--heading)",
        }}
      >
        {title}
      </h3>

      <p
        className="leading-7"
        style={{
          color: "var(--muted)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;