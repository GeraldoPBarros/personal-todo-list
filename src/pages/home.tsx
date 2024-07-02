import { useState, useEffect } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [showResponse, setShowResponse] = useState("");

  async function sendPrompt(data: string) {
    const question = {
      data: data,
    };
    const requestOptions = {
      method: "POST", // Change to 'PUT' or 'PATCH' for update requests
      headers: { "Content-Type": "application/json" }, // Specify JSON body format
      body: JSON.stringify(question), // Convert data to JSON string
    };

    try {
      const res = await fetch("http://localhost:3000/question", requestOptions);
      const repo = await res.json();
      console.log(repo.message);
      setShowResponse(repo.message);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <label>#GeralPT</label>
        <br />
        <br />
        <input type="text" onChange={(e) => setPrompt(e.target.value)} />
        <br />
        <br />
        <button onClick={() => sendPrompt(prompt)}>Enviar</button>
        <br />
        <br />
      </div>
      {showResponse}
    </main>
  );
}
