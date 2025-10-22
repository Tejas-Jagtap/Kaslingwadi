"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaUsers,
  FaMapMarkedAlt,
  FaLeaf,
  FaTrophy,
  FaHome,
} from "react-icons/fa";

export default function IntroductionPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about.introduction")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("intro.subtitle")}
          </p>
        </div>

        {/* Welcome Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaUsers className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("intro.welcome")}
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              {t("intro.welcomeMessage")}
            </p>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("intro.keyStatistics")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Total Population */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-government-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-3xl text-government-orange" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-government-orange mb-2">
                {language === "en" ? "841" : "८४१"}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {t("intro.totalPopulation")}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {t("intro.males")}: {language === "en" ? "176" : "१७६"} |{" "}
                {t("intro.females")}: {language === "en" ? "444" : "४४४"}
              </p>
            </div>

            {/* Households */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-government-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="text-3xl text-government-green" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-government-green mb-2">
                {language === "en" ? "176" : "१७६"}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {t("intro.households")}
              </p>
            </div>

            {/* Total Area */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#0A1931] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-government-blue" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-government-blue mb-2">
                {language === "en" ? "" : ""}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {t("intro.totalArea")}
              </p>
            </div>

            {/* Awards */}
            {/* <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-orange-600 bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
                {language === "en" ? "—" : "—"}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {t("intro.awardsReceived")}
              </p>
            </div> */}
          </div>
        </section>

        {/* Geographic Information */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaMapMarkedAlt className="text-4xl sm:text-5xl text-government-green mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("intro.geographicInfo")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-government-blue mb-3">
                {t("intro.location")}
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t("intro.district")}:</span>
                  <span>{t("header.district")}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t("intro.taluka")}:</span>
                  <span>{t("header.Taluka")}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t("intro.state")}:</span>
                  <span>{t("intro.maharashtra")}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t("intro.pinCode")}:</span>
                  <span> {language === "en" ? "416403" : "४१६४०३"}</span>
                </div>
              </div>
            </div>
            {/* <div>
              <h3 className="text-xl font-bold text-government-blue mb-3">
                {t("intro.landDistribution")}
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {t("intro.agriculturalLandArea")}:
                  </span>
                  <span>217 hectares</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {t("intro.residentialArea")}:
                  </span>
                  <span>64 hectares (12%)</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {t("intro.forestLand")}:
                  </span>
                  <span>35 hectares (6%)</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t("intro.other")}:</span>
                  <span>15 hectares (3%)</span>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Infrastructure */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("intro.basicInfrastructure")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Education */}
            <div className="border-l-4 border-government-orange pl-4">
              <h3 className="font-bold text-lg mb-2">{t("intro.education")}</h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {language === "en" ? "Primary Schools" : "प्राथमिक शाळा"}:{" "}
                  {language === "en" ? 2 : "२"}
                </li>
                <li>
                  • {language === "en" ? "Secondary Schools" : "माध्यमिक शाळा"}:{" "}
                  {language === "en" ? 1 : "१"}
                </li>
                <li>
                  •{" "}
                  {language === "en" ? "Anganwadi Centers" : "अंगणवाडी केंद्रे"}
                  : {language === "en" ? 4 : "४"}
                </li>
                <li>
                  • {language === "en" ? "Library" : "ग्रंथालय"}:{" "}
                  {language === "en" ? 0 : "०"}
                </li>
              </ul>
            </div>

            {/* Health */}
            <div className="border-l-4 border-government-green pl-4">
              <h3 className="font-bold text-lg mb-2">{t("intro.health")}</h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  •{" "}
                  {language === "en"
                    ? "Primary Health Center"
                    : "प्राथमिक आरोग्य केंद्र"}
                  : {language === "en" ? 0 : "०"}
                </li>
                <li>
                  • {language === "en" ? "Sub Centers" : "उपकेंद्रे"}:{" "}
                  {language === "en" ? 1 : "१"}
                </li>
                <li>
                  • {language === "en" ? "Private Clinics" : "खाजगी दवाखाने"}:{" "}
                  {language === "en" ? 2 : "२"}
                </li>
                <li>
                  • {language === "en" ? "Pharmacies" : "औषधालये"}:{" "}
                  {language === "en" ? 3 : "३"}
                </li>
              </ul>
            </div>

            {/* Connectivity */}
            <div className="border-l-4 border-government-blue pl-4">
              <h3 className="font-bold text-lg mb-2">
                {t("intro.connectivity")}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {language === "en" ? "Paved Roads" : "पक्के रस्ते"}:{" "}
                  {language === "en" ? "90%" : "९०%"}
                </li>
                <li>
                  • {language === "en" ? "Bus Service" : "बस सेवा"}:{" "}
                  {language === "en" ? "Available" : "उपलब्ध"}
                </li>
                <li>
                  • {language === "en" ? "Internet" : "इंटरनेट"}:{" "}
                  {language === "en" ? "Available" : "उपलब्ध"}
                </li>
                <li>
                  • {language === "en" ? "Mobile Coverage" : "मोबाईल कव्हरेज"}:{" "}
                  {language === "en" ? "Available" : "उपलब्ध"}
                </li>
              </ul>
            </div>

            {/* Water & Sanitation */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg mb-2">
                {t("intro.waterSanitation")}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {language === "en" ? "Piped Water" : "पाईप पाणी"}:{" "}
                  {language === "en" ? "98%" : "९८%"}
                </li>
                <li>
                  • {language === "en" ? "Toilets" : "स्वच्छतागृहे"}:{" "}
                  {language === "en" ? 1 : "१"}
                </li>
                <li>
                  • {language === "en" ? "Drainage" : "निचरा"}:{" "}
                  {language === "en" ? "Closed Drains" : "बंद गटारे"}
                </li>
                <li>
                  • {language === "en" ? "Waste Management" : "कचरा व्यवस्थापन"}
                  : {language === "en" ? "Daily" : "दैनिक"}
                </li>
              </ul>
            </div>

            {/* Electricity */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-lg mb-2">
                {t("intro.electricity")}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {language === "en" ? "Electrification" : "विद्युतीकरण"}:{" "}
                  {language === "en" ? "100%" : "१००%"}
                </li>
                <li>
                  • {language === "en" ? "Street Lights" : "रस्त्यावरील दिवे"}:{" "}
                  {language === "en" ? "LED" : "LED"}
                </li>
                <li>
                  • {language === "en" ? "Agricultural Power" : "कृषी विद्युत"}:{" "}
                  {language === "en" ? 14 : "१४"}
                </li>
                <li>
                  • {language === "en" ? "Backup" : "बॅकअप"}:{" "}
                  {language === "en" ? 4 : "४"}
                </li>
              </ul>
            </div>

            {/* Other Facilities */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-bold text-lg mb-2">{t("intro.other")}</h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {language === "en" ? "Community Halls" : "सामुदायिक हॉल"}:{" "}
                  {language === "en" ? 0 : "०"}
                </li>
                <li>
                  • {language === "en" ? "Playgrounds" : "क्रीडांगण"}:{" "}
                  {language === "en" ? 0 : "०"}
                </li>
                <li>
                  • {language === "en" ? "Bank Branches" : "बँक शाखा"}:{" "}
                  {language === "en" ? 1 : "१"}
                </li>
                <li>
                  • {language === "en" ? "Post Office" : "पोस्ट ऑफिस"}:{" "}
                  {language === "en" ? 1 : "१"}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Economy */}
        {/* <section className="bg-[#B3CFE5] text-[#0A1931] rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t("intro.economyLivelihood")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("intro.primarySector")}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• {t("intro.agriculture")}: 65%</li>
                <li>• {t("intro.animalHusbandry")}: 15%</li>
                <li>• {t("intro.fishing")}: 3%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("intro.secondarySector")}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• {t("intro.smallIndustries")}: 8%</li>
                <li>• {t("intro.manufacturing")}: 4%</li>
                <li>• {t("intro.construction")}: 3%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("intro.tertiarySector")}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• {t("intro.services")}: 7%</li>
                <li>• {t("intro.trade")}: 4%</li>
                <li>• {t("intro.governmentJobs")}: 3%</li>
              </ul>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
