"use client";

import React, { useState } from "react";
import { validatePayload } from "@/lib/validation";

export default function SafeForm() {
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const submission = {
      username: form.get("username"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const result = validatePayload(submission);
    if (!result.isValid) {
      setFeedback(`Validation Error: ${result.errors?.join(", ")}`);
      return;
    }

    setFeedback("Input passed schema validation successfully.");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <label htmlFor="username" style={{ display: "block", marginBottom: "0.25rem" }}>Username</label>
        <input id="username" name="username" type="text" required style={{ width: "100%", padding: "0.5rem" }} />
      </div>

      <div>
        <label htmlFor="email" style={{ display: "block", marginBottom: "0.25rem" }}>Email</label>
        <input id="email" name="email" type="email" required style={{ width: "100%", padding: "0.5rem" }} />
      </div>

      <div>
        <label htmlFor="message" style={{ display: "block", marginBottom: "0.25rem" }}>Message</label>
        <textarea id="message" name="message" rows={4} required style={{ width: "100%", padding: "0.5rem" }} />
      </div>

      <button type="submit" style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Submit</button>
      {feedback && <p style={{ marginTop: "0.5rem" }}>{feedback}</p>}
    </form>
  );
}
