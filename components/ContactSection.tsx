import Image from "next/image";
import ContactForm from "./ContactForm";
import { CONFIG } from "@/lib/config";

const MODES = [
  ["Full-time roles", "React / Next.js / Node · India or remote"],
  ["Freelance projects", "Web apps, dashboards, performance work"],
  ["Short consults", "Frontend architecture, perf audits"],
];

export default function ContactSection() {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="ct" data-reveal>
          <div className="ct-grid">
            <div>
              <Image
                className="ava ava-88"
                src="/vishnu.jpg"
                alt="N S Vishnu Vamsi Pilla"
                width={88}
                height={88}
              />
              <h2 className="ct-h">Let&apos;s build something.</h2>
              <p className="ct-s">
                I&apos;m looking for a full-time Full Stack or Frontend role — and I take on
                freelance projects alongside it. Tell me what you&apos;re building.
              </p>

              <div className="modes">
                {MODES.map(([title, detail]) => (
                  <div className="mode" key={title}>
                    <div className="mode-t">{title}</div>
                    <div className="mode-d">{detail}</div>
                  </div>
                ))}
              </div>

              <div className="ct-links">
                <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
                <a href={CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={CONFIG.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={CONFIG.resume} download>Resume ↓</a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>

        <footer className="ftr">
          <span>© {new Date().getFullYear()} N S Vishnu Vamsi Pilla</span>
          <span className="mono">Andhra Pradesh, India · Built with Next.js</span>
        </footer>
      </div>
    </section>
  );
}
