"use client";

import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { PROJECT_TYPES } from "@/lib/data";

type State = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    type: PROJECT_TYPES[0],
    message: "",
  });
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  const set =
    (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFields({ ...fields, [key]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fields.name.trim()) return setError("Add your name so I know who I'm replying to.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      return setError("That email address doesn't look right.");
    if (fields.message.trim().length < 10)
      return setError("Tell me a little more about the project.");

    setError("");
    setState("sending");

    try {
      const res = await fetch(CONFIG.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("sent");
    } catch {
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className="sent" role="status">
        <div className="sent-ic">✓</div>
        <div className="sent-h">Message sent</div>
        <p className="sent-p">
          I reply within a day, usually sooner. Talk soon, {fields.name.split(" ")[0]}.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="frow">
        <div className="fld">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" value={fields.name} onChange={set("name")} placeholder="Your name" />
        </div>
        <div className="fld">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={fields.email}
            onChange={set("email")}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="fld">
        <label htmlFor="cf-type">What&apos;s this about?</label>
        <select id="cf-type" name="type" value={fields.type} onChange={set("type")}>
          {PROJECT_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="fld">
        <label htmlFor="cf-msg">Message</label>
        <textarea
          id="cf-msg"
          name="message"
          rows={4}
          value={fields.message}
          onChange={set("message")}
          placeholder="A couple of lines about what you're building and the timeline."
        />
      </div>

      {error && <p className="ferr" role="alert">{error}</p>}
      {state === "error" && (
        <p className="ferr" role="alert">
          That didn&apos;t send. Email me directly at {CONFIG.email} and I&apos;ll pick it up.
        </p>
      )}

      <button className="btn btn-p fsub" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
