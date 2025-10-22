"use client";

import React from "react";
import { FaUserTie } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

const Officials = () => {
  const { t, language } = useLanguage();

  const officials = [
    {
      id: 1,
      MarathiName: "श्रीमती माया सुर्यकांत हरिबा मुठेकर",
      EnglishName: "Mrs. Maya Suryakant Hariba Muthekar",
      positionKey: "officials.sarpanch",
      image: "/images/back.jpg",
      phone: "+91-8767183547",
      phoneDevnagari: "+९१-८७६७१८३५४७",
      email: "tusharmutekar1@gmail.com",
    },
    {
      id: 2,
      MarathiName: "श्रीमती संगीता नामदेव नरळे",
      EnglishName: "Mrs. Sangita Namdev Narale",
      positionKey: "officials.upSarpanch",
      image: "/images/back.jpg",
      phone: "+91-9307334137",
      phoneDevnagari: "+९१-९३०७३३४१३७",
      email: "naralesangita29@gmail.com",
    },
    {
      id: 3,
      MarathiName: "श्रीमती अर्चन तुकाराम खिलारे",
      EnglishName: "Mrs. Archana Tukaram Khilare",
      positionKey: "officials.gramSevak",
      image: "/images/back.jpg",
      phone: "+91-9021973762",
      phoneDevnagari: "+९१-९०२१९७३७६२",
      email: "archanak445@gmail.com",
    },
  ];

  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4 flex items-center">
          <FaUserTie className="text-2xl mr-3" />
          <h2 className="text-2xl font-bold">{t("officials.title")}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officials.map((official) => (
              <div
                key={official.id}
                className="text-center group hover:shadow-xl transition-shadow duration-200 p-6 rounded-lg border border-gray-200"
              >
                <div className="w-52 h-52 mx-auto mb-4 rounded-full bg-gradient-to-br p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
                    {/* <FaUserTie className="text-5xl text-gray-400" /> */}
                    <Image
                      src={official.image}
                      alt="Maharashtra Logo"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <h3 className="font-bold text-2xl text-government-blue mb-2">
                  {language === "mr"
                    ? official.MarathiName
                    : official.EnglishName}
                </h3>
                <p className="text-gray-600 text-lg">
                  {language === "en" ? official.phone : official.phoneDevnagari}
                </p>
                <p className="text-government-orange font-semibold text-lg mt-2">
                  {t(official.positionKey)}
                </p>
              </div>
            ))}
            <Link
              href="/about/administration"
              className="text-center group hover:shadow-xl transition-shadow duration-200 p-6 rounded-lg border border-gray-200 backdrop-blur-sm block"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br p-1 blur">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
                  <Image
                    src={"/images/back.jpg"}
                    alt="Maharashtra Logo"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-government-blue mb-2 blur">
                {"official.MarathiName"}
              </h3>
              <h3 className="font-bold text-2xl text-government-blue mb-2 blur">
                {"official.EnglishName"}
              </h3>
              <p className="text-gray-600 text-lg blur">{"official.phone"}</p>
              <p className="text-government-orange font-semibold text-lg mt-2 blur">
                "official.positionKey"
              </p>
              <span className="inline-block bg-[#0A1931] hover:bg-[#142b4a] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                {t("officials.moreDetails")}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officials;
