# 📚 My Study Buddy

> Transform your study materials into interactive learning experiences with AI-powered content generation.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ecf8e.svg)

## Overview

My Study Buddy is an intelligent web application that helps students study more effectively by automatically generating summaries, quizzes, and flashcards from their course materials. Built with React and powered by AI, it provides a personalized learning experience that adapts to each student's needs.

## ✨ Features

### 🔐 Secure Authentication
- Email-based sign up with verification
- Secure login via Supabase authentication
- Persistent session management
- Profile-based content organization

### 📊 Personal Dashboard
- View all your generated study materials in one place
- Manage and organize your content
- Delete materials you no longer need
- Track your study progress

### 📁 Flexible Content Input
- **File Upload**: Support for PDF, DOC, DOCX, and TXT files
- **Text Paste**: Direct input for notes, articles, or web content
- **Easy Switching**: Toggle between upload and paste modes seamlessly

### 🤖 AI-Powered Generation
- **Smart Summaries**: Condense lengthy materials into key points
- **Custom Quizzes**: Generate practice questions from your content
- **Flashcards**: Create memory aids for active recall
- **Selective Generation**: Choose which materials to create for each input

### 🎨 Customizable Interface
- Light and dark mode themes
- Responsive design for all devices
- Clean, distraction-free interface
- Intuitive navigation


## 📖 Usage

### Creating Study Materials

1. **Sign Up or Log In** to access your personal dashboard
2. **Navigate to the Home page** or generation interface
3. **Choose your input method**:
   - Upload a file (PDF, DOC, DOCX, TXT)
   - Paste text directly
4. **Select what to generate**:
   - ☑️ Summary
   - ☑️ Quiz
   - ☑️ Flashcards
5. **Click "Generate Study Materials"** and wait for AI processing
6. **View and manage** your materials from your profile

### Managing Content

- Access your **Profile Dashboard** to see all generated materials
- **Download** materials for offline use
- **Delete** content you no longer need
- All materials are automatically saved to your account

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend framework |
| **React Router** | Navigation and routing |
| **Supabase** | Authentication & database |
| **CSS Modules** | Scoped styling |
| **AI API** | Content generation |
| **Hooks** | State management (useState, useEffect) |

## 📂 Project Structure

```
my-study-buddy/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Home/
│   │   ├── Profile/
│   │   └── Auth/
│   ├── services/
│   │   ├── supabase.js
│   │   └── ai.js
│   ├── styles/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🗺️ Roadmap

- [ ] **Real-time Collaboration** - Study together with classmates
- [ ] **Adaptive Learning** - AI-powered difficulty adjustment
- [ ] **Mobile App** - Native iOS and Android applications
- [ ] **Material Editing** - In-app annotation and customization
- [ ] **Study Statistics** - Track your learning progress
- [ ] **Notification System** - Reminders and achievement alerts
- [ ] **Export Options** - PDF, Anki, and more formats



## 👥 Authors

- **Mame Diarra Dieng** - *Initial work* - (https://github.com/diarraaaa)

## 🙏 Acknowledgments

- Supabase for providing an excellent backend platform
- The React community for incredible tools and resources
- All contributors who help improve this project

## 📧 Contact

Have questions or suggestions? Reach out:

- Email: mamediarradieng@esp.sn

---

<div align="center">
Made with ❤️ for students everywhere
</div>
