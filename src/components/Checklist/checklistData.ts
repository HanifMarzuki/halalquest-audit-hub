
interface ChecklistDataItem {
  item: string;
  description: string;
}

interface SectorData {
  PreAuditReadiness: ChecklistDataItem[];
  DuringAudit: ChecklistDataItem[];
  PostAuditMaintenance: ChecklistDataItem[];
}

interface ChecklistDataType {
  Food: SectorData;
  Cosmetics: SectorData;
  Pharmaceuticals: SectorData;
}

export const checklistData: ChecklistDataType = {
  Food: {
    PreAuditReadiness: [
      {
        item: "All ingredients have valid Halal Certificates",
        description: "Every food item, additive, and flavoring used must have proof of halal certification."
      },
      {
        item: "Supplier list updated with Halal status verified",
        description: "A current, verified list of suppliers confirming their halal compliance status."
      },
      {
        item: "CoA or Halal certificates obtained for each critical item",
        description: "Critical raw materials must be backed with Certificates of Analysis or halal certs."
      },
      {
        item: "Sertu cleansing record for any previously non-Halal utensils/surfaces",
        description: "Documentation showing that sertu cleansing (Islamic purification) was done correctly."
      },
      {
        item: "Separate utensils for Halal handling are labeled and used correctly",
        description: "All halal tools and utensils should be clearly marked and not cross-used."
      },
      {
        item: "Halal Policy documented and accessible to staff",
        description: "The company must have a formal written policy on halal compliance that is shared internally."
      },
      {
        item: "Internal Halal Committee (JKHD) is formed and trained",
        description: "An internal team (Jawatankuasa Halal Dalaman) responsible for halal management should exist."
      },
      {
        item: "Food handlers have received basic Halal compliance training",
        description: "Staff involved in food handling must be trained on halal principles."
      },
      {
        item: "Cleanliness and pest control schedules are up to date",
        description: "Hygiene and pest control records must be maintained and aligned with halal hygiene standards."
      },
      {
        item: "SOPs are standardized across branches (for franchises/chains)",
        description: "Consistent compliance practices across locations are required for centralized halal assurance."
      }
    ],
    DuringAudit: [
      {
        item: "Halal Committee can explain Halal assurance workflow",
        description: "Auditors may question the internal process; team members must articulate it clearly."
      },
      {
        item: "Material flows are traceable from receipt to serving",
        description: "A complete and traceable supply chain from purchase to consumption must be demonstrable."
      },
      {
        item: "Sertu cleansing records are available upon request",
        description: "These documents must be ready to show proper ritual cleansing was performed when necessary."
      },
      {
        item: "Ingredient, supplier, and training records are accessible",
        description: "Must maintain accessible logs and evidence of approved ingredients and staff training."
      },
      {
        item: "Menus, signage, and labels are clear and not misleading",
        description: "Product communication must not imply halal status incorrectly or create confusion."
      },
      {
        item: "Food trucks/stalls have documentation accessible on-site",
        description: "For mobile businesses, all halal verification documents must travel with the business."
      },
      {
        item: "Food manufacturers can demonstrate batch traceability",
        description: "Companies should be able to prove that each production batch meets halal standards."
      },
      {
        item: "Staff can explain what ingredients or practices are Haram",
        description: "Frontliners must know the difference between halal and haram in ingredients and practices."
      }
    ],
    PostAuditMaintenance: [
      {
        item: "Internal halal audits conducted at least quarterly",
        description: "A schedule of self-assessments to catch non-compliance early."
      },
      {
        item: "Halal certificate renewal tracked with reminders",
        description: "A tracking system to ensure timely renewal of certificates and avoid lapses."
      },
      {
        item: "New ingredients and suppliers are reviewed before approval",
        description: "No new items should be used before verifying halal status."
      },
      {
        item: "Refresher halal training is provided every 6–12 months",
        description: "Continuous education for staff to stay updated on new standards or practices."
      },
      {
        item: "Records of complaints or product recalls are updated",
        description: "Documenting issues and resolutions related to halal non-compliance or customer feedback."
      },
      {
        item: "Cleaning and pest control schedules are maintained",
        description: "Hygiene routines must be documented and adhered to consistently."
      },
      {
        item: "Surveillance audit readiness maintained throughout the year",
        description: "The business should always be prepared for unannounced inspections by halal authorities."
      }
    ]
  },
  Cosmetics: {
    PreAuditReadiness: [
      {
        item: "Verify halal status of all cosmetic ingredients",
        description: "Ensure all raw materials, fragrances, and excipients are halal-certified."
      },
      {
        item: "Check supplier compliance with halal standards",
        description: "Obtain halal certificates and declarations from ingredient suppliers."
      },
      {
        item: "Label all equipment dedicated to halal production",
        description: "Ensure no cross-contamination with non-halal products or materials."
      },
      {
        item: "Establish internal halal committee for cosmetics unit",
        description: "Form a responsible body for overseeing halal practices."
      },
      {
        item: "Halal training for staff on najs, sertu, and ingredient control",
        description: "Employees must understand halal requirements specific to cosmetics."
      }
    ],
    DuringAudit: [
      {
        item: "Provide traceability from sourcing to packaging",
        description: "Maintain records of ingredient sourcing, production, and packaging processes."
      },
      {
        item: "Demonstrate proper sertu procedures when applicable",
        description: "Show records of najs al-mughallazah cleansing when needed."
      },
      {
        item: "Display correct halal labeling and advertising",
        description: "Packaging must reflect halal status and not mislead consumers."
      },
      {
        item: "Show segregation of halal vs non-halal products",
        description: "There must be physical and documented separation of halal and non-halal items."
      }
    ],
    PostAuditMaintenance: [
      {
        item: "Update supplier and ingredient list regularly",
        description: "Review and re-verify ingredient sources periodically."
      },
      {
        item: "Conduct refresher training every 12 months",
        description: "Ongoing halal compliance education for all production and QA staff."
      },
      {
        item: "Monitor cleanliness and hygiene SOP compliance",
        description: "Maintain logs for sanitation, pest control, and storage practices."
      },
      {
        item: "Prepare for unannounced surveillance audits",
        description: "Ensure documentation and practices are audit-ready at all times."
      }
    ]
  },
  Pharmaceuticals: {
    PreAuditReadiness: [
      {
        item: "Ensure API and excipients are halal-compliant",
        description: "All active ingredients and carriers must be free from non-halal sources."
      },
      {
        item: "Verify that manufacturing premises follow halal GMP",
        description: "Premises should follow halal good manufacturing practices and be free from najs."
      },
      {
        item: "Label equipment and production areas for halal status",
        description: "Clear designation and separation of halal and non-halal production."
      },
      {
        item: "Train QA and production staff on halal pharmaceutical requirements",
        description: "Staff should understand MS 2424 and related SOPs."
      }
    ],
    DuringAudit: [
      {
        item: "Show traceability from raw material to finished product",
        description: "Maintain documentation from supplier certification to product release."
      },
      {
        item: "Demonstrate halal assurance management system",
        description: "Internal system that ensures ongoing compliance with halal principles."
      },
      {
        item: "Display segregation and cleanliness practices",
        description: "All tools, containers, and production lines must avoid cross-contamination."
      }
    ],
    PostAuditMaintenance: [
      {
        item: "Update halal certificates and declarations annually",
        description: "Renew certificates and perform internal compliance checks regularly."
      },
      {
        item: "Maintain cleanroom and facility sanitation logs",
        description: "Ensure hygiene logs are accurate and meet halal expectations."
      },
      {
        item: "Prepare for recurring inspections by halal authorities",
        description: "Track past audits and implement continuous improvement steps."
      }
    ]
  }
};
