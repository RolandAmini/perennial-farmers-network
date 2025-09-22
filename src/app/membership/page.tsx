"use client";

import { useState } from "react";
import Link from "next/link";
import { jsPDF } from "jspdf";

export default function MembershipFormPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      const doc = new jsPDF();
      const pageHeight = doc.internal.pageSize.getHeight();
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      let yPos = 0;

      // --- HELPER FUNCTIONS ---
      const drawHeader = (title: string) => {
        doc.setFillColor(45, 90, 39);
        doc.rect(0, 0, pageWidth, 35, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("PERENNIAL FARMERS NETWORK", pageWidth / 2, 15, {
          align: "center",
        });
        doc.setFont("helvetica", "normal");
        doc.setFontSize(14);
        doc.text(title, pageWidth / 2, 25, { align: "center" });
      };

      const drawFooter = (pageNumber: number) => {
        doc.setFontSize(9);
        doc.setTextColor(128, 128, 128);
        const footerText = `© 2025 Perennial Farmers Network | Page ${pageNumber} of 3`;
        doc.text(footerText, pageWidth / 2, pageHeight - 10, {
          align: "center",
        });
      };

      const drawSectionTitle = (title: string, y: number) => {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text(title, margin, y);
        return y + 9;
      };

      drawHeader("MEMBERSHIP APPLICATION FORM");
      yPos = 55;

      yPos = drawSectionTitle("PERSONAL INFORMATION", yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      const personalFields = [
        "Full Name: __________________________________________________________________",
        "Date of Birth: _______________________________________________________________",
        "Gender:  [   ] Male   [   ] Female   [   ] Other  [   ] Prefer not to say",
        "Phone Number: _____________________________________________________________",
        "WhatsApp Number: __________________________________________________________",
        "Email Address: ________________________________________________________________",
        "Physical Address: ___________________________________________________________",
        "Country: ___________________________________________________________________",
        "County / State: ___________________________________________________________",
        "Nearest Town: _______________________________________________________________",
        "Postal Code: _______________________________________________________________",
      ];
      personalFields.forEach((field) => {
        doc.text(field, margin, yPos);
        yPos += 14;
      });

      drawFooter(1);
      doc.addPage();

      drawHeader("MEMBERSHIP APPLICATION FORM (Continued)");
      yPos = 55;

      yPos = drawSectionTitle("FARMING INFORMATION", yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      const farmingFields = [
        "Type of Farming:  [  ] Crop Production   [  ] Livestock   [  ] Aquaculture   [  ] Mixed",
        "Farm Size (acres/hectares): ________________________________________________",
        "Main Crops/Products: _____________________________________________________",
        "Years of Farming Experience: _______________________________________________",
        "Current Challenges: _______________________________________________________",
        "________________________________________________________________________",
      ];
      farmingFields.forEach((field) => {
        doc.text(field, margin, yPos);
        yPos += 14;
      });

      yPos += 10; // Extra space

      yPos = drawSectionTitle("MEMBERSHIP TYPE (Check One)", yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      const membershipTypes = [
        "[   ]   Individual Membership  -  USD $150",
        "[   ]   Group Membership  -  USD $200",
        "[   ]   Company Membership  -  USD $280",
        "[   ]   Cooperative Membership  -  USD $250",
      ];
      membershipTypes.forEach((type) => {
        doc.text(type, margin, yPos);
        yPos += 12;
      });

      yPos += 10;

      yPos = drawSectionTitle("DECLARATION", yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      const declarationText =
        "I hereby apply for membership to the Perennial Farmers Network and declare that the information provided above is true and accurate to the best of my knowledge. I agree to abide by the rules of the network.";
      const declarationLines = doc.splitTextToSize(
        declarationText,
        pageWidth - margin * 2
      );
      doc.text(declarationLines, margin, yPos);
      yPos += declarationLines.length * 5 + 20;

      doc.setFontSize(11);
      doc.text(
        "Applicant Signature: ___________________________  Date: ________________________",
        margin,
        yPos
      );

      drawFooter(2);
      doc.addPage();

      drawHeader("SUBMISSION & PAYMENT INSTRUCTIONS");
      yPos = 55;

      yPos = drawSectionTitle("Step 1: Submit Your Application Form", yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      const submissionSteps = [
        "First, please ensure you have completed Page 1 and Page 2.",
        "Submit your completed form to us via ONE of the following methods:",
        "      • WhatsApp (Recommended): +254 775 538 394",
        "      • Email: regional@pfnfarmers.org",
      ];
      submissionSteps.forEach((step) => {
        doc.text(step, margin, yPos);
        yPos += 10;
      });
      doc.text(
        "We will contact you to confirm we have received it.",
        margin,
        yPos
      );
      yPos += 20;

      yPos = drawSectionTitle("Step 2: Pay the Membership Fee", yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(
        "You can send your registration fee using any of the services below:",
        margin,
        yPos
      );
      yPos += 10;
      doc.setFont("helvetica", "bold");
      doc.text(
        "   • Bank Transfer   • Mukuru   • Western Union   • World Remit   • MoneyGram",
        margin,
        yPos
      );
      yPos += 15;

      doc.setFont("helvetica", "normal");
      doc.text(
        "Please use the following details for the transfer:",
        margin,
        yPos
      );
      yPos += 8;

      // --- Recipient Details Box ---
      doc.setFillColor(245, 245, 245); // Light grey background for emphasis
      doc.rect(margin, yPos, pageWidth - margin * 2, 18, "F");
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text(
        "Recipient's Name:   COLLINS OTIENO OCHIENG",
        margin + 5,
        yPos + 7
      );
      doc.setFont("helvetica", "normal");
      doc.text(
        "Reference:   Please use your own full name",
        margin + 5,
        yPos + 14
      );
      yPos += 28;

      doc.setFontSize(9);
      doc.setFont("helvetica", "italic");
      doc.setTextColor(100, 100, 100);
      doc.text(
        "Note: All funds from membership subscriptions are strictly for administrative purposes.",
        margin,
        yPos
      );
      yPos += 15;
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);

      yPos = drawSectionTitle("Step 3: Send Your Payment Receipt", yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);

      doc.text(
        "This final step is very important. We cannot register you without a copy of the receipt.",
        margin,
        yPos
      );
      yPos += 10;
      doc.text(
        "Please send a clear photo or scan to us on WhatsApp or Email for verification.",
        margin,
        yPos
      );
      yPos += 20;

      yPos = drawSectionTitle("WHAT HAPPENS NEXT?", yPos);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      const nextSteps = [
        "• Once your payment is verified (usually within 24 hours), you will be",
        "  registered as an official member.",
        "• We will immediately issue and send you your PFN Membership Number",
        "  and official Membership Certificate.",
      ];
      const nextStepsLines = doc.splitTextToSize(
        nextSteps.join("\n"),
        pageWidth - margin * 2
      );
      doc.text(nextStepsLines, margin, yPos);

      drawFooter(3);

      doc.save("PFN_Membership_Application_Form.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(
        "An error occurred while generating the PDF. Please check the console for details."
      );
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
                  <strong>Receive</strong> your certificate within 24 hours of
                  approval
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
