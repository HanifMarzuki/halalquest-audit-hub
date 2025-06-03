HalalQuest Audit Hub is a React-based web application designed to help businesses prepare for and maintain halal certification compliance. It provides tools for audit preparation, educational resources, expert consultation, and document management.

Technical Stack

Frontend Framework: React 18 with TypeScript
Build Tool: Vite
Styling: Tailwind CSS with shadcn/ui component library
Routing: React Router DOM
State Management: React Context API + Local State
Data Fetching: TanStack React Query
Icons: Lucide React
Responsive Design: Custom mobile detection hook
Application Structure

1. Core Layout Components

Layout (src/components/Layout/Layout.tsx)

Main application wrapper with navbar, content area, and footer
Includes floating action button for quick access to attachments
Responsive design with mobile-specific optimizations
Navbar (src/components/Layout/Navbar.tsx)

Sticky navigation with logo and menu items
Mobile-responsive with collapsible sheet menu
Quick actions dropdown for common tasks
Authentication placeholders (Sign In/Register)
Admin panel access link
2. Main Pages/Routes

Home Page (src/pages/Index.tsx)

Landing page with hero section
Quick action cards for main features
Feature highlights and call-to-action sections
Audit Checklist (src/pages/Checklist.tsx)

Main audit functionality wrapper
Houses the comprehensive ChecklistModule
Learn (src/pages/Learn.tsx)

Educational module wrapper
Intended Function: Course catalog, video library, articles, progress tracking
Connect (src/pages/Connect.tsx)

Expert consultation module wrapper
Intended Function: Expert directory, booking system, messaging, video calls
Attachments (src/pages/Attachments.tsx)

Centralized document management
File viewing, searching, and deletion capabilities
Admin (src/pages/Admin.tsx)

Administrative dashboard for content management
Restricted access (authentication placeholder)
3. Checklist Module (Core Feature)

ChecklistModule (src/components/Checklist/ChecklistModule.tsx)

Main container for audit functionality
Manages three audit phases with tabbed interface
Integrates with AttachmentsProvider for document management
Key Components:

ChecklistHeader: Progress tracking and sector selection
ChecklistPhase: Phase-specific content containers
ChecklistCategory: Groups related checklist items
ChecklistItem: Individual audit tasks with status tracking
ReportGenerator: Exports audit results and compliance reports
AttachmentManager: Links documents to specific checklist items
Data Management:

useChecklistData hook: Manages checklist state and progress
Sector-specific data loading from checklistData.ts
Item status tracking (not-started, in-progress, completed)
4. Admin Section

AdminModule (src/components/Admin/AdminModule.tsx)

Main administrative dashboard
Quick stats overview (audit items, learning content, experts)
Tabbed navigation for different management areas
AuditListManager (src/components/Admin/AuditListManager.tsx)

CRUD operations for audit checklist items
Categorization by sector, phase, priority
Item requirements and compliance settings
LearnContentManager (src/components/Admin/LearnContentManager.tsx)

Content management for educational materials
Support for videos, articles, and courses
Publication status and content organization
ExpertManager (src/components/Admin/ExpertManager.tsx)

Expert profile management
Verification status and rating system
Specialty areas and availability tracking
5. Context Providers

AttachmentsContext (src/components/Checklist/context/AttachmentsContext.tsx)

Global state management for document attachments
CRUD operations for file management
Links attachments to specific checklist items
6. Custom Hooks

useIsMobile - Responsive design detection useChecklistData - Checklist state and business logic management useToast - User feedback and notifications

Application Flow

1. User Journey

Landing Page → Select Feature → Complete Task → View Results
     ↓              ↓              ↓           ↓
Navigation → Quick Actions → Detailed Work → Progress Tracking
2. Audit Process Flow

Pre-Audit Phase → During Audit Phase → Post-Audit Phase
     ↓                    ↓                  ↓
Documentation →    Live Assessment →   Report Generation
Preparation         Compliance Check      Maintenance
3. Admin Workflow

Admin Access → Dashboard Overview → Select Management Area → CRUD Operations
     ↓               ↓                    ↓                    ↓
Authentication → Quick Stats View → (Audit/Learn/Expert) → Content Management
4. Data Flow

User Interaction → Hook State Update → Component Re-render → UI Update
                     ↓
              Context State (Attachments)
                     ↓
              Local Storage (persistence)
Key Features

1. Multi-Sector Support

Food industry compliance
Cosmetics industry standards
Pharmaceutical regulations
2. Phase-Based Auditing

Pre-Audit: Preparation and documentation
During Audit: Live assessment checklist
Post-Audit: Report generation and maintenance
3. Document Management

File attachment to checklist items
Centralized document viewing
Search and filter capabilities
Phase-based organization
4. Progress Tracking

Real-time completion percentages
Visual progress indicators
Sector-specific metrics
5. Content Management (Admin)

Audit checklist customization
Learning content publication
Expert network management
6. Responsive Design

Mobile-first approach
Adaptive layouts
Touch-friendly interfaces
Intended Future Functionality

1. Authentication System

User registration and login
Role-based access control (admin/user)
Profile management
2. Learning Management System

Course enrollment and progress tracking
Video streaming and interactive content
Certification and badges
3. Expert Consultation Platform

Real-time messaging and video calls
Appointment booking system
Expert rating and review system
4. Advanced Reporting

Automated compliance reports
Progress analytics and insights
Export capabilities (PDF, Excel)
5. Integration Capabilities

Third-party certification body APIs
Document management systems
Calendar and scheduling tools
File Organization

src/
├── components/
│   ├── Layout/          # Navigation and page structure
│   ├── Checklist/       # Core audit functionality
│   ├── Learn/           # Educational modules (placeholder)
│   ├── Connect/         # Expert consultation (placeholder)
│   ├── Admin/           # Administrative interface
│   └── ui/              # Reusable UI components
├── pages/               # Route components
├── hooks/               # Custom React hooks
└── lib/                 # Utilities and helpers
State Management Strategy

Local State: Component-specific UI state
Context API: Shared data (attachments, user preferences)
Custom Hooks: Business logic abstraction
TanStack Query: Server state management (future API integration)
