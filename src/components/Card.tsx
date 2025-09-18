"use client";

import { ReactNode } from "react";
import { FaSeedling } from "react-icons/fa"; // ✅ import correct de l’icône

type CardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
};

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <div className="text-green-700 text-4xl mb-4">
        {icon || <FaSeedling />} {/* ✅ si aucun icon est passé → FaSeedling par défaut */}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
