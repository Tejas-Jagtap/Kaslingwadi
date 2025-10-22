"use client";

import React from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaSeedling,
  FaHeartbeat,
  FaFileAlt,
  FaBolt,
  FaFemale,
  FaUsers,
  FaUserTie,
  FaTint,
  FaPaw,
  FaBookOpen,
  FaFileInvoiceDollar,
  FaChild,
  FaBroom,
  FaRegBuilding,
  FaLeaf,
} from "react-icons/fa";

import { useLanguage } from "@/contexts/LanguageContext";

const Departments = () => {
  const { t, language } = useLanguage();

  const departments = [
    {
      id: 1,
      nameKey:
        language === "en"
          ? "Women and Child Development Department"
          : "महिला व बालविकास विभाग",
      icon: FaFemale,
      color: "from-pink-400 to-pink-600",
      descriptionKey:
        language === "mr"
          ? "महिला आणि बालकांच्या सर्वांगीण विकासासाठी विविध योजना राबविणे."
          : "Implements various schemes for the overall development of women and children.",
      link: "/departments/women-child-development",
    },
    {
      id: 2,
      nameKey:
        language === "en" ? "Water Supply Department" : "पाणीपुरवठा विभाग",
      icon: FaTint,
      color: "from-blue-400 to-blue-600",
      descriptionKey:
        language === "mr"
          ? "ग्रामपंचायतीच्या पाणीपुरवठ्याची देखभाल आणि वितरणाची जबाबदारी."
          : "Responsible for maintenance and distribution of village water supply.",
      link: "/departments/water-supply",
    },
    {
      id: 3,
      nameKey: language === "en" ? "Agriculture Department" : "कृषी विभाग",
      icon: FaLeaf,
      color: "from-green-400 to-green-600",
      descriptionKey:
        language === "mr"
          ? "शेतकऱ्यांना कृषी संबंधित मार्गदर्शन आणि शासकीय योजना उपलब्ध करणे."
          : "Provides farmers with agricultural guidance and government scheme access.",
      link: "/departments/agriculture",
    },
    {
      id: 4,
      nameKey: language === "en" ? "Health Department" : "आरोग्य विभाग",
      icon: FaHeartbeat,
      color: "from-red-400 to-red-600",
      descriptionKey:
        language === "mr"
          ? "ग्रामस्थांच्या आरोग्यविषयक सेवांची जबाबदारी आणि जनजागृती कार्यक्रम."
          : "Responsible for healthcare services and awareness programs for villagers.",
      link: "/departments/health",
    },
    {
      id: 5,
      nameKey:
        language === "en"
          ? "General Administration Department"
          : "सामान्य प्रशासन विभाग",
      icon: FaRegBuilding,
      color: "from-indigo-400 to-indigo-600",
      descriptionKey:
        language === "mr"
          ? "ग्रामपंचायतीचे प्रशासनिक कार्य, नियोजन आणि नियंत्रण."
          : "Handles administrative operations, planning, and management of the Gram Panchayat.",
      link: "/departments/general-administration",
    },
    {
      id: 6,
      nameKey: language === "en" ? "Sanitation Department" : "स्वच्छता विभाग",
      icon: FaBroom,
      color: "from-yellow-400 to-yellow-600",
      descriptionKey:
        language === "mr"
          ? "गावातील स्वच्छता, कचरा व्यवस्थापन आणि स्वच्छ भारत अभियानाची अंमलबजावणी."
          : "Manages village cleanliness, waste management, and Swachh Bharat initiatives.",
      link: "/departments/sanitation",
    },
  ];

  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4">
          <h2 className="text-2xl font-bold">{t("dept.title")}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <Link href="/departments" key={dept.id}>
                  <div className="group cursor-pointer">
                    <div
                      className={`bg-gradient-to-br ${dept.color} text-white p-6 rounded-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
                    >
                      <Icon className="text-6xl mb-3" />
                      <h3 className="font-bold text-3xl mb-1">
                        {dept.nameKey}
                      </h3>
                      <p className="text-lg opacity-90">
                        {dept.descriptionKey}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
