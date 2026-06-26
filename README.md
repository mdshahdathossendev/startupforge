# 🚀 StartupForge

StartupForge is a modern platform designed to connect ambitious **Founders** with talented **Collaborators**. Whether you are building the next big thing or looking for an exciting startup opportunity to join, StartupForge provides the tools to filter, match, and build together.

🔗 **Live Demo:** [startupforge-theta.vercel.app](https://startupforge-theta.vercel.app)

---

## ✨ Key Features

* **👥 Role-Based Authentication & Gatekeeping:** Smart authentication onboarding flow supporting distinct paths for 🚀 **Founders** and 🤝 **Collaborators**.
* **📊 Dynamic Role Dashboards:** Custom-tailored consoles based on account levels. Founders get access to job metrics and application managers, while Collaborators receive an active opportunity feed and status trackers.
* **🛡️ Middleware Route Protection:** Secured directory routes utilizing Next.js Server-Side Middleware to prevent unauthorized route bypass.
* **🔍 Advanced Dynamic Filtering:** Search and filter opportunities seamlessly by **Role Title**, **Required Skills**, **Work Type** (Remote, On-site, Hybrid), and **Commitment Level** (Full-Time, Part-Time, Internship).
* **📄 Server-Driven Pagination:** Fast, SEO-optimized page routing paired with responsive client-side state handling.
* **💎 Modern Interactive UI:** Clean, responsive glassmorphism design built using Tailwind CSS and `@heroui/react` primitives.

---

## 🛠️ Tech Stack

| Category | Technology Used |
| :--- | :--- |
| **Framework** | Next.js 14+ (App Router) |
| **Styling** | Tailwind CSS |
| **UI Components** | `@heroui/react` (formerly NextUI) |
| **Icons** | `lucide-react` |
| **Security/Auth Boundary** | Next.js Middleware & Cookies / LocalStorage |
| **Deployment** | Vercel |

---

## 🔒 Authentication & Core Architecture

### 1. Role-Based Views
The core configuration processes individual layouts at runtime depending on the authenticated metadata:
* **Founder Console:** Access to **Post a New Opportunity**, applicant review boards, and team tracking analytics.
* **Collaborator Console:** Access to tracking **Applied Roles**, pending offers, and targeted matching.

### 2. Middleware Security
Client routes `/dashboard/*` are strictly controlled inside `middleware.js`. Unauthorized attempts without proper session cookie authorization triggers an immediate redirection back to the login interface.

---

## 📦 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have **Node.js** (v18.0.0 or higher) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/startupforge.git](https://github.com/your-username/startupforge.git)
   cd startupforge
