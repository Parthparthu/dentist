export interface Doctor {
  id: string;
  name: string;
  role: string;
  credentials: string;
  specialization: string;
  bio: string;
  image: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefitTitle: string;
  benefits: string[];
  whoNeeds: string[];
  steps: ServiceStep[];
  recovery: string[];
  faqs: ServiceFAQ[];
  icon: string; // Must map to one of the keys in ServiceIcon.tsx
  metaTitle: string;
  metaDesc: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google' | 'Yelp' | 'Direct';
  isPlaceholder: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Before-After' | 'Equipment';
  description: string;
  image: string;
  beforeImage?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  originalPrice?: string;
  discountPrice?: string;
  discountBadge?: string;
  expiry: string;
  terms: string;
}

export interface ClinicConfig {
  clinicName: string;
  brandInitials: string;
  tagline: string;
  siteUrl: string;
  streetAddress: string;
  area: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  currency: string;
  currencySymbol: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappMsg: string;
  email: string;
  mapEmbedUrl: string;
  mapDirectionUrl: string;
  landmarkCopy: string;
  emergencyContactCopy: string;
  openingHours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
  schemaOpeningHours: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  geo: {
    latitude: number;
    longitude: number;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    yelp?: string;
    googleBusiness?: string;
  };
  stats: {
    experienceYearsPlaceholder: number;
    googleRatingPlaceholder: number;
    reviewsCountPlaceholder: number;
    safetyStandard: string;
  };
  reviewPlaceholderNotice: string;
  technologies: string[];
  paymentOptions: string[];
  doctors: Doctor[];
  services: ServiceDetail[];
  reviews: Review[];
  gallery: GalleryItem[];
  offers: SpecialOffer[];
}

export const clinicConfig: ClinicConfig = {
  clinicName: "Apex Dental Clinic",
  brandInitials: "A",
  tagline: "Modern Dental Care and Specialized Treatments with a Comfort-Focused Approach",
  siteUrl: "https://apexdentalgurugram.com",
  streetAddress: "102, Premium Heights, Sector 15",
  area: "Sector 15",
  city: "Gurugram",
  state: "Haryana",
  postalCode: "122001",
  country: "IN",
  currency: "INR",
  currencySymbol: "₹",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  whatsappMsg: "Hello, I would like to request a dental consultation appointment.",
  email: "appointments@apexdentalgurugram.com",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112236.43573708365!2d76.9535091763784!3d28.459496522339665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5d82f11ec7de!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapDirectionUrl: "https://maps.google.com/?q=Apex+Dental+Clinic+Sector+15+Gurugram",
  landmarkCopy: "Located on the 1st floor of Premium Heights. Free dedicated basement parking is available. Valet service can be requested at the building entrance.",
  emergencyContactCopy: "If you are experiencing severe discomfort, a knocked-out tooth, or sudden facial swelling, please call our emergency helpline (+91 98765 43210) immediately. We maintain daily on-call emergency slots to provide prompt relief.",
  openingHours: {
    weekdays: "09:00 AM - 08:00 PM (Mon - Fri)",
    saturdays: "10:00 AM - 06:00 PM",
    sundays: "Closed (Emergency on-call only)"
  },
  schemaOpeningHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00"
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "18:00"
    }
  ],
  geo: {
    latitude: 28.4594965,
    longitude: 77.0266383
  },
  socialLinks: {
    facebook: "https://facebook.com/apexdentalgurugram",
    instagram: "https://instagram.com/apexdentalgurugram",
    googleBusiness: "https://g.page/apexdentalgurugram"
  },
  stats: {
    experienceYearsPlaceholder: 15,
    googleRatingPlaceholder: 4.9,
    reviewsCountPlaceholder: 480,
    safetyStandard: "6-stage Class-B vacuum sterilization protocol with individual sealed pouches."
  },
  reviewPlaceholderNotice: "Note: The testimonials listed below are realistic placeholders representing typical patient satisfaction scores. Before production release, replace these with actual verified reviews from your Google Business Profile or other clinical records.",
  technologies: [
    "Intraoral 3D Digital Scanners (designed to minimize physical putty impressions)",
    "Low-Radiation Digital OPG & X-Rays for safe diagnostic imaging",
    "Computerized Local Anesthesia Delivery (designed to provide a more comfortable, controlled injection)",
    "Soft-Tissue Dental Lasers for conservative, minimally invasive gum care"
  ],
  paymentOptions: [
    "Credit/Debit Cards (Visa, MasterCard, RuPay)",
    "UPI payment facilities (Google Pay, PhonePe, Paytm)",
    "Interest-free monthly EMI options (via partner financial services)",
    "Cashless dental insurance claim assistance for suitable policies"
  ],
  doctors: [
    {
      id: "dr-amit-verma",
      name: "Dr. Amit Verma",
      role: "Chief Implantologist",
      credentials: "BDS, MDS (Prosthodontics), Fellow ICOI (USA)",
      specialization: "Dental Implants & Full Mouth Reconstructions",
      bio: "Dr. Amit Verma has over 15 years of clinical experience in dental implant surgery. He specializes in advanced bone grafting protocols and immediate placement procedures.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=400&fit=crop"
    },
    {
      id: "dr-priya-sharma",
      name: "Dr. Priya Sharma",
      role: "Senior Orthodontist & Smile Designer",
      credentials: "BDS, MDS (Orthodontics)",
      specialization: "Clear Aligners, Braces & Cosmetic Dentistry",
      bio: "Dr. Priya Sharma is a certified clear aligner provider. She focuses on aligning crowded teeth and restoring smiles using minimally invasive cosmetic bonding and veneer systems.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&h=400&fit=crop"
    }
  ],
  services: [
    {
      slug: "root-canal-treatment",
      title: "Root Canal Treatment",
      shortDesc: "A routine clinical procedure designed to resolve tooth infection and support comfort.",
      longDesc: "A Root Canal Treatment (RCT) is a standard dental procedure used to treat teeth with deep decay or pulp infection. Under our computerized local anesthesia protocol, our endodontists gently clean the infected pulp from within the canals, disinfect the chamber, and seal it with biocompatible materials. This is designed to preserve your natural tooth structure and prevent the spread of infection.",
      benefitTitle: "How Root Canal Therapy Can Help",
      benefits: [
        "Typically provides relief from persistent toothaches and sensitivity.",
        "Helps preserve the natural tooth structure, maintaining normal bite alignment.",
        "Restores proper chewing capability and biting pressure.",
        "Prevents the spread of dental infection to adjacent bone tissue."
      ],
      whoNeeds: [
        "Patients experiencing severe discomfort during chewing or biting.",
        "Lingering sensitivity to hot or cold temperatures after the stimulus is removed.",
        "Swelling, tenderness, or a small bump on the gums near a painful tooth.",
        "Dark discoloration of a tooth suggesting internal pulp damage."
      ],
      steps: [
        {
          title: "Diagnostics",
          description: "We perform digital X-rays to assess the root structure and check the extent of surrounding bone infection."
        },
        {
          title: "Anesthetic Comfort",
          description: "Local computerized anesthesia is administered, designed to numb the area comfortably and minimize injection discomfort."
        },
        {
          title: "Disinfection",
          description: "A small opening is created to access the pulp chamber. The damaged tissue is cleaned out using precise micro-files."
        },
        {
          title: "Sealing",
          description: "The canals are disinfected and filled with gutta-percha. A structural filling is then placed."
        }
      ],
      recovery: [
        "Typically, it is advisable to avoid chewing on the treated tooth until the final protective crown is cemented.",
        "Mild soreness is common for 2-3 days and is usually manageable with mild over-the-counter discomfort relief.",
        "Maintain regular brushing and flossing routines to keep the surrounding gum tissue healthy."
      ],
      faqs: [
        {
          question: "Is a root canal treatment painful?",
          answer: "Modern root canal procedures are designed to be highly comfortable. With local anesthesia, the sensation is typically comparable to getting a standard surface filling."
        },
        {
          question: "How many appointments are required?",
          answer: "In many cases, the treatment can be completed in a single visit of 45-60 minutes. Cases with severe or chronic infections may require a second visit to help ensure complete sterilization."
        },
        {
          question: "Is a dental crown always necessary afterwards?",
          answer: "A crown is highly recommended in most cases. Removing the pulp removes the tooth's blood supply, making it more brittle over time. A crown acts as a protective cap to help reduce the risk of future fractures."
        }
      ],
      icon: "Activity",
      metaTitle: "Root Canal Treatment in Gurugram | Endodontist Care",
      metaDesc: "Resolve tooth infection and discomfort with root canal treatments in Gurugram. Experienced endodontists. Schedule an evaluation today."
    },
    {
      slug: "dental-implants",
      title: "Dental Implants",
      shortDesc: "A long-term, natural-looking replacement fixture designed to restore missing teeth.",
      longDesc: "Dental implants are titanium posts that are surgically placed into the jawbone, where they function as replacement roots. Over a healing period, the titanium fuses with the bone (osseointegration), creating a secure anchor. A custom porcelain or zirconia crown is then attached to the post, resulting in a replacement tooth designed to look and function like a natural one.",
      benefitTitle: "Key Advantages of Dental Implants",
      benefits: [
        "Offers high stability and does not slip or shift during speaking or eating.",
        "Helps maintain jawbone density and facial contours following tooth loss.",
        "Allows replacement without altering or grinding adjacent healthy teeth.",
        "Designed for long-term durability when maintained with proper oral hygiene."
      ],
      whoNeeds: [
        "Adults with one or more missing teeth seeking a fixed replacement option.",
        "Patients looking for a more stable alternative to loose or shifting dentures.",
        "Individuals seeking to restore natural biting function and smile aesthetics."
      ],
      steps: [
        {
          title: "Evaluation & CBCT Scan",
          description: "We use a 3D Cone Beam CT scan to evaluate bone thickness and map the optimal surgical placement."
        },
        {
          title: "Fixture Placement",
          description: "The medical-grade titanium implant is placed in the jawbone under local anesthesia."
        },
        {
          title: "Fusion Period",
          description: "A healing period of 3 to 4 months is typically required for the implant post to fuse securely with the bone."
        },
        {
          title: "Restoration",
          description: "A connector abutment is placed and a custom-designed zirconia crown is bonded permanently."
        }
      ],
      recovery: [
        "A soft diet is recommended for the first few days following the placement procedure.",
        "Minor swelling can occur; applying a cold compress for the first 24 hours can support comfort.",
        "Avoid smoking or using straws during the initial week to support healing."
      ],
      faqs: [
        {
          question: "How long do dental implants typically last?",
          answer: "Dental implants are designed to be a long-term solution. With proper brushing, flossing, and regular clinical check-ups, they can last for many years."
        },
        {
          question: "Am I a suitable candidate for implant surgery?",
          answer: "Most healthy adults with adequate jawbone density are suitable candidates. If bone density is insufficient, bone grafting procedures can often be performed to help prepare the area."
        },
        {
          question: "How do implants compare to dental bridges?",
          answer: "Bridges require shaping adjacent healthy teeth to support the missing tooth crown. Implants are standalone structures that do not impact neighboring healthy teeth."
        }
      ],
      icon: "Shield",
      metaTitle: "Dental Implants in Gurugram | Permanent Tooth Replacement",
      metaDesc: "Restore missing teeth with custom dental implants in Gurugram. Experienced implantologists, digital planning. Book your consult."
    },
    {
      slug: "braces-and-clear-aligners",
      title: "Braces & Clear Aligners",
      shortDesc: "Orthodontic options designed to align crooked teeth and correct bite issues.",
      longDesc: "Orthodontic treatments help align teeth and improve bite function. We offer clear aligners (such as Invisalign), which are designed to be nearly invisible and removable, alongside traditional ceramic and metal braces. These treatments are designed to correct crowded teeth, gaps, overbites, and underbites, supporting better oral health.",
      benefitTitle: "Why Consider Orthodontic Alignment?",
      benefits: [
        "Aligned teeth are easier to clean, which can reduce the risk of decay and gum issues.",
        "Corrects bite alignment, helping to distribute chewing forces evenly.",
        "Clear aligners offer a highly aesthetic, discreet treatment option.",
        "Helps build a balanced, symmetrical smile."
      ],
      whoNeeds: [
        "Teens and adults with crowded, rotated, or overlapping teeth.",
        "Individuals with noticeable gaps between their teeth.",
        "Patients with bite issues such as overbites, underbites, or crossbites."
      ],
      steps: [
        {
          title: "Digital Scanning",
          description: "An intraoral scanner captures a precise 3D digital model of your teeth, avoiding putty impressions."
        },
        {
          title: "Treatment Planning",
          description: "Specialized software maps the planned movement of your teeth, showing a digital preview of the process."
        },
        {
          title: "Appliance Fitting",
          description: "Your custom aligner trays are provided, or traditional brackets are carefully bonded."
        },
        {
          title: "Periodic Adjustments",
          description: "Check-ups are scheduled every 4 to 8 weeks to monitor progress and adjust wires or issue new aligner sets."
        }
      ],
      recovery: [
        "Clear aligners must typically be worn for 20-22 hours daily, removed only for meals and cleaning.",
        "A feeling of pressure or tightness is normal for 24-48 hours after starting a new tray or adjusting wires.",
        "Brushing after meals is important to prevent staining aligners or brackets."
      ],
      faqs: [
        {
          question: "How long does orthodontic treatment typically take?",
          answer: "The duration varies depending on case complexity, typically ranging from 6 to 18 months for clear aligners, and 12 to 24 months for traditional braces."
        },
        {
          question: "Are clear aligners suitable for adults?",
          answer: "Yes. Clear aligners are a popular option for adults because they are discreet and do not interfere with professional or social routines."
        },
        {
          question: "Do aligners cause discomfort?",
          answer: "Some mild pressure is common when switching to a new tray. This is normal and indicates that the aligners are applying the gentle pressure required to move the teeth."
        }
      ],
      icon: "Sparkles",
      metaTitle: "Clear Aligners & Braces Gurugram | Orthodontist Clinic",
      metaDesc: "Achieve aligned teeth with clear aligners and modern braces in Gurugram. Digital treatment planning. Schedule orthodontic consult."
    },
    {
      slug: "smile-designing",
      title: "Smile Designing",
      shortDesc: "A cosmetic approach combining dental treatments to enhance overall smile aesthetics.",
      longDesc: "Smile Designing is a customized cosmetic process that assesses your facial proportions, lip lines, and skin tone. Using thin porcelain veneers, cosmetic composite bonding, and teeth whitening, we address aesthetic concerns such as chips, spacing, or minor misalignments, aiming to achieve a natural, balanced smile.",
      benefitTitle: "Aesthetic Enhancements with Smile Design",
      benefits: [
        "Helps cover permanent stains, minor chips, and surface irregularities.",
        "Reshapes and aligns teeth to create a symmetrical appearance.",
        "Veneers use durable porcelain materials designed to resist staining.",
        "Provides a customized restoration that matches your natural features."
      ],
      whoNeeds: [
        "Patients seeking to restore worn-down, chipped, or slightly cracked front teeth.",
        "Individuals with permanent discoloration that does not respond to whitening gels.",
        "Individuals with minor spacing, uneven tooth lengths, or gummy smiles."
      ],
      steps: [
        {
          title: "Esthetic Analysis",
          description: "We take digital scans and studio photographs to analyze your facial symmetry and tooth proportions."
        },
        {
          title: "Diagnostic Preview",
          description: "A digital preview model is created, showing proposed modifications before beginning treatment."
        },
        {
          title: "Conservative Prep",
          description: "For veneers, teeth are prepared conservatively. Custom dental bonding is applied directly in select cases."
        },
        {
          title: "Bonding & Reveal",
          description: "The custom restorations are bonded to the teeth and polished to a natural luster."
        }
      ],
      recovery: [
        "Avoid using front veneers or bonded teeth to bite directly into very hard items (like ice or hard candy).",
        "Brushing twice daily and regular flossing are essential to maintain the restorations.",
        "A nightguard may be recommended if you have a habit of clenching or grinding teeth at night."
      ],
      faqs: [
        {
          question: "How long do porcelain veneers typically last?",
          answer: "With good oral care and regular check-ups, porcelain veneers can last between 10 to 15 years."
        },
        {
          question: "Is the procedure uncomfortable?",
          answer: "The process is minimally invasive. Local anesthesia is used during preparation to support your comfort."
        },
        {
          question: "Will the result look natural?",
          answer: "Yes. Restorations are designed to match the shade, translucency, and shape of your surrounding teeth for a natural appearance."
        }
      ],
      icon: "Smile",
      metaTitle: "Cosmetic Smile Designing in Gurugram | Porcelain Veneers",
      metaDesc: "Enhance your smile with cosmetic smile designing in Gurugram. Premium veneers, composite bonding, and digital previews."
    },
    {
      slug: "teeth-whitening",
      title: "Teeth Whitening",
      shortDesc: "A safe, clinically supervised process designed to brighten discolored teeth.",
      longDesc: "Professional teeth whitening is a safe way to treat surface stains caused by aging, tobacco, and staining foods or drinks like coffee and tea. Our in-office whitening treatments use whitening gels formulated with desensitizing agents, designed to lift stains safely without altering the underlying tooth structure.",
      benefitTitle: "Benefits of Professional Whitening Care",
      benefits: [
        "Typically achieves a noticeable change in shade within a single visit.",
        "Contains desensitizers designed to minimize temporary post-treatment sensitivity.",
        "Uses protective barriers to safeguard the gums and soft tissues.",
        "Supervised by clinical professionals to help ensure even, safe results."
      ],
      whoNeeds: [
        "Individuals seeking to brighten teeth discolored by food, drink, or natural aging.",
        "Patients looking for a quick, non-invasive cosmetic enhancement before a major event.",
        "Individuals looking for a safe, clinically supervised alternative to home kits."
      ],
      steps: [
        {
          title: "Assessment",
          description: "We clean the teeth, check for any sensitivity issues, and record the baseline shade."
        },
        {
          title: "Gum Protection",
          description: "A specialized barrier gel is applied over the gums to protect them from the whitening agent."
        },
        {
          title: "Gel Application",
          description: "The professional-strength whitening gel is applied carefully to the tooth surfaces."
        },
        {
          title: "Light Activation",
          description: "A specialized blue light is used in cycles to help activate the gel and lift surface stains."
        }
      ],
      recovery: [
        "It is recommended to avoid highly staining foods and drinks (like coffee, tea, turmeric, red wine) for 48 hours.",
        "Some temporary sensitivity to hot or cold is normal for 24 hours and typically resolves quickly.",
        "Maintain good brushing habits and use a soft-bristled toothbrush."
      ],
      faqs: [
        {
          question: "Does professional whitening damage tooth enamel?",
          answer: "No. Professional bleaching gels are formulated to be safe. When applied under clinical supervision, they do not erode or weaken the enamel."
        },
        {
          question: "How long do teeth whitening results typically last?",
          answer: "Results can last from 1 to 2 years, depending on your dietary habits (such as coffee, tea, or tobacco use) and oral hygiene."
        },
        {
          question: "Does it work on dental fillings or crowns?",
          answer: "Whitening agents only affect natural tooth structure. They will not change the color of existing crowns, veneers, or composite fillings."
        }
      ],
      icon: "Sun",
      metaTitle: "Laser Teeth Whitening in Gurugram | Safe Dental Bleaching",
      metaDesc: "Brighten your smile safely with professional in-office teeth whitening in Gurugram. Clinical supervision, reduced sensitivity. Book appointment."
    },
    {
      slug: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      shortDesc: "Gentle dental care for children, focusing on preventive treatments and positive habits.",
      longDesc: "Our pediatric services are designed to support a positive, stress-free dental experience for children and teenagers. We focus on preventive care, including cavity-blocking dental sealants and fluoride applications. Our dentists use gentle techniques to help children build healthy oral hygiene habits in a welcoming environment.",
      benefitTitle: "Specialized Preventive Care for Children",
      benefits: [
        "Helps children establish positive, fear-free attitudes toward dental check-ups.",
        "Dental sealants and fluoride help protect developing teeth from decay.",
        "Monitors jaw development and tooth eruption to check for orthodontic needs.",
        "Provides gentle guidance on habits such as thumb-sucking and pacifier use."
      ],
      whoNeeds: [
        "Infants cutting their first primary teeth (a first dental checkup is recommended by age 1).",
        "Children with toothaches, visible cavities, or early signs of decay.",
        "Active children who need custom mouthguards to protect teeth during sports."
      ],
      steps: [
        {
          title: "Introduction",
          description: "We introduce the child to the clinic environment using simple, friendly terms to help them feel at ease."
        },
        {
          title: "Gentle Check",
          description: "The dentist checks the child's gums, alignment, and check for any signs of early decay."
        },
        {
          title: "Preventive Care",
          description: "We clean primary teeth and apply a protective fluoride varnish to help strengthen enamel."
        },
        {
          title: "Guidance",
          description: "We share helpful diet and brushing tips with the parents to support good oral health at home."
        }
      ],
      recovery: [
        "If local anesthesia was used, monitor the child for 2 hours to ensure they do not accidentally bite their numb cheek or lip.",
        "Encourage brushing twice daily with a soft toothbrush and age-appropriate fluoride toothpaste.",
        "Limit sugary snacks and treats between meals to help prevent cavities."
      ],
      faqs: [
        {
          question: "When should my child first visit the dentist?",
          answer: "Dentists recommend scheduling the first visit within six months after the first tooth erupts, or by the child's first birthday, to establish a preventive routine."
        },
        {
          question: "What are dental sealants and are they safe?",
          answer: "Sealants are thin, protective coatings applied to the deep grooves of the chewing surfaces of the back molars. They are safe and act as a physical barrier to prevent food and plaque from accumulating."
        },
        {
          question: "Why treat cavities in baby teeth if they will fall out?",
          answer: "Baby teeth play an important role in chewing, speaking, and holding space for permanent teeth. Untreated decay can cause pain, infection, and premature loss, which may lead to spacing issues for adult teeth."
        }
      ],
      icon: "Smile",
      metaTitle: "Pediatric Dentist Gurugram | Gentle Kids Dental Clinic",
      metaDesc: "Provide your child with a positive dental experience. Pediatric check-ups, dental sealants, and cavity prevention in Gurugram."
    },
    {
      slug: "crowns-and-bridges",
      title: "Crowns & Bridges",
      shortDesc: "Custom-fitted crowns to protect damaged teeth and bridges to replace missing gaps.",
      longDesc: "Dental crowns and bridges are custom restorations designed to rebuild damaged teeth or replace missing ones. A crown (or cap) covers a cracked, worn, or root-canal-treated tooth to restore its structure and durability. A bridge uses adjacent healthy teeth to anchor a replacement tooth, closing gaps and restoring your bite.",
      benefitTitle: "Restorative Benefits of Crowns & Bridges",
      benefits: [
        "Designed to reinforce and protect teeth damaged by decay or fracture.",
        "Helps prevent remaining teeth from shifting into missing gaps.",
        "We offer metal-free zirconia and ceramic options for a natural match.",
        "Restores normal chewing efficiency and biting alignment."
      ],
      whoNeeds: [
        "Patients with cracked, weak, or severely worn tooth structure.",
        "Patients who have had a root canal and need a protective cap.",
        "Patients missing one or more consecutive teeth who prefer a fixed restoration over partial dentures."
      ],
      steps: [
        {
          title: "Tooth Preparation",
          description: "The support teeth are gently shaped under local anesthesia to allow the crown or bridge to fit securely."
        },
        {
          title: "3D Impression",
          description: "An intraoral scanner takes a high-precision digital impression of the prepared teeth."
        },
        {
          title: "Temporary Cap",
          description: "A temporary crown is fitted to protect the tooth while the laboratory crafts the final restoration."
        },
        {
          title: "Final Fit",
          description: "The temporary crown is removed, the final zirconia or ceramic crown is adjusted for fit, and then cemented."
        }
      ],
      recovery: [
        "It is best to avoid sticky or very hard foods for 24 hours to let the dental cement cure fully.",
        "Floss carefully around the crowns, and use specialized cleaning aids under bridges to keep gums clean.",
        "Brush twice daily with a non-abrasive fluoride toothpaste to maintain the underlying teeth."
      ],
      faqs: [
        {
          question: "What is the difference between a crown and a bridge?",
          answer: "A crown is a single protective cap that covers one damaged tooth. A bridge is a connected restoration used to fill the gap of one or more missing teeth, anchored to the surrounding teeth."
        },
        {
          question: "How long do dental crowns typically last?",
          answer: "With good home care and regular check-ups, zirconia or ceramic crowns can last between 10 to 15 years, and often longer."
        },
        {
          question: "Does the tooth preparation process cause discomfort?",
          answer: "Local anesthetic is used during preparation to ensure comfort. After the appointment, some mild sensitivity is normal and typically resolves within a few days."
        }
      ],
      icon: "Layers",
      metaTitle: "Crowns & Bridges Gurugram | Zirconia & Ceramic Caps",
      metaDesc: "Restore cracked or missing teeth with metal-free zirconia crowns and bridges in Gurugram. High-precision digital fit. Book consult."
    },
    {
      slug: "emergency-dental-care",
      title: "Emergency Dental Care",
      shortDesc: "Urgent same-day appointment slots designed to relieve severe tooth pain and swelling.",
      longDesc: "Dental emergencies require prompt care to relieve discomfort and protect your oral health. Whether you are dealing with a severe toothache, a knocked-out tooth from an injury, a broken restoration, or painful gum swelling, we offer same-day emergency appointments. Our goal is to diagnose the root cause and stabilize your condition quickly.",
      benefitTitle: "Immediate Relief During Emergencies",
      benefits: [
        "Same-day appointments prioritized to help relieve severe pain.",
        "Prompt evaluation for knocked-out teeth to support potential re-implantation.",
        "Helps check spreading infections that can cause facial swelling.",
        "Provides temporary or permanent repair of broken crowns or dental appliances."
      ],
      whoNeeds: [
        "Patients suffering from severe, constant dental pain that disrupts sleep.",
        "Patients with a displaced, loose, or knocked-out tooth due to physical trauma.",
        "Individuals experiencing sudden, painful swelling of the mouth, gums, or cheek.",
        "Individuals with persistent bleeding following a dental procedure or injury."
      ],
      steps: [
        {
          title: "Triage Call",
          description: "When you call, our team assesses your symptoms and guides you on initial first aid steps."
        },
        {
          title: "Diagnostic Check",
          description: "Upon arrival, we take targeted digital X-rays to locate the source of trauma or infection."
        },
        {
          title: "Immediate Treatment",
          description: "Anesthesia or pain relief is administered, and the necessary stabilization treatment is performed."
        },
        {
          title: "Follow-up Plan",
          description: "We prescribe appropriate medication (such as antibiotics or pain relief) and plan any subsequent restorative work."
        }
      ],
      recovery: [
        "Follow all post-operative instructions carefully, particularly regarding prescriptions and diet.",
        "If a tooth was extracted, avoid rinsing, spitting, or using straws for the first 24 hours to support healing.",
        "Stick to soft, cool foods and stay hydrated during the initial recovery phase."
      ],
      faqs: [
        {
          question: "What should I do if a tooth is knocked out?",
          answer: "Handle the tooth only by the crown, rinse it gently with water (do not scrub), and try to place it back in the socket. If that is not possible, place it in a cup of milk or saliva and contact us immediately. Prompt treatment, ideally within 60 minutes, increases the chance of saving the tooth."
        },
        {
          question: "How do I know if my condition is a dental emergency?",
          answer: "If you have severe pain that does not respond to over-the-counter pain relief, swelling in your face or jaw, or bleeding that does not stop, it is a dental emergency that requires immediate care."
        },
        {
          question: "Do you offer emergency care outside of regular hours?",
          answer: "Yes, we prioritize emergency calls. Please contact our main helpline (+91 98765 43210) for on-call assistance and advice."
        }
      ],
      icon: "AlertTriangle",
      metaTitle: "Emergency Dentist Gurugram | Same-Day Urgent Dental Care",
      metaDesc: "Need an emergency dentist in Gurugram? Call Apex Dental for immediate same-day relief from severe toothaches, trauma, and jaw swelling."
    }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "R. Malhotra",
      rating: 5,
      text: "Received a root canal treatment at the clinic. The process was explained clearly, and the endodontist was very gentle, ensuring I felt comfortable throughout the procedure.",
      date: "2026-05-15",
      source: "Google",
      isPlaceholder: true
    },
    {
      id: "rev-2",
      author: "S. Sen",
      rating: 5,
      text: "Very satisfied with my clear aligner treatment. The 3D scan and orthodontic treatment plan showed exactly what to expect. My alignment is progressing as planned.",
      date: "2026-04-20",
      source: "Google",
      isPlaceholder: true
    },
    {
      id: "rev-3",
      author: "V. Singh",
      rating: 5,
      text: "Had dental implant surgery for a missing tooth. The implant feels highly stable and the crown matches my other teeth perfectly. Professional and clean clinic environment.",
      date: "2026-05-02",
      source: "Google",
      isPlaceholder: true
    },
    {
      id: "rev-4",
      author: "M. Nair",
      rating: 5,
      text: "Took my child for preventive dental sealants. The pediatric dentist made the check-up highly comfortable and stress-free. Very clean, family-friendly facilities.",
      date: "2026-05-28",
      source: "Google",
      isPlaceholder: true
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Clinical Operatory",
      category: "Clinic",
      description: "Our modern treatment rooms featuring digital OPG X-ray viewers and sterile setups.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&h=450&fit=crop"
    },
    {
      id: "gal-2",
      title: "Sanitised Patient Lounge",
      category: "Clinic",
      description: "Comfortable, clean waiting lounge designed to help patients feel relaxed before appointments.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&h=450&fit=crop"
    },
    {
      id: "gal-3",
      title: "Restoration Case Study",
      category: "Before-After",
      description: "Restoring missing teeth structure with custom dental implants after clinical evaluation.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&h=450&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&h=450&fit=crop"
    },
    {
      id: "gal-4",
      title: "Orthodontic Progress Study",
      category: "Before-After",
      description: "Aligning teeth spacing using clear aligner trays over a 12-month period.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&h=450&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&h=450&fit=crop"
    }
  ],
  offers: [
    {
      id: "off-1",
      title: "New Patient Check-Up & Cleaning Package",
      description: "Includes general dental consultation, digital X-ray diagnostics, scaling (cleaning), and polishing.",
      originalPrice: "₹3,500",
      discountPrice: "₹999",
      discountBadge: "Special Price",
      expiry: "Ongoing template promotion",
      terms: "Applicable only to new patients booking online."
    },
    {
      id: "off-2",
      title: "Clear Aligner Scan & Consult",
      description: "Includes initial assessment by an orthodontist and a digital preview of teeth movement.",
      originalPrice: "₹2,500",
      discountPrice: "FREE",
      discountBadge: "Complimentary",
      expiry: "Subject to slot availability",
      terms: "Pre-booking required. Scan is diagnostic and does not include aligner trays."
    },
    {
      id: "off-3",
      title: "Implant Consult & OPG Check Package",
      description: "Includes a dental implant consult with our senior MDS surgeon and a digital diagnostic panoramic scan.",
      originalPrice: "₹4,500",
      discountPrice: "₹1,500",
      discountBadge: "Subsidized",
      expiry: "Ongoing promotion",
      terms: "Valid for implant treatment cases only."
    }
  ]
};
