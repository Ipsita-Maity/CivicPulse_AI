# CivicPulse AI – Intelligent Citizen Development & Infrastructure Platform
> **Digital Public Good (DPG) for Multi-Country Sovereign Governance (BRICS Nations)**  
> *Decision-Support Platform Transforming Citizen Voices into Explainable Infrastructure Capital Allocation*  
> *Compliant with Digital Public Goods Alliance (DPGA) Specification & W3C WCAG 2.1 AAA Accessibility*

---

## 1. Executive Summary & Project Purpose

**CivicPulse AI** is an open-source, full-stack GovTech platform designed as a **Digital Public Good for governments**. It collects citizen development requests through voice, text, and messaging channels, analyzes them using AI, combines them with demographic, infrastructure condition, and public investment datasets, identifies demand hotspots, and provides transparent priority recommendations to government administrators.

### Core Philosophy: Decision-Support, Not Autonomous Decision-Maker
CivicPulse AI is explicitly designed as a **decision-support system**. The AI does not unilaterally allocate public budgets; all algorithmic recommendations are 100% explainable, decompose mathematical contributions across 7 criteria, and require authorized human review before any government procurement or project action.

---

## 2. Key Features

1. **Omnichannel & Multilingual Citizen Intake**:
   - Voice-to-text recording with live audio wave visualizers (Web Speech API + Faster-Whisper fallback).
   - 7 BRICS languages: English, Hindi (हिन्दी), Bengali (বাংলা), Russian (Русский), Chinese (中文), Portuguese (Português), Arabic (العربية).
   - Automatic 14-sector categorization: Roads, Water, Sanitation, Waste Management, Electricity, Street Lighting, Public Transport, Healthcare, Education, Digital Connectivity, Drainage, Environment, Public Facilities, Other.
   - Live AI Pre-Review card allowing the citizen to inspect and edit AI interpretation before submitting.
2. **Privacy & Sovereign Data Protection**:
   - Automated Differential Privacy PII scrubbing removing Aadhaar, CPF, phone numbers, emails, and personal names.
   - Public tracking via anonymous alphanumeric hashes (e.g., `CP-2026-IN-1042`).
3. **Geospatial Deduplication & Demand Hotspots**:
   - Spatial proximity clustering (PostGIS `ST_DWithin` 250m) and vector semantic similarity.
   - Grouping duplicate reports into single high-urgency clusters with endorsement incrementing.
   - Centroid-based demand hotspot cards showing affected population and infrastructure score.
4. **Transparent MCDA Prioritization Engine**:
   - Configurable factor weights across 7 criteria:
     $$\text{Priority Score} = w_{\text{demand}} x_{\text{demand}} + w_{\text{gap}} x_{\text{gap}} + w_{\text{impact}} x_{\text{impact}} + w_{\text{equity}} x_{\text{equity}} + w_{\text{safety}} x_{\text{safety}} + w_{\text{investment}} x_{\text{investment}} + w_{\text{geo}} x_{\text{geo}}$$
   - Administrator sliders to tune policy weights with immediate mathematical recalculation.
5. **Government Command Dashboard**:
   - Top KPI cards: Total Requests, Open Requests, Resolved Requests, High Priority, Active Projects, Beneficiaries, Avg Resolution Time.
   - Interactive Recharts: Category Distribution, Priority Breakdown, Intake vs Resolution Velocity, Department Workload & Backlog.
6. **Project Tracking & Lifecycle Management**:
   - Full lifecycle stages: Proposed &rarr; Under Review &rarr; Approved &rarr; In Progress &rarr; Completed &rarr; On Hold.
   - Interactive milestone progress sliders, officer inspection notes, and new project creation.
7. **Post-Intervention Impact Measurement ("Did the Project Actually Help?")**:
   - Before vs. After empirical indicators: Complaints (420 &rarr; 83), Physical Index (32 &rarr; 88), Satisfaction (41% &rarr; 89%).
   - Composite Impact Score with prominent observational disclaimer.
8. **Government Data Import & Mapping Portal**:
   - Upload CSV, Excel, or JSON datasets (population, road PCI, water telemetry).
   - Validation report: row counts, missing value %, invalid records, and geographic coverage.
   - Interactive visual column mapping tool before database ingestion.
9. **Cross-Regional Analytics & CSV Export**:
   - Multi-filter slice-and-dice (country, region, sector, priority).
   - One-click CSV export of filtered records for external audit.
10. **Cryptographic SHA-256 Merkle Audit Ledger**:
    - Every human approval, status override, and AI recalculation produces an immutable chained block.

---

## 3. Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Recharts, Framer Motion, Lucide Icons.
- **Backend**: Python FastAPI, SQLAlchemy 2.0, GeoAlchemy2, Pydantic v2, Uvicorn, JWT Auth.
- **Database**: PostgreSQL 16 with PostGIS 3.4 extensions, pgvector, Redis 7.
- **AI Microservice**: Python FastAPI, Faster-Whisper, IndicBERT / XLM-RoBERTa rules pipeline, Multi-Criteria Decision Analysis (MCDA).
- **Orchestration**: Docker, Docker Compose.

---

## 4. Repository Structure

```
civicpulse-ai/
├── frontend/ (integrated in root Next.js app)
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/                 # Next.js API Routes (mirroring backend REST APIs)
│   │   │   │   ├── auth/            # /api/auth/login, /api/auth/register
│   │   │   │   ├── requests/        # /api/requests, /api/requests/[id]
│   │   │   │   ├── hotspots/        # /api/hotspots
│   │   │   │   ├── recommendations/ # /api/recommendations, /approve, /reject
│   │   │   │   ├── projects/        # /api/projects, /api/projects/[id]
│   │   │   │   ├── datasets/        # /api/datasets, /api/datasets/upload
│   │   │   │   ├── analytics/       # /api/analytics
│   │   │   │   ├── audit-logs/      # /api/audit-logs
│   │   │   │   └── ai/analyze/      # /api/ai/analyze (10-stage AI pipeline)
│   │   │   ├── layout.tsx           # Sovereign layout with accessibility & providers
│   │   │   ├── page.tsx             # Universal multi-view entry point
│   │   │   └── globals.css          # Design system & tokens
│   │   ├── components/              # 10 Full-Stack Production Components
│   │   │   ├── Navbar.tsx           # Multilingual (7 BRICS) & Role Switcher
│   │   │   ├── CitizenPortal.tsx    # Voice/Text intake, AI pre-review, request tracking
│   │   │   ├── GovDashboard.tsx     # 7 KPIs, Recharts graphs, hotspots inspector
│   │   │   ├── NationalMapPage.tsx  # Region selector, layer toggles, comparison mode
│   │   │   ├── RecommendationsView.tsx # MCDA explainability & admin actions
│   │   │   ├── ProjectsTracker.tsx  # Lifecycle tracking, milestone logs & create
│   │   │   ├── ImpactMeasurement.tsx # Before vs After verified impact metrics
│   │   │   ├── DuplicateClustersView.tsx # PostGIS ST_DWithin cluster inspector
│   │   │   ├── DataImportView.tsx   # CSV/JSON upload, validation & column mapper
│   │   │   ├── AnalyticsView.tsx    # Cross-regional charts & CSV download
│   │   │   ├── AuditLogsView.tsx    # SHA-256 Merkle chain & AI transparency
│   │   │   └── DemoTourModal.tsx    # 3-minute guided hackathon tour modal
│   │   ├── lib/
│   │   │   ├── types.ts             # Universal TypeScript models
│   │   │   ├── demoData.ts          # 520+ synthetic requests, 22 projects, 15 clusters
│   │   │   └── store.tsx            # Reactive state manager & i18n context
│   │   └── locales/                 # Multilingual translation dictionaries
│   │       ├── en.json, hi.json, bn.json, ru.json, zh.json, pt.json, ar.json
├── backend/                         # Sovereign FastAPI Backend API
│   ├── main.py                      # FastAPI application with Section 21 REST APIs
│   ├── models.py                    # SQLAlchemy ORM & Pydantic v2 schemas
│   ├── requirements.txt             # Backend dependencies
│   ├── Dockerfile                   # Backend Docker build
│   └── schema.sql                   # PostgreSQL 16 + PostGIS schema DDL
├── ai-service/                      # Standalone Python AI Microservice
│   ├── main.py                      # FastAPI AI service entrypoint
│   ├── nlp_pipeline.py              # PII scrubbing & 14-sector intent classifier
│   ├── deduplication.py             # Spatial ST_DWithin & token similarity
│   ├── priority_engine.py           # Multi-Criteria Decision Analysis (MCDA)
│   ├── requirements.txt             # AI service dependencies
│   └── Dockerfile                   # AI service Docker build
├── database/                        # Database Migrations & Seeds
│   ├── schema.sql                   # Production PostgreSQL + PostGIS schema
│   └── seed.sql                     # Initial sovereign departments & admin seed
├── docs/                            # Documentation
│   ├── ARCHITECTURE.md              # 10-stage AI pipeline & system topology
│   └── API_SPEC.md                  # Comprehensive OpenAPI / REST specification
├── docker-compose.yml               # Multi-container orchestration
├── .env.example                     # Environment variables template
└── README.md                        # Master documentation
```

---

## 5. How to Run the Platform

### Option A: Immediate Zero-Configuration Mode (Recommended for Evaluation)
The entire platform is pre-compiled and runs directly via Node.js with built-in API routes, reactive state store, and 520+ pre-seeded BRICS records:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open your browser at **`http://localhost:3000`**. Everything is interactive: voice recording, AI pre-review card, government dashboard, project tracking, impact measurement, data import with column mapping, and CSV exports work instantly.

---

### Option B: Docker Compose Orchestration (Full Sovereign Stack)
To run the complete sovereign multi-container stack (Frontend + FastAPI Backend + AI Microservice + PostgreSQL/PostGIS + Redis):

```bash
# 1. Copy environment variables
cp .env.example .env

# 2. Build and launch all containers
docker-compose up --build
```

Access points:
- **Web Platform**: `http://localhost:3000`
- **FastAPI Core Docs (Swagger)**: `http://localhost:8000/docs`
- **AI Microservice Health**: `http://localhost:8001/health`
- **PostGIS Spatial Database**: `localhost:5432`

---

## 6. Pre-Configured Demo Credentials & Personas

Switch between roles instantly in the top navbar:

| Role | Persona Name | Email | Jurisdiction / Focus |
| :--- | :--- | :--- | :--- |
| **Citizen** | Amina Mansour | `citizen@civicpulse.org` | Pune East, India |
| **Government Admin** | Dr. Rajeshwar Sharma, IAS | `admin@civicpulse.org` | District Municipal Commissioner |
| **Department Officer** | Eng. Carlos Mendonça | `officer@civicpulse.org` | Senior Executive Civil Engineer, Brazil |
| **Super Admin** | Director Elena Petrova | `superadmin@civicpulse.org` | BRICS Multilateral Digital Governance, Russia |

---

## 7. 3–5 Minute Hackathon Demonstration Walkthrough

Click the **"3-Min Demo Tour"** button in the top navbar to step through the canonical hackathon scenario:

1. **Citizen Voice Ingestion**:
   - Select *Citizen Portal* &rarr; Click *Speak Instead of Typing* (or click quick test phrase *"There has been no streetlight near our school for several months"*).
   - Audio waveform animates, speech is converted to text, and PII is scrubbed.
2. **AI Pre-Review & Cluster Matching**:
   - The AI card instantly displays: Category = Street Lighting, Urgency = 84% (High), Duplicate Similarity = 76%, Routing = Urban Development & Street Lighting.
   - Citizen can adjust any detail before submitting.
3. **Government Demand Aggregation**:
   - Switch to *Gov Dashboard* &rarr; 127 citizen complaints are unified into **Hotspot Cluster #1042**.
   - Admin inspects the cluster: 48,000 citizens affected, physical deficit score 32/100.
4. **Geospatial Map Intelligence**:
   - Switch to *Geospatial Map* &rarr; Inspect PostGIS vector hexbins, toggle physical deficit overlays, and compare District B vs District A.
5. **AI Project Recommendations**:
   - Switch to *AI Recommendations* &rarr; View explainable proposed project with mathematical reasoning decomposition across safety, demand, and equity factors.
   - Click **[Approve Project]** &rarr; Generates project `PRJ-2026-081` with budget $480,000 USD and logs an immutable SHA-256 audit block.
6. **Project Lifecycle Tracking**:
   - Switch to *Projects* &rarr; Update execution milestone slider from 0% to 100%, and append officer inspection notes.
7. **Impact Measurement**:
   - Switch to *Impact* &rarr; Compare before/after metrics: Complaints fell 80% (420 &rarr; 83), Physical Index surged (32 &rarr; 88), and Satisfaction climbed to 89%.
8. **Data Import & CSV Export**:
   - Switch to *Data Import* &rarr; Load a sample CSV, view automatic validation (2,450 rows, 0.4% nulls), map columns, and commit.
   - Switch to *Analytics* &rarr; Download complete CSV report.

---

## 8. License & Governance

- **Software License**: Apache 2.0 (Permissive Open Source).
- **DPG Status**: Evaluated against the 9 Digital Public Goods Alliance (DPGA) standards (Open license, clean IP, privacy compliance, data sovereignty, platform independence).
- **Accessibility**: Built with semantic HTML, WCAG 2.1 AAA high-contrast toggle, and screen-reader skip links.
