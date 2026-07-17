import { Link } from "react-router-dom";
import {
    getFavorites,
    toggleFavorite,
} from "../../utils/favorites";
import { useState } from "react";
import { Star } from "lucide-react";

function StructureCard({id,title,description,Icon,path}) {
  const [favorites,setFavorites] =
    useState(getFavorites());

const isFavorite =
    favorites.includes(id);
  return (
    <Link to={path}>
      <div className="relative rounded-2xl border p-7 cursor-pointer transition-all duration-300
    hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
    
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <button
    onClick={(e) => {

        e.preventDefault();
        e.stopPropagation();

        const updated =
            toggleFavorite(id);

        setFavorites(updated);
    }}
    className="absolute top-5 right-5"
>
    <Star
        size={22}
        fill={
            isFavorite
                ? "#F59E0B"
                : "none"
        }
        color={
            isFavorite
                ? "#F59E0B"
                : "var(--muted)"
        }
    />
</button>
      <div>
        <Icon
          size={30}
          className="text-emerald-500"
        />

        <h3
          className="text-2xl font-bold mt-5"
          style={{
            color: "var(--heading)",
          }}
        >
          {title}
        </h3>

        <p
          className="mt-4 leading-7"
          style={{
            color: "var(--muted)",
          }}
        >
          {description}
        </p>
      </div>

      {/* Badge */}

      <div className="mt-8">
        <span
          className="
          inline-flex
          items-center
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          "
          style={{
            background: "rgba(16,185,129,.12)",
            color: "#10B981",
          }}
        >
          ● Interactive
        </span>
      </div>
    </div>
    </Link>
  );
}

export default StructureCard;