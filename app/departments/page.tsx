"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaSeedling,
  FaHeartbeat,
  FaBookOpen,
  FaFileInvoiceDollar,
  FaChild,
} from "react-icons/fa";

export default function DepartmentsPage() {
  const { t, language } = useLanguage();

  const subPages = [
    {
      nameKey: "dept.women_child",
      name:
        language === "en"
          ? "Women and Child Development Department"
          : "महिला बालविकास विभाग",
      description:
        language === "mr"
          ? "महिला आणि बालकल्याणाच्या योजना राबवणारा विभाग."
          : "Department responsible for welfare schemes for women and children.",
      head: language === "en" ? "" : "",
      phone: language === "en" ? "" : "",
      icon: FaFileInvoiceDollar,
      color: "from-pink-400 to-pink-600",
    },
    {
      nameKey: "dept.water_supply",
      name: language === "en" ? "Water Supply Department" : "पाणीपुरवठा विभाग",
      description:
        language === "mr"
          ? "गावातील स्वच्छ आणि सुरक्षित पाणीपुरवठ्याची व्यवस्था."
          : "Ensures clean and safe drinking water supply in the village.",
      head: language === "en" ? "" : "",
      phone: language === "en" ? "" : "",
      icon: FaFileInvoiceDollar,
      color: "from-blue-400 to-blue-600",
    },
    {
      nameKey: "dept.agriculture",
      name: language === "en" ? "Agriculture Department" : "कृषी विभाग",
      description:
        language === "mr"
          ? "शेतीविषयक योजना, प्रशिक्षण आणि मार्गदर्शन."
          : "Implements agricultural schemes, training, and guidance.",
      head: language === "en" ? "" : "",
      phone: language === "en" ? "" : "",
      icon: FaFileInvoiceDollar,
      color: "from-green-400 to-green-600",
    },
    {
      nameKey: "dept.health",
      name: language === "en" ? "Health Department" : "आरोग्य विभाग",
      description:
        language === "mr"
          ? "सार्वजनिक आरोग्य सेवा आणि आरोग्य चाचण्या."
          : "Provides public health services and health checkups.",
      head: language === "en" ? "" : "",
      phone: language === "en" ? "" : "",
      icon: FaFileInvoiceDollar,
      color: "from-red-400 to-red-600",
    },
    {
      nameKey: "dept.general_admin",
      name:
        language === "en"
          ? "General Administration Department"
          : "सामान्य प्रशासन विभाग",
      description:
        language === "mr"
          ? "ग्रामपंचायतीच्या सर्वसाधारण प्रशासकीय कामकाजासाठी."
          : "Handles general administrative functions of the Gram Panchayat.",
      head: language === "en" ? "" : "",
      phone: language === "en" ? "" : "",
      icon: FaFileInvoiceDollar,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      nameKey: "dept.cleanliness",
      name: language === "en" ? "Sanitation Department" : "स्वच्छता विभाग",
      description:
        language === "mr"
          ? "गावाची स्वच्छता आणि घनकचरा व्यवस्थापन."
          : "Responsible for cleanliness and solid waste management.",
      head: language === "en" ? "" : "",
      phone: language === "en" ? "" : "",
      icon: FaFileInvoiceDollar,
      color: "from-teal-400 to-teal-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("dept.title")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("common.allDepartmentsInfo")}
          </p>
        </div>

        {/* Sub-Pages Navigation */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("common.selectDepartment")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subPages.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Link href="/departments" key={index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                    <div
                      className={`bg-gradient-to-br ${dept.color} p-6 sm:p-8 text-white`}
                    >
                      <Icon className="text-4xl sm:text-5xl mb-3" />
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {dept.name}
                      </h3>
                    </div>
                    <div className="p-3 ml-5">
                      <p className="text-gray-700 text-sm sm:text-base">
                        {dept.description}
                      </p>

                      {/* view departments */}

                      {/* <div className="flex items-center text-government-orange font-semibold">
                        <span className="mr-2">
                          {t("common.viewDepartment")}
                        </span>
                        <FaArrowRight />
                      </div> */}
                    </div>
                    <div className="p-3 ml-5">
                      <p className="text-gray-700 text-lg sm:text-base">
                        {t("dept.departmentHeadtitle")} - {dept.head}
                      </p>
                      <p className="text-gray-700 text-lg sm:text-base">
                        {t("common.phone")} - {dept.phone}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Office Hours */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("common.officeHours")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-l-4 border-government-orange pl-4">
              <h3 className="font-bold text-lg mb-2">{t("common.weekdays")}</h3>
              <p className="text-gray-700">
                {t("common.mondayFriday")}
                <br />
                10:00 AM - 6:00 PM
              </p>
            </div>
            <div className="border-l-4 border-government-green pl-4">
              <h3 className="font-bold text-lg mb-2">{t("common.saturday")}</h3>
              <p className="text-gray-700">
                10:00 AM - 2:00 PM
                <br />({t("common.limitedServices")})
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg mb-2">{t("common.sunday")}</h3>
              <p className="text-gray-700">
                {t("common.closed")}
                <br />({t("common.emergencyServicesAvailable")})
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
