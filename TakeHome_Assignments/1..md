
# Frontend Take-Home Assignment: Language Translator

## Objective

Build a **Language Translator App** using **Next.js, Aceternity UI, Magic UI Components, and Hugging Face's translation models**. The app should feature a futuristic UI with seamless text translation between different languages.

---

## 📌 Learning Outcomes

By completing this assignment, you will:

- Learn how to use **Hugging Face's translation models** via API calls.
- Design a **futuristic UI** using **Aceternity UI** and **Magic UI Components**.
- Implement a **dynamic language selection feature** for translations.
- Utilize **Next.js** for building a smooth, performant frontend.

---

## 🛠️ Project Setup

### Step 1: Initialize the Next.js App

Run the following command to set up a Next.js project:

```bash
npx create-next-app@latest language-translator --javascript
cd language-translator
npm install
```

### Step 2: Install Dependencies

Add the required libraries:

```bash
npm install axios 
```

- **axios**: For making API requests to Hugging Face.
- **@aceternity**: [https://ui.aceternity.com/](https://ui.aceternity.com/)
- **@magic-ui**: https\://magicui.design/&#x20;

### Step 3: Folder Structure

Create this basic structure inside your project:

```
language-translator/
│── src/
│   ├── components/
│   │   ├── InputBar.js        // Input field with language selection
│   │   ├── TranslateButton.js // Button to trigger translation
│   │   ├── OutputBox.js       // Displays translated text
│   │
│   ├── pages/
│   │   ├── index.js           // Main translation page
│   │
│   ├── lib/
│   │   ├── translateService.js // Handles API requests to Hugging Face
│   │
│   ├── styles/
│   │   ├── globals.css         // Global styles using Aceternity UI
│
│── public/
│── package.json
│── README.md
```

---

## 📌 Step 4: Build the Components

### 1️⃣ Input Bar Component (`InputBar.js`)

- Provides a **text input field**.
- Includes **dropdowns** to select the **source and target languages**.
- Styled with **Aceternity UI** for a futuristic look.

### 2️⃣ Translate Button Component (`TranslateButton.js`)

- Triggers the **translation request**.
- Uses **Magic UI Components** for an animated button effect.

### 3️⃣ Output Box Component (`OutputBox.js`)

- Displays the **translated text** dynamically.
- Uses an elegant UI for futuristic text display.

### 4️⃣ Translation Service (`translateService.js`)

- Makes an API call to Hugging Face for translation.
- Request includes the **text, source language, and target language**.

#### API Request Example:

```javascript
import axios from 'axios';

export const translateText = async (text, sourceLang, targetLang) => {
    const response = await axios.post('https://api-inference.huggingface.co/models/facebook/m2m100_418M', {
        inputs: text,
        source_lang: sourceLang,
        target_lang: targetLang
    }, {
        headers: { 'Authorization': `Bearer YOUR_HUGGINGFACE_API_KEY` }
    });
    return response.data;
};
```

---

## 🎯 Bonus Features (Optional)

- **Animated UI with Magic UI** ✨
- **Speech-to-Text Input** 🎙️
- **Text-to-Speech Output** 🔊
- **Dark Mode Toggle** 🌙

---

## 📝 Submission Guidelines

- **GitHub Repository**: Submit a link to your private GitHub repository.
- **Live URL**: Deploy the project on Vercel or Netlify and provide the URL.
- **README.md**: Include:
  - Instructions to run locally (`npm install && npm run dev`).
  - Notes on your implementation or bonus features.

---

## 🎯 Evaluation Criteria

✅ Proper API integration with Hugging Face

✅ Clean, modular code with reusable components

✅ Aesthetic and futuristic UI design

✅ Smooth language selection and translation experience

✅ Optional features implemented (Bonus points)

---

## 🚀 Running the App

Start the Next.js app:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to test the language translator.

Good luck! 🚀
