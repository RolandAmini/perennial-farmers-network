"use client";

import { useState } from "react";
import Link from "next/link";

export default function MembershipFormPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  interface WindowWithJsPDF extends Window {
    jspdf?: {
      jsPDF: new () => {
        setFont: (font: string, style?: string) => void;
        setFillColor: (r: number, g: number, b: number) => void;
        rect: (
          x: number,
          y: number,
          w: number,
          h: number,
          style?: string
        ) => void;
        setTextColor: (r: number, g: number, b: number) => void;
        setFontSize: (size: number) => void;
        text: (
          text: string,
          x: number,
          y: number,
          options?: { align?: string }
        ) => void;
        addPage: () => void;
        setDrawColor: (r: number, g: number, b: number) => void;
        save: (filename: string) => void;
      };
    };
  }

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      // Check if we're in the browser
      if (typeof window === "undefined") return;

      const windowWithJsPDF = window as WindowWithJsPDF;

      // Create script element to load jsPDF
      if (!windowWithJsPDF.jspdf) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
        document.head.appendChild(script);

        // Wait for script to load
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const { jsPDF } = windowWithJsPDF.jspdf!;
      const doc = new jsPDF();

      // Set font
      doc.setFont("helvetica");

      // Header
      doc.setFillColor(45, 90, 39);
      doc.rect(0, 0, 210, 35, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text("PERENNIAL FARMERS NETWORK", 105, 15, { align: "center" });
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("MEMBERSHIP APPLICATION FORM", 105, 25, { align: "center" });

      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);

      let yPos = 50;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("PERSONAL INFORMATION", 20, yPos);
      yPos += 15;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);

      const fields = [
        "Full Name: ___________________________________",
        "Date of Birth: _______________  Gender: M / F (circle one)",
        "Phone Number: ___________________  WhatsApp: ___________________",
        "Email Address: ___________________________________",
        "Physical Address: ___________________________________",
        "Country: ___________________  County/State: ___________________",
        "Nearest Town: ___________________  Postal Code: ___________________",
      ];

      fields.forEach((field) => {
        doc.text(field, 20, yPos);
        yPos += 12;
      });

      yPos += 10;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("FARMING INFORMATION", 20, yPos);
      yPos += 15;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);

      const farmingFields = [
        "Type of Farming: [  ] Crop Production  [  ] Livestock  [  ] Aquaculture  [  ] Mixed",
        "Farm Size (acres/hectares): ___________________",
        "Main Crops/Products: ___________________________________",
        "Years of Farming Experience: ___________________",
        "Current Challenges: ___________________________________",
        "________________________________________________",
      ];

      farmingFields.forEach((field) => {
        doc.text(field, 20, yPos);
        yPos += 12;
      });

      yPos += 10;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("MEMBERSHIP TYPE (Check One)", 20, yPos);
      yPos += 15;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);

      const membershipTypes = [
        "☐ Individual Membership - USD $150",
        "☐ Group Membership - USD $200",
        "☐ Company Membership - USD $280",
        "☐ Cooperative Membership - USD $250",
      ];

      membershipTypes.forEach((type) => {
        doc.text(type, 20, yPos);
        yPos += 10;
      });

      yPos += 10;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("PAYMENT INFORMATION", 20, yPos);
      yPos += 15;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(
        "Payment Method: ☐ Mobile Money  ☐ Bank Transfer  ☐ Cash",
        20,
        yPos
      );
      yPos += 12;
      doc.text(
        "Transaction Reference: ___________________________________",
        20,
        yPos
      );
      yPos += 12;
      doc.text("Date of Payment: ___________________", 20, yPos);
      yPos += 20;

      // Declaration
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("DECLARATION", 20, yPos);
      yPos += 10;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(
        "I hereby apply for membership to the Perennial Farmers Network and declare that",
        20,
        yPos
      );
      yPos += 6;
      doc.text(
        "the information provided above is true and accurate to the best of my knowledge.",
        20,
        yPos
      );
      yPos += 15;

      doc.text(
        "Applicant Signature: ___________________  Date: ___________________",
        20,
        yPos
      );

      // Add new page for submission instructions
      doc.addPage();

      // Header for second page
      doc.setFillColor(45, 90, 39);
      doc.rect(0, 0, 210, 25, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("SUBMISSION INSTRUCTIONS", 105, 15, { align: "center" });

      doc.setTextColor(0, 0, 0);
      yPos = 40;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("HOW TO SUBMIT YOUR APPLICATION", 20, yPos);
      yPos += 15;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);

      const instructions = [
        "1. COMPLETE THE FORM",
        "   • Fill out all sections clearly and legibly",
        "   • Ensure all required information is provided",
        "   • Sign and date the declaration",
        "",
        "2. SUBMIT YOUR APPLICATION",
        "   • WhatsApp: +254 775 538 394 (Scan and send photo/PDF)",
        "   • Email: regional@pfnfarmers.org (Attach scanned copy)",
        "   • Visit our regional office in person",
        "",
        "3. PAYMENT METHODS",
        "   • Mobile Money: M-Pesa, Airtel Money",
        "   • Bank Transfer: Details will be provided upon submission",
        "   • Cash Payment: At regional offices only",
        "",
        "4. PROCESSING TIME",
        "   • Application review: 3-5 business days",
        "   • Certificate issuance: 5-7 business days after approval",
        "   • You will receive confirmation via WhatsApp/Email",
      ];

      instructions.forEach((instruction) => {
        if (instruction.startsWith("   •") || instruction.startsWith("   ")) {
          doc.setFont("helvetica", "normal");
          doc.text(instruction, 25, yPos);
        } else if (instruction.match(/^\d+\./)) {
          doc.setFont("helvetica", "bold");
          doc.text(instruction, 20, yPos);
        } else {
          doc.setFont("helvetica", "normal");
          doc.text(instruction, 20, yPos);
        }
        yPos += 8;
      });

      yPos += 10;

      // Contact Information Box
      doc.setFillColor(248, 249, 250);
      doc.rect(15, yPos, 180, 40, "F");
      doc.setDrawColor(45, 90, 39);
      doc.rect(15, yPos, 180, 40);

      yPos += 10;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("CONTACT INFORMATION", 105, yPos, { align: "center" });
      yPos += 10;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text("WhatsApp: +254 775 538 394", 105, yPos, { align: "center" });
      yPos += 6;
      doc.text("Email: regional@pfnfarmers.org", 105, yPos, {
        align: "center",
      });
      yPos += 6;
      doc.text("Website: www.pfnfarmers.org", 105, yPos, { align: "center" });

      // Footer
      yPos = 280;
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text(
        "© 2025 Perennial Farmers Network. All rights reserved.",
        105,
        yPos,
        { align: "center" }
      );

      // Save the PDF
      doc.save("PFN_Membership_Application_Form.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🌱 Membership</h1>
          <p className="text-lg md:text-xl text-green-100">
            Join the Perennial Farmers Network and unlock exclusive benefits.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10">
          🌟 Why Join PFN?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              💰 Funding Access
            </h3>
            <p className="text-gray-600">
              Access exclusive grants and financial support for your farming
              projects.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🎓 Training & Workshops
            </h3>
            <p className="text-gray-600">
              Participate in capacity-building programs to strengthen your
              skills and knowledge.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🤝 Networking
            </h3>
            <p className="text-gray-600">
              Connect with farmers, fishers, and partners across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            💳 Membership Options
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Choose the membership type that best fits your needs. All
            memberships include access to our full range of benefits and
            services.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold mb-2">👤 Individual</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                $150
              </div>
              <p className="text-green-100 text-sm">
                Perfect for individual farmers
              </p>
            </div>

            <div className="bg-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold mb-2">👥 Group</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                $200
              </div>
              <p className="text-green-100 text-sm">Ideal for farming groups</p>
            </div>

            <div className="bg-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold mb-2">🏢 Company</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                $280
              </div>
              <p className="text-green-100 text-sm">
                For agricultural companies
              </p>
            </div>

            <div className="bg-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold mb-2">🤝 Cooperative</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                $250
              </div>
              <p className="text-green-100 text-sm">For farming cooperatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            📝 How to Join
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Download the PFN Membership Application Form and submit it to start
            your journey with us.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button
                onClick={generatePDF}
                disabled={isGenerating}
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating
                  ? "⏳ Generating..."
                  : "📄 Download Application Form"}
              </button>

              <Link
                href="https://wa.me/254775538394"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                📱 Contact Us on WhatsApp
              </Link>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-left max-w-2xl mx-auto">
            <h3 className="font-bold text-yellow-800 text-lg mb-4">
              📋 Application Process:
            </h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  1
                </span>
                <div>
                  <strong>Download</strong> the PDF application form above
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  2
                </span>
                <div>
                  <strong>Fill out</strong> all required information clearly
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  3
                </span>
                <div>
                  <strong>Submit</strong> via WhatsApp (+254 775 538 394), Email
                  (regional@pfnfarmers.org), or visit our office
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  4
                </span>
                <div>
                  <strong>Pay</strong> the membership fee as instructed
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  5
                </span>
                <div>
                  <strong>Receive</strong> your certificate within 5-7 business
                  days
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-green-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            📞 Get In Touch
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <Link
                href="https://wa.me/254775538394"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors duration-300"
              >
                +254 775 538 394
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <Link
                href="mailto:regional@pfnfarmers.org"
                className="text-green-200 hover:text-white transition-colors duration-300"
              >
                regional@pfnfarmers.org
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Coverage</h3>
              <p className="text-green-200">🌍 Serving all of Africa</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
