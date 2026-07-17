import FeatureCard from "../../components/common/FeatureCard";
import features from "../../data/Features";

function Features() {
  return (
    <section className="w-[92%] max-w-7xl mx-auto py-28">

      <div className="text-center">

        <h2
          className="text-5xl font-bold"
          style={{
            color: "var(--heading)",
          }}
        >
          Built for Real Understanding
        </h2>

        <p
          className="mt-5 text-lg"
          style={{
            color: "var(--muted)",
          }}
        >
          Learn by experimenting instead of memorizing.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            Icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}

      </div>

    </section>
  );
}

export default Features;