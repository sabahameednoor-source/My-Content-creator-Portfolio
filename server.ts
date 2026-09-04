import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini AI Chatbot / Assistant
  app.post("/api/chat", async (req: express.Request, res: express.Response) => {
    try {
      const { message } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.json({
          reply: "I am Saba Hameed's AI Portfolio Concierge. I can answer questions about Saba's AI product design expertise, content creation portfolio, prompt engineering, rates, and availability. Feel free to contact her directly at sabahameednoor@gmail.com!"
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are Saba Hameed's AI Assistant on her portfolio website (sabahameed.com).
Your goal is to answer questions from potential clients, founders, brands, recruiters, and visitors about Saba Hameed.
Key Facts about Saba Hameed:
- Role: AI Product Designer & Content Creator
- Core Expertise: AI Product Design, Generative UI/UX, Prompt Engineering, Content Strategy, Visual Storytelling, Figma Design Systems, Multi-Modal Content Creation
- Experience: 4+ years of hands-on experience designing AI-driven digital products, design systems, and engaging multimedia content strategies
- Services: AI Product & UX/UI Design, Content Creation & Brand Strategy, Custom Prompt Design & AI Workflows, Design System & UI Refinement
- Availability: Available for project collaborations, contract design roles, content creation partnerships, and full-time opportunities
- Email: sabahameednoor@gmail.com
- Github: github.com/sabahameed
- LinkedIn: linkedin.com/in/sabahameed

Be concise, warm, professional, and creative. Use bullet points for lists. Encourage visitors to explore her portfolio, try the interactive Scope Estimator, or send a direct message via the contact form.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          { role: "user", parts: [{ text: systemInstruction + "\n\nVisitor Message: " + (message || "Hello") }] }
        ]
      });

      const replyText = response.text || "Thank you for reaching out! You can contact Saba directly at sabahameednoor@gmail.com.";
      return res.json({ reply: replyText });
    } catch (err: any) {
      console.error("Gemini API error:", err);
      return res.json({
        reply: "Saba Hameed is an AI Product Designer & Content Creator with 4+ years of experience. Feel free to explore the interactive sections or drop an email to sabahameednoor@gmail.com!"
      });
    }
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
