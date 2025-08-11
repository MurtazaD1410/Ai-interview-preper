# AI Interview Preparation Platform

An intelligent interview preparation platform that conducts mock interviews for both technical and non-technical roles using advanced voice AI technology. Get real-time feedback, practice with realistic scenarios, and boost your interview confidence.

## ✨ Features

- **AI-Powered Voice Assistant**: Natural conversation flow with advanced speech recognition and synthesis
- **Technical & Non-Technical Interviews**: Comprehensive coverage for various job roles and industries
- **Real-Time Feedback**: Instant analysis of your responses with actionable insights
- **Multiple Interview Types**: Behavioral, technical, case studies, and role-specific questions
- **Speech Analysis**: Evaluation of pace, clarity, filler words, and confidence levels
- **Performance Tracking**: Track your progress over multiple interview sessions
- **Customizable Sessions**: Tailor interviews based on job role, company, and difficulty level
- **Interview History**: Review past sessions and track improvement areas
- **Response Analytics**: Detailed breakdown of answer quality, relevance, and structure

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **AI/ML**: Google Generative AI (Gemini)
- **Voice Processing**: Vapi (Voice AI Platform)
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Firebase project setup
- Google AI Studio API key
- Vapi account and workflow setup

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MurtazaD1410/Ai-interview-preper.git
   cd Ai-interview-preper
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the `.env.local` file with your configuration:
   ```env
   # Firebase Configuration
   FIREBASE_PROJECT_ID="your_firebase_project_id"
   FIREBASE_PRIVATE_KEY="your_firebase_private_key"
   FIREBASE_CLIENT_EMAIL="your_firebase_client_email"
   NEXT_PUBLIC_FIREBASE_API_KEY="your_firebase_api_key"
   
   # Google Generative AI (Gemini)
   GOOGLE_GENERATIVE_AI_API_KEY="your_google_ai_api_key"
   
   # Vapi Voice AI Platform
   NEXT_PUBLIC_VAPI_WEB_TOKEN="your_vapi_web_token"
   NEXT_PUBLIC_VAPI_WORKFLOW_ID="your_vapi_workflow_id"
   ```

4. **Firebase Setup**
   
   Configure your Firebase project:
   
   - **Authentication**: Enable email/password and other desired auth methods
   - **Firestore**: Create collections for users, interviews, and feedback
   - **Storage**: Set up bucket for audio recordings and reports
   - **Security Rules**: Configure proper read/write permissions

5. **Vapi Configuration**
   
   Set up your Vapi workflow for voice interactions:
   
   - Create interview workflow with appropriate prompts
   - Configure voice settings and response handling
   - Set up webhook endpoints for real-time processing

6. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to start your interview preparation journey.

⭐ If you found this project helpful, please give it a star on GitHub!
