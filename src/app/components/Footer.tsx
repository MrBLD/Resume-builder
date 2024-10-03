import Link from "next/link";
import { Home, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <h3 className="mb-2 text-lg font-semibold text-red-600">
              NIT Arunachal Pradesh
            </h3>
            <hr className="my-2 w-2/3 border-t border-white-500" />
            <p className="mb-2 flex items-center text-sm">
              <Home className="mr-2 h-6 w-12" />
              Jote, District: Papum Pare, Arunachal Pradesh, India - 791113
            </p>
            <p className="mb-2 flex items-center text-sm">
              <Phone className="mr-2 h-6 w-6" />
              +91 0360-2954549
            </p>
            <p className="flex items-center text-sm">
              <Mail className="mr-2 h-6 w-6" />
              <a href="mailto:nitapadmin@nitap.ac.in">nitapadmin@nitap.ac.in</a>
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <h3 className="mb-2 text-lg font-semibold text-red-600">Academic</h3>
            <hr className="my-2 w-2/3 border-t border-white-500" />
            <ul className="list-none space-y-2 text-sm">
              <li>
                <a
                  href="https://scholarships.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  Scholarship
                </a>
              </li>
              <li>
                <a
                  href="https://nitap.ac.in/gallery_details?url=9865661b5760e9be2cdce96c1a123fb710dd4217"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Construction activity at Permanent Campus
                </a>
              </li>
              <li>
                <a
                  href="page_details.php?name=Digital-Initiatives-by-MHRD&amp;page=2f28bac669"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Digital Initiatives by MHRD
                </a>
              </li>
              <li>
                <a
                  href="https://www.nitap.ac.in/controller/faculty-login/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Faculty Login
                </a>
              </li>
              <li>
                <a
                  href="https://nitap.ac.in/section/home?section=b63a2a5ff0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Academic Depository (NAD)
                </a>
              </li>
              <li>
                <a
                  href="https://nitap.co.in/moodle/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NIT Moodle
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <h3 className="mb-2 text-lg font-semibold text-red-600">Quick Links</h3>
            <hr className="my-2 w-2/3 border-t border-white-500" />
            <ul className="list-none space-y-2 text-sm">
              <li>
                <a
                  href="society/CESS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Civil Engineering Student Society
                </a>
              </li>
              <li>
                <a
                  href="http://nitap.ac.in/society/EESS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electrical Engineering Student Society
                </a>
              </li>
              <li>
                <a
                  href="https://ecess.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electronics & Communication Engineering Student Society
                </a>
              </li>
              <li>
                <a
                  href="https://nitap.ac.in/section/home?section=cb6eeee00d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Faculty Welfare Cell
                </a>
              </li>
              <li>
                <a
                  href="society/MESS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mechanical Engineering Student Society
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  National Service Scheme (NSS)
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Proceedings and Publications
                </a>
              </li>
              <li>
                <a
                  href="https://nitap.ac.in/section/home?section=5f27d55abd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  StartUp Cell: Prakousol
                </a>
              </li>
              <li>
                <a
                  href="quick/CodingClub/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Student's Coding Club
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Telephone Directory
                </a>
              </li>
              <li>
                <a
                  href="http://nitap.ac.in/section/home?section=2621688fb2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Training & Placement
                </a>
              </li>
              <li>
                <a
                  href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&hd=nitap.ac.in&sacu=1&flowName=GlifWebSignIn&flowEntry=AddSession"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Webmail
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/4">
            <h3 className="mb-2 text-lg font-semibold text-red-600">External Links</h3>
            <hr className="my-2 w-2/3 border-t border-white-500" />
            <ul className="list-none space-y-2 text-sm">
              <li>
                <a
                  href="https://www.abc.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Academic Bank of Credits
                </a>
              </li>
              <li>
                <a
                  href="https://www.aicte-india.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AICTE
                </a>
              </li>
              <li>
                <a
                  href="https://ccmn.admissions.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CCMN-2023
                </a>
              </li>
              <li>
                <a
                  href="https://ccmt.admissions.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CCMT-2023
                </a>
              </li>
              <li>
                <a
                  href="http://couns-promo.mnit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CCMT-CCMN-CSAB-DASA Promotions
                </a>
              </li>
              <li>
                <a
                  href="https://csab.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSAB-2023
                </a>
              </li>
              <li>
                <a
                  href="https://www.dasanit.org/dasa2023/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DASA-2023
                </a>
              </li>
              <li>
                <a
                  href="https://josaa.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JOSAA
                </a>
              </li>
              <li>
                <a
                  href="https://mhrd.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ministry of Education
                </a>
              </li>
              <li>
                <a
                  href="https://www.ugc.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UGC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-2 w-full border-t border-white-500 " />

      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
          <p className="text-center text-sm sm:text-left">
            &copy; Copyright 2024 by <span className="text-red-600">NIT Arunachal Pradesh</span>, All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-center sm:text-left">
            <a href="#" className="text-sm">
              Privacy Policy
            </a>
            <a
              href="page_details.php?name=Disclaimer&amp;page=b7a53d8c95"
              className="text-sm"
            >
              Legal Disclaimer
            </a>
            <a
              href="page_details.php?name=RTI&amp;page=e421cfa0d6"
              className="text-sm"
            >
              RTI
            </a>
            <a
              href="page_details.php?name=Terms-&amp;-Conditions&amp;page=13c5f1785d"
              className="text-sm"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
