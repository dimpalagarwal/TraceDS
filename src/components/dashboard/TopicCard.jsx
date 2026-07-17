import { ArrowRight } from "lucide-react";

function TopicCard({
  title,
  description,
  Icon,
}) {
  return (
    <div
      className="rounded-2xl border p-7 transition-all duration-300
      hover:border-emerald-500 hover:-translate-y-1 cursor-pointer"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex justify-center items-center mb-6"
        style={{
          background: "rgba(16,185,129,.15)",
        }}
      >
        <Icon
          size={28}
          color="var(--primary)"
        />
      </div>

      <h2
        className="text-2xl font-bold"
        style={{
          color: "var(--heading)",
        }}
      >
        {title}
      </h2>

      <p
        className="mt-4 leading-7"
        style={{
          color: "var(--muted)",
        }}
      >
        {description}
      </p>

      <div
        className="flex items-center gap-2 mt-6 text-emerald-500 font-semibold"
      >
        Open Visualizer

        <ArrowRight size={18}/>
      </div>
    </div>
  );
}

export default TopicCard;