import { dsSections } from "../../data/DsCards";
import StructureCard from "../../components/common/StructureCard";

function DataStructures() {
  return (
    <div className="px-10 py-8">

      <h1
        className="text-5xl font-bold"
        style={{
          color: "var(--heading)",
        }}
      >
        Data Structures
      </h1>

      <p
        className="mt-3 text-lg"
        style={{
          color: "var(--muted)",
        }}
      >
        Pick a structure to experiment with.
        Every card opens an interactive playground.
      </p>

      {dsSections.map((section) => (

        <div
          key={section.title}
          className="mt-14"
        >
          <h2
            className="uppercase text-sm tracking-[4px] mb-8"
            style={{
              color: "var(--muted)",
            }}
          >
            {section.title}
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">

            {section.items.map((item) => (

              <StructureCard
                id={item.id}
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.icon}
                path={item.path}
              />

            ))}

          </div>

        </div>

      ))}
    </div>
  );
}

export default DataStructures;