"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

// Import certification data directly for performance
const certificationsData = {
  "certifications": [
    {
      "name": "Application Developer",
      "organization": "Certiport | A Pearson VUE",
      "description": "The Application Developer credential gives you that breadth of knowledge to make valuable contributions and informed decisions, no matter what part of the development you focus on.",
      "date": "06/05/2023",
      "term": "Spring 2023",
      "certification_id": "2763a83b-0ffa-476e-b7ce-e761b72ddcbe",
      "verification_link": "https://www.credly.com/badges/2763a83b-0ffa-476e-b7ce-e761b72ddcbe/public_url",
      "image_route": "/images/certifications/application_developer"
    },
    {
      "name": "IT Technical Support Specialist",
      "organization": "Certiport | A Pearson VUE",
      "description": "Foundation in Networking, Network Security, and Device Configuration and Management.",
      "date": "06/05/2023",
      "term": "Spring 2023",
      "certification_id": "7944a148-135a-4b72-acc3-80bd12e67c63",
      "verification_link": "https://www.credly.com/badges/7944a148-135a-4b72-acc3-80bd12e67c63/public_url",
      "image_route": "/images/certifications/IT_technical_support_specialist"
    },
    {
      "name": "Network Automation Specialist",
      "organization": "Certiport | A Pearson VUE",
      "description": "Foundation in IT, Network Automation, Python, and Software Development.",
      "date": "05/09/2024",
      "term": "Spring 2024",
      "certification_id": "49a3e128-5fce-4b8d-a4f5-5d67e789d9d5",
      "verification_link": "https://www.credly.com/badges/49a3e128-5fce-4b8d-a4f5-5d67e789d9d5/public_url",
      "image_route": "/images/certifications/network_automation_specialist"
    },
    {
      "name": "Network Security Support Technician",
      "organization": "Certiport | A Pearson VUE",
      "description": "Foundation in network communication and computer security via Cisco.",
      "date": "05/09/2024",
      "term": "Spring 2024",
      "certification_id": "248a3c1f-eacd-4a24-a289-b610f6dd3293",
      "verification_link": "https://www.credly.com/badges/248a3c1f-eacd-4a24-a289-b610f6dd3293/public_url",
      "image_route": "/images/certifications/network_security_support_technician"
    },
    {
      "name": "CCST - Cisco Certified Support Technician Cybersecurity",
      "organization": "Cisco",
      "description": "Successful candidates are qualified to enter the workforce as cybersecurity support specialists, technicians, analysts, and/or auditors.",
      "date": "08/16/2023",
      "term": "Summer 2023",
      "certification_id": "f117a443-f985-47bf-9f24-d77b3bea1124",
      "verification_link": "https://www.credly.com/badges/f117a443-f985-47bf-9f24-d77b3bea1124/public_url",
      "image_route": "/images/certifications/cisco_cybersecurity"
    },
    {
      "name": "CCST - Cisco Certified Support Technician Networking",
      "organization": "Cisco",
      "description": "Successful candidates are qualified to enter the workforce as networking support specialists, technicians, and/or administrators.",
      "date": "05/09/2024",
      "term": "Spring 2024",
      "certification_id": "a5234214-138f-4d38-a931-3c0daf15f637",
      "verification_link": "https://www.credly.com/badges/a5234214-138f-4d38-a931-3c0daf15f637/public_url",
      "image_route": "/images/certifications/cisco_networking"
    },
    {
      "name": "Microsoft Certified: Azure AI Fundamentals",
      "organization": "Microsoft",
      "description": "Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.",
      "date": "05/12/2024",
      "term": "Spring 2024",
      "certification_id": "0a11a5db-afd2-442f-bce7-e8e2aff861a7",
      "verification_link": "https://www.credly.com/badges/0a11a5db-afd2-442f-bce7-e8e2aff861a7/public_url",
      "image_route": "/images/certifications/microsoft_azure_ai_fundamentals"
    },
    {
      "name": "Microsoft Office Specialist: Word Associate (Office 2019)",
      "organization": "Microsoft",
      "description": "Microsoft Word certification earners have a fundamental understanding of the Word environment and the ability to complete tasks independently",
      "date": "05/12/2024",
      "term": "Spring 2024",
      "certification_id": "89cd58ff-e20c-48bf-81f5-f378541883b1",
      "verification_link": "https://www.credly.com/badges/89cd58ff-e20c-48bf-81f5-f378541883b1/public_url",
      "image_route": "/images/certifications/mos_word"
    },
    {
      "name": "Unity Certified User: Programmer",
      "organization": "Unity Technologies",
      "description": "Earners of the Unity Certified User: Programmer badge have the basic programming skills necessary to create interactivity in games, apps, AR/VR, and other experiences. Earners are able to create interactive content for industries such as gaming, entertainment, automotive, AEC, and XR.",
      "date": "05/12/2024",
      "term": "Spring 2024",
      "certification_id": "ead24645-32ee-4eba-9464-78c39d007302",
      "verification_link": "https://www.credly.com/badges/ead24645-32ee-4eba-9464-78c39d007302/public_url",
      "image_route": "/images/certifications/unity_certified_user_programmer"
    },
    {
      "name": "ESB: Entreprenuership and Small Business v.2",
      "organization": "Certiport | A Pearson VUE",
      "description": "Core concepts include entrepreneurship; recognizing and evaluating opportunities; planning for, starting, and operating a business; marketing and sales; venture capital and seed funding; and financial management.",
      "date": "05/12/2024",
      "term": "Spring 2024",
      "certification_id": "b7372f3e-558b-4302-9be6-79041b291d2f",
      "verification_link": "https://www.credly.com/badges/b7372f3e-558b-4302-9be6-79041b291d2f/public_url",
      "image_route": "/images/certifications/esb_entrepreneurship_and_small_business_v2"
    },
    {
      "name": "PMI Project Management Ready™",
      "organization": "Project Management Institute",
      "description": "validated in the core concepts of project management, business analysis and traditional and agile methodologies used across industries globally.",
      "date": "05/12/2024",
      "term": "Spring 2024",
      "certification_id": "896b5237-b495-484b-a0e2-79a1bd9ea52e",
      "verification_link": "https://www.credly.com/badges/896b5237-b495-484b-a0e2-79a1bd9ea52e/public_url",
      "image_route": "/images/certifications/pmi_project_management_ready"
    },
    {
      "name": "Google Project Management Certificate",
      "organization": "Google | Coursera",
      "description": "Completed six courses that are designed to prepare them for introductory-level roles in Project Management. They are competent in initiating, planning and running both traditional and agile projects.",
      "date": "04/03/2023",
      "term": "Spring 2023",
      "certification_id": "0b185ac7-f44f-4edb-830a-c3dd286be144",
      "verification_link": "https://www.credly.com/badges/0b185ac7-f44f-4edb-830a-c3dd286be144/public_url",
      "image_route": "/images/certifications/google_project_management"
    },
    {
      "name": "Google Data Analytics Certificate",
      "organization": "Google | Coursera",
      "description": "Completed eight courses that are designed to prepare for introductory-level roles in Data Analytics. Competent in tools and platforms including spreadsheets, SQL, Tableau, and R. Know how to prepare, process, analyze, and share data for thoughtful action.",
      "date": "06/15/2022",
      "term": "Spring 2022",
      "certification_id": "",
      "verification_link": "https://coursera.org/share/c406053c6563f76116fda0fe1300c519",
      "image_route": "/images/certifications/google_data_analytics"
    },
    {
      "name": "IT Specialist - Artificial Intelligence",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this certification are AI enabled learners and are prepared for the professional use of AI by understanding how AI can be used to solve problems.",
      "date": "06/08/2023",
      "term": "Spring 2023",
      "certification_id": "1d18d5cd-63e2-441f-8e70-e9e639bfaa0b",
      "verification_link": "https://www.credly.com/badges/1d18d5cd-63e2-441f-8e70-e9e639bfaa0b/public_url",
      "image_route": "/images/certifications/artificial_intelligence"
    },
    {
      "name": "IT Specialist - Cloud Computing",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Validates ability to identify and describe end solutions that leverage cloud technologies, considerations that span across solutions and the \"art of the possible\" in utilizing cloud to develop solutions..",
      "date": "06/06/2023",
      "term": "Spring 2023",
      "certification_id": "9286af1e-d393-40f2-9fc6-45a4c6db2371",
      "verification_link": "https://www.credly.com/badges/9286af1e-d393-40f2-9fc6-45a4c6db2371/public_url",
      "image_route": "/images/certifications/cloud_computing"
    },
    {
      "name": "IT Specialist - Network Security",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge demonstrate foundational security knowledge and skills, including an understanding of core security principles operating system security, network and device security, and secure computing practices.",
      "date": "05/30/2023",
      "term": "Spring 2023",
      "certification_id": "339bb722-d784-47b3-8f9c-d5ceb1e64023",
      "verification_link": "https://www.credly.com/badges/339bb722-d784-47b3-8f9c-d5ceb1e64023/public_url",
      "image_route": "/images/certifications/network_security"
    },
    {
      "name": "IT Specialist - Networking",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge demonstrate foundational networking knowledge and skills, including TCP/IP, networking services, networking topologies, and troubleshooting in wired and wireless environments.",
      "date": "05/22/2023",
      "term": "Spring 2023",
      "certification_id": "8fb61546-1e85-4a58-9172-29034b109c52",
      "verification_link": "https://www.credly.com/badges/8fb61546-1e85-4a58-9172-29034b109c52/public_url",
      "image_route": "/images/certifications/networking"
    },
    {
      "name": "IT Specialist - Java",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge demonstrate that they can recognize, write, and debug Java code that will logically solve a problem.",
      "date": "05/23/2023",
      "term": "Spring 2023",
      "certification_id": "0e2c65ce-d519-49cb-a3e3-194067e16c3f",
      "verification_link": "https://www.credly.com/badges/0e2c65ce-d519-49cb-a3e3-194067e16c3f/public_url",
      "image_route": "/images/certifications/java"
    },
    {
      "name": "IT Specialist - Databases",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge demonstrate foundational knowledge of how to design and query relational databases, such as MySQL, Microsoft SQL Server, or Oracle.",
      "date": "01/03/2023",
      "term": "Fall 2022",
      "certification_id": "fb5a6f42-c629-4353-bf8d-6358349fbefe",
      "verification_link": "https://www.credly.com/badges/fb5a6f42-c629-4353-bf8d-6358349fbefe/public_url",
      "image_route": "/images/certifications/databases"
    },
    {
      "name": "IT Specialist - Data Analytics",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge prove introductory knowledge of how to responsibly manipulate, analyze, and communicate findings of data analysis. Assessed experience with data manipulation, analysis, visualization, and communication. Familiarity with general data concepts, data-related laws, and responsible analytics practices.",
      "date": "03/06/2023",
      "term": "Spring 2023",
      "certification_id": "ed22c056-cfb2-42e3-965a-06e9bab12f3e",
      "verification_link": "https://www.credly.com/badges/ed22c056-cfb2-42e3-965a-06e9bab12f3e/public_url",
      "image_route": "/images/certifications/data_analytics"
    },
    {
      "name": "IT Specialist - JavaScript",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge demonstrate that they can recognize, write, and debug JavaScript code that will logically solve a problem.",
      "date": "12/08/2022",
      "term": "Fall 2022",
      "certification_id": "e2fb4ce8-535b-4645-861c-d410692ed156",
      "verification_link": "https://www.credly.com/badges/e2fb4ce8-535b-4645-861c-d410692ed156/public_url",
      "image_route": "/images/certifications/javascript"
    },
    {
      "name": "IT Specialist - HTML & CSS",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners for this badge demonstrate that they can structure a webpage using HTML elements and create and apply styles using CSS.",
      "date": "12/12/2022",
      "term": "Fall 2022",
      "certification_id": "d3f4e48c-ffc6-4fbc-8f53-96f843380387",
      "verification_link": "https://www.credly.com/badges/d3f4e48c-ffc6-4fbc-8f53-96f843380387/public_url",
      "image_route": "/images/certifications/html_and_css"
    },
    {
      "name": "IT Specialist - Python",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge demonstrate that they can structure a webpage using HTML elements and create and apply styles using CSS.",
      "date": "05/05/2022",
      "term": "Spring 2022",
      "certification_id": "8cc4adf4-efe5-443a-8d6a-968e04ea36de",
      "verification_link": "https://www.credly.com/badges/8cc4adf4-efe5-443a-8d6a-968e04ea36de/public_url",
      "image_route": "/images/certifications/python"
    },
    {
      "name": "IT Specialist - HTML5 Application Development",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge demonstrate their ability to use HTML5, CSS, and JavaScript to build responsive web applications that will run on a variety of touch-enabled devices, including PCs, tablets, and phones.",
      "date": "06/05/2023",
      "term": "Spring 2023",
      "certification_id": "e0933175-d960-4068-b986-ef65aca69d83",
      "verification_link": "https://www.credly.com/badges/e0933175-d960-4068-b986-ef65aca69d83/public_url",
      "image_route": "/images/certifications/html5_application_development"
    },
    {
      "name": "IT Specialist - Software Development",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge demonstrate core software development skills, including object-oriented programming, web applications, and databases. Candidates are expected to have some experience with C# and ANSI SQL.",
      "date": "05/24/2023",
      "term": "Spring 2023",
      "certification_id": "48c3ceb5-9cc0-4dba-aaaf-928a28c9a014",
      "verification_link": "https://www.credly.com/badges/48c3ceb5-9cc0-4dba-aaaf-928a28c9a014/public_url",
      "image_route": "/images/certifications/software_development"
    },
    {
      "name": "IT Specialist - Computational Thinking",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge can decompose problems, collect and analyze data, recognize patterns in data, represent data through abstractions, and automate solutions by using algorithmic thinking.",
      "date": "05/25/2023",
      "term": "Spring 2023",
      "certification_id": "425fa23a-e67b-446f-a266-5fc91eeccb65",
      "verification_link": "https://www.credly.com/badges/425fa23a-e67b-446f-a266-5fc91eeccb65/public_url",
      "image_route": "/images/certifications/computational_thinking"
    },
    {
      "name": "IT Specialist - Device Configuration and Management",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge demonstrate foundational skills in, and a basic knowledge of, Windows devices and mobility.",
      "date": "05/30/2023",
      "term": "Spring 2023",
      "certification_id": "7f90e221-80c4-43e7-b549-3ab8863ee4bb",
      "verification_link": "https://www.credly.com/badges/7f90e221-80c4-43e7-b549-3ab8863ee4bb/public_url",
      "image_route": "/images/certifications/device_configuration_and_management"
    },
    {
      "name": "IT Specialist - Cybersecurity",
      "organization": "Certiport | A Pearson VUE Business",
      "description": "Earners of this badge are starting their journey in the cybersecurity field. This exam assesses their understanding of key security paradigms, terminology, and mindset. Badge earners have a keen awareness of the importance of security and the threats to a business when security procedures are not followed. They are willing to teach others about security concerns. They are developing the investigative and implementation skills necessary to succeed in the field.",
      "date": "05/30/2023",
      "term": "Spring 2023",
      "certification_id": "7f90e221-80c4-43e7-b549-3ab8863ee4bb",
      "verification_link": "https://www.credly.com/badges/7f90e221-80c4-43e7-b549-3ab8863ee4bb/public_url",
      "image_route": "/images/certifications/cybersecurity"
    },
    {
      "name": "CIW Web Development Professional",
      "organization": "Certified Internet Web",
      "description": "Pathway certification for CIW v5 Database Design Specialist, CIW Advanced HTML5 & CSS3 Specialist, and CIW JavaScript Specialist",
      "date": "01/30/2024",
      "term": "Fall 2023",
      "certification_id": "d2fd33b8aef547638824d4a230e80eda",
      "verification_link": "https://cp.certmetrics.com/ciwcerts/en/public/verify/credential/d2fd33b8aef547638824d4a230e80eda",
      "image_route": "/images/certifications/CIW_logo"
    },
    {
      "name": "CIW v5 Database Design Specialist",
      "organization": "Certified Internet Web",
      "description": "This certification validates that a candidate has essential knowledge in vendor-neutral database design for individuals planning to pursue product-focused database specialization, and validates database knowledge and understanding, including Structured Query Language (SQL) and database optimization through normalization.",
      "date": "01/30/2024",
      "term": "Fall 2023",
      "certification_id": "3bf171dab15d458b90f067e1bf8ebb6d",
      "verification_link": "https://cp.certmetrics.com/ciwcerts/en/public/verify/credential/3bf171dab15d458b90f067e1bf8ebb6d",
      "image_route": "/images/certifications/CIW_logo"
    },
    {
      "name": "CIW Advanced HTML5 & CSS3 Specialist",
      "organization": "Certified Internet Web",
      "description": "This certification validates that a candidate has essential HTML5, Cascading Style Sheets (CSS), and JavaScript knowledge that is required for working in the leading IT companies these days.",
      "date": "06/13/2023",
      "term": "Spring 2023",
      "certification_id": "cb8df85c048c46cab9bb98f2f9c75e50",
      "verification_link": "https://cp.certmetrics.com/ciwcerts/en/public/verify/credential/cb8df85c048c46cab9bb98f2f9c75e50",
      "image_route": "/images/certifications/CIW_logo"
    },
    {
      "name": "CIW JavaScript Specialist",
      "organization": "Certified Internet Web",
      "description": "Earners of this certification will know how JavaScript is used to communicate with users, modify the Document Object Model (DOM), control program flow, validate forms, animate images, create cookies, change HTML on the fly, and communicate with databases.",
      "date": "06/14/2023",
      "term": "Spring 2023",
      "certification_id": "1990428dbcc6422f984e70048b4cb520",
      "verification_link": "https://cp.certmetrics.com/ciwcerts/en/public/verify/credential/1990428dbcc6422f984e70048b4cb520",
      "image_route": "/images/certifications/CIW_logo"
    },
    {
      "name": "CIW Site Development Associate",
      "organization": "Certified Internet Web",
      "description": "This certification verifies the earner's ability to use HTML5 and CSS to create GUIs, work with images, forms, and videos on webpages. Including proficiency in JavaScript APIs such as geolocation, drag-and-drop, and employing SEO optimization to reach business goals.",
      "date": "04/05/2023",
      "term": "Spring 2023",
      "certification_id": "dd9bfa3c8eb542d3ba198c184729b884",
      "verification_link": "https://cp.certmetrics.com/ciwcerts/en/public/verify/credential/dd9bfa3c8eb542d3ba198c184729b884",
      "image_route": "/images/certifications/CIW_logo"
    },
    {
      "name": "TestOut IT Fundamentals Pro Certification",
      "organization": "TestOut",
      "description": "Certified for foundational knowledge and ability to perform real-world tasks using operating systems, common PC hardware and software, basic networking, databases, programming, security, and information systems.",
      "date": "01/24/2024",
      "term": "Fall 2023",
      "certification_id": "6-2C6-VALCXD",
      "verification_link": "https://certification.testout.com/verifycert/6-2C6-VALCXD",
      "image_route": "/images/certifications/testout_it_fundamentals"
    },
    {
      "name": "IT Fundamentals (ITF+)",
      "organization": "CompTIA",
      "description": "Earners of this certification have the knowledge and skills required to identify and explain the basics of computing, IT infrastructure, application and software, software development, database fundamentals, and security. These IT candidates have demonstrated the ability to install software, establish basic network connectivity, and identify and prevent basic security risks.",
      "date": "01/30/2024",
      "term": "Fall 2023",
      "certification_id": "a5980bf0-7a2a-4839-9b9a-ac5091e3467b",
      "verification_link": "https://www.credly.com/badges/a5980bf0-7a2a-4839-9b9a-ac5091e3467b/public_url",
      "image_route": "/images/certifications/comptia_itf"
    }
  ]
};

interface Certification {
  name: string;
  organization: string;
  description: string;
  date: string;
  term: string;
  certification_id: string;
  verification_link: string;
  image_route: string;
}

interface CertificationGroup {
  title: string;
  description: string;
  category: string;
  certifications: Certification[];
  skillsSummary: string[];
  keySkills: string[];
}

// Helper function to sort terms chronologically
const getTermSortOrder = (term: string): number => {
  const [season, year] = term.split(' ');
  const yearNum = parseInt(year);
  const seasonOrder = { 'Spring': 1, 'Summer': 2, 'Fall': 3 };
  return yearNum * 10 + (seasonOrder[season as keyof typeof seasonOrder] || 0);
};

// Categorize certifications with skill summaries
export const categorizeCertifications = (): CertificationGroup[] => {
  const networkSecurity = certificationsData.certifications.filter(cert => 
    cert.name.toLowerCase().includes('network') || 
    cert.name.toLowerCase().includes('cybersecurity') || 
    cert.name.toLowerCase().includes('security') ||
    cert.name.toLowerCase().includes('cisco')
  );

  const development = certificationsData.certifications.filter(cert => 
    cert.name.toLowerCase().includes('programming') ||
    cert.name.toLowerCase().includes('javascript') ||
    cert.name.toLowerCase().includes('java') ||
    cert.name.toLowerCase().includes('python') ||
    cert.name.toLowerCase().includes('html') ||
    cert.name.toLowerCase().includes('css') ||
    cert.name.toLowerCase().includes('software development') ||
    cert.name.toLowerCase().includes('web development') ||
    cert.name.toLowerCase().includes('ciw') ||
    cert.name.toLowerCase().includes('unity') ||
    cert.name.toLowerCase().includes('computational thinking') ||
    cert.name.toLowerCase().includes('application development')
  );

  const cloudAI = certificationsData.certifications.filter(cert => 
    cert.name.toLowerCase().includes('cloud') ||
    cert.name.toLowerCase().includes('azure') ||
    cert.name.toLowerCase().includes('ai') ||
    cert.name.toLowerCase().includes('artificial intelligence') ||
    cert.name.toLowerCase().includes('data analytics') ||
    cert.organization.toLowerCase().includes('google')
  );

  const itBusiness = certificationsData.certifications.filter(cert => 
    !networkSecurity.includes(cert) && 
    !development.includes(cert) && 
    !cloudAI.includes(cert)
  );

  // Sort each category by term (newest first)
  const sortByTerm = (certs: Certification[]) => 
    certs.sort((a, b) => getTermSortOrder(b.term) - getTermSortOrder(a.term));

  return [
    {
      title: "Network Security & Infrastructure",
      description: "Advanced networking and cybersecurity foundations from industry leaders",
      category: "security",
      certifications: sortByTerm(networkSecurity),
      skillsSummary: [
        "Mastered TCP/IP, UDP, and network protocol fundamentals",
        "Implemented network security best practices and threat mitigation",
        "Configured enterprise-grade network infrastructure and automation",
        "Applied cybersecurity frameworks and incident response procedures"
      ],
      keySkills: ["TCP/IP", "Network Security", "Cisco IOS", "Threat Analysis", "Network Automation"]
    },
    {
      title: "Software Development & Programming",
      description: "Full-stack development expertise across multiple programming languages",
      category: "development",
      certifications: sortByTerm(development),
      skillsSummary: [
        "Developed proficiency in Java, Python, JavaScript, and C# programming",
        "Built responsive web applications using HTML5, CSS3, and modern frameworks",
        "Created interactive games and applications with Unity engine",
        "Applied computational thinking and algorithm design principles"
      ],
      keySkills: ["Full-Stack Development", "Object-Oriented Programming", "Web Technologies", "Software Development Fundamentals"]
    },
    {
      title: "Cloud Computing & AI",
      description: "Modern cloud technologies and artificial intelligence expertise",
      category: "cloud",
      certifications: sortByTerm(cloudAI),
      skillsSummary: [
        "Leveraged Microsoft Azure cloud services and AI capabilities",
        "Performed advanced data analytics using SQL, Tableau, and R",
        "Applied machine learning concepts and AI problem-solving techniques",
        "Designed scalable cloud architectures and deployment strategies"
      ],
      keySkills: ["Azure Cloud", "Machine Learning", "Data Analytics", "Cloud Architecture", "AI Implementation"]
    },
    {
      title: "Product Development and Management",
      description: "Core IT foundations and business management competencies",
      category: "business",
      certifications: sortByTerm(itBusiness),
      skillsSummary: [
        "Managed end-to-end project lifecycles using agile methodologies",
        "Designed and optimized relational databases and data structures",
        "Developed entrepreneurship and small business management skills",
        "Provided technical support and device configuration expertise"
      ],
      keySkills: ["Project Management", "Database Design", "Business Strategy", "Technical Support", "System Administration"]
    }
  ].filter(group => group.certifications.length > 0);
};

const getCategoryColors = (category: string) => {
  switch (category) {
    case 'security':
      return {
        gradient: 'from-red-500/20 via-orange-500/10 to-yellow-500/20',
        accent: 'from-red-500 via-orange-500 to-yellow-500',
        border: 'border-red-500/30 dark:border-red-400/30',
        text: 'text-red-700 dark:text-red-300',
        bg: 'bg-red-500/10 dark:bg-red-400/10',
        dot: 'bg-red-500'
      };
    case 'development':
      return {
        gradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/20',
        accent: 'from-green-500 via-emerald-500 to-teal-500', 
        border: 'border-green-500/30 dark:border-green-400/30',
        text: 'text-green-700 dark:text-green-300',
        bg: 'bg-green-500/10 dark:bg-green-400/10',
        dot: 'bg-green-500'
      };
    case 'cloud':
      return {
        gradient: 'from-blue-500/20 via-cyan-500/10 to-indigo-500/20',
        accent: 'from-blue-500 via-cyan-500 to-indigo-500', 
        border: 'border-blue-500/30 dark:border-blue-400/30',
        text: 'text-blue-700 dark:text-blue-300',
        bg: 'bg-blue-500/10 dark:bg-blue-400/10',
        dot: 'bg-blue-500'
      };
    case 'business':
      return {
        gradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/20',
        accent: 'from-purple-500 via-violet-500 to-indigo-500',
        border: 'border-purple-500/30 dark:border-purple-400/30', 
        text: 'text-purple-700 dark:text-purple-300',
        bg: 'bg-purple-500/10 dark:bg-purple-400/10',
        dot: 'bg-purple-500'
      };
    default:
      return {
        gradient: 'from-gray-500/20 via-slate-500/10 to-gray-500/20',
        accent: 'from-gray-500 via-slate-500 to-gray-500',
        border: 'border-gray-500/30 dark:border-gray-400/30',
        text: 'text-gray-700 dark:text-gray-300', 
        bg: 'bg-gray-500/10 dark:bg-gray-400/10',
        dot: 'bg-gray-500'
      };
  }
};

export default function Certifications() {
  const certificationGroups = categorizeCertifications();
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const toggleGroupExpansion = (groupTitle: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupTitle)) {
      newExpanded.delete(groupTitle);
    } else {
      newExpanded.add(groupTitle);
    }
    setExpandedGroups(newExpanded);
  };

  return (
    <section className="mb-12">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-cyan-800 dark:from-white dark:via-emerald-200 dark:to-cyan-200 bg-clip-text text-transparent">
          Certification Timeline
        </h2>
        <p className="text-gray-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
          A chronological journey through my technical certifications and skills development
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-blue-500"></div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {certificationGroups.map((group, index) => {
            const colors = getCategoryColors(group.category);
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={group.title}
                className="relative"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 ${colors.dot} rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10`}></div>

                {/* Content */}
                <div className="flex items-start gap-16">
                  {isLeft ? (
                    <>
                      {/* Left Side - Description */}
                      <div className="w-1/2 pr-8">
                        <div className="text-right">
                          <div className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm rounded-lg p-1`}>
                            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-lg p-6">
                              
                              {/* Header */}
                              <div className="flex items-center gap-3 mb-4 justify-end">
                                <Award className={`h-6 w-6 ${colors.text}`} />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                  {group.title}
                                </h3>
                                <div className={`px-2 py-1 ${colors.bg} ${colors.border} border rounded text-xs ${colors.text} font-mono`}>
                                  {group.certifications.length} CERTS
                                </div>
                              </div>

                              <p className="text-gray-600 dark:text-slate-300 mb-4 text-sm text-right">
                                {group.description}
                              </p>

                              {/* Skills Summary */}
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 text-right">Key Accomplishments:</h4>
                                <ul className="space-y-1">
                                  {group.skillsSummary.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300 justify-end text-right">
                                      <span>{skill}</span>
                                      <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Key Skills */}
                              <div className="mb-4">
                                <div className="flex flex-wrap gap-1 justify-end">
                                  {group.keySkills.map((skill, skillIndex) => (
                                    <span 
                                      key={skillIndex}
                                      className={`px-2 py-1 text-xs ${colors.bg} ${colors.text} rounded border ${colors.border}`}
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Certifications */}
                      <div className="w-1/2 pl-8">
                        <div className="text-left">
                          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-lg p-6 border border-gray-200/50 dark:border-slate-600/50">
                            
                            {/* Certifications List */}
                            <div className="space-y-3">
                              {(expandedGroups.has(group.title) ? group.certifications : group.certifications.slice(0, 6)).map((cert) => (
                                <motion.a
                                  key={cert.certification_id || cert.name}
                                  href={cert.verification_link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group block"
                                  whileHover={{ scale: 1.02 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all group-hover:shadow-md">
                                    {/* Logo */}
                                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 dark:border-slate-600 overflow-hidden flex-shrink-0">
                                      <Image
                                        src={`${cert.image_route}.png`}
                                        alt={cert.name}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    
                                    {/* Certification Details */}
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-medium text-gray-900 dark:text-white text-sm leading-tight truncate">
                                        {cert.name}
                                      </h4>
                                      <p className="text-xs text-gray-600 dark:text-slate-400 truncate">
                                        {cert.organization}
                                      </p>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-gray-500 dark:text-slate-500">
                                          {cert.term}
                                        </span>
                                        {cert.certification_id && (
                                          <>
                                            <span className="text-xs text-gray-400">•</span>
                                            <code className="text-xs text-gray-500 dark:text-slate-500 font-mono">
                                              {cert.certification_id.slice(0, 8)}...
                                            </code>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.a>
                              ))}
                              
                              {/* Show More/Less Toggle if more than 6 certs */}
                              {group.certifications.length > 6 && (
                                <button
                                  onClick={() => toggleGroupExpansion(group.title)}
                                  className="w-full p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-600 text-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors group"
                                >
                                  <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm text-gray-600 dark:text-slate-400">
                                      {expandedGroups.has(group.title) 
                                        ? `Hide ${group.certifications.length - 6} certifications`
                                        : `+${group.certifications.length - 6} more certifications`
                                      }
                                    </span>
                                    {expandedGroups.has(group.title) ? (
                                      <ChevronUp className="h-4 w-4 text-gray-500 dark:text-slate-400 group-hover:text-gray-700 dark:group-hover:text-slate-300" />
                                    ) : (
                                      <ChevronDown className="h-4 w-4 text-gray-500 dark:text-slate-400 group-hover:text-gray-700 dark:group-hover:text-slate-300" />
                                    )}
                                  </div>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left Side - Certifications */}
                      <div className="w-1/2 pr-8">
                        <div className="text-right">
                          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-lg p-6 border border-gray-200/50 dark:border-slate-600/50">
                            
                            {/* Certifications List */}
                            <div className="space-y-3">
                              {(expandedGroups.has(group.title) ? group.certifications : group.certifications.slice(0, 6)).map((cert) => (
                                <motion.a
                                  key={cert.certification_id || cert.name}
                                  href={cert.verification_link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group block"
                                  whileHover={{ scale: 1.02 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all group-hover:shadow-md flex-row-reverse">
                                    {/* Logo */}
                                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 dark:border-slate-600 overflow-hidden flex-shrink-0">
                                      <Image
                                        src={`${cert.image_route}.png`}
                                        alt={cert.name}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    
                                    {/* Certification Details */}
                                    <div className="flex-1 min-w-0 text-right">
                                      <h4 className="font-medium text-gray-900 dark:text-white text-sm leading-tight truncate">
                                        {cert.name}
                                      </h4>
                                      <p className="text-xs text-gray-600 dark:text-slate-400 truncate">
                                        {cert.organization}
                                      </p>
                                      <div className="flex items-center gap-2 mt-1 justify-end">
                                        <span className="text-xs text-gray-500 dark:text-slate-500">
                                          {cert.term}
                                        </span>
                                        {cert.certification_id && (
                                          <>
                                            <span className="text-xs text-gray-400">•</span>
                                            <code className="text-xs text-gray-500 dark:text-slate-500 font-mono">
                                              {cert.certification_id.slice(0, 8)}...
                                            </code>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.a>
                              ))}
                              
                              {/* Show More/Less Toggle if more than 6 certs */}
                              {group.certifications.length > 6 && (
                                <button
                                  onClick={() => toggleGroupExpansion(group.title)}
                                  className="w-full p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-600 text-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors group"
                                >
                                  <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm text-gray-600 dark:text-slate-400">
                                      {expandedGroups.has(group.title) 
                                        ? `Hide ${group.certifications.length - 6} certifications`
                                        : `+${group.certifications.length - 6} more certifications`
                                      }
                                    </span>
                                    {expandedGroups.has(group.title) ? (
                                      <ChevronUp className="h-4 w-4 text-gray-500 dark:text-slate-400 group-hover:text-gray-700 dark:group-hover:text-slate-300" />
                                    ) : (
                                      <ChevronDown className="h-4 w-4 text-gray-500 dark:text-slate-400 group-hover:text-gray-700 dark:group-hover:text-slate-300" />
                                    )}
                                  </div>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Description */}
                      <div className="w-1/2 pl-8">
                        <div className="text-left">
                          <div className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm rounded-lg p-1`}>
                            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-lg p-6">
                              
                              {/* Header */}
                              <div className="flex items-center gap-3 mb-4 justify-start">
                                <Award className={`h-6 w-6 ${colors.text}`} />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                  {group.title}
                                </h3>
                                <div className={`px-2 py-1 ${colors.bg} ${colors.border} border rounded text-xs ${colors.text} font-mono`}>
                                  {group.certifications.length} CERTS
                                </div>
                              </div>

                              <p className="text-gray-600 dark:text-slate-300 mb-4 text-sm text-left">
                                {group.description}
                              </p>

                              {/* Skills Summary */}
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 text-left">Key Accomplishments:</h4>
                                <ul className="space-y-1">
                                  {group.skillsSummary.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                                      <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span>{skill}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Key Skills */}
                              <div className="mb-4">
                                <div className="flex flex-wrap gap-1 justify-start">
                                  {group.keySkills.map((skill, skillIndex) => (
                                    <span 
                                      key={skillIndex}
                                      className={`px-2 py-1 text-xs ${colors.bg} ${colors.text} rounded border ${colors.border}`}
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Summary Stats */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-100/80 via-white/60 to-gray-100/80 dark:from-slate-800/80 dark:via-slate-700/60 dark:to-slate-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-slate-600/50 rounded-full">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
              {certificationsData.certifications.length} Certifications
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300 dark:bg-slate-600"></div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
              {certificationGroups.length} Specializations
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 