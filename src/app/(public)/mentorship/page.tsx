import { Highlighter } from "@/components/ui/highlighter";
import { MorphingText } from "@/components/ui/morphing-text";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Mentorship & Expert Consulting | Coderschain',
  description: 'Book 1-on-1 mentorship sessions, expert consulting, or freelance discussions with industry professionals at Coderschain.',
};

export default function MentorshipPage() {
  return (
    <div className="container-web bg-background">
      <div className="text-center mb-4 py-2 md:py-10">
        <h3 className="flex justify-center items-center flex-col md:flex-row mb-2">
          {/* <span className="text-2xl md:text-5xl font-bold text-foreground mb-3"> */}
          {/* <Highlighter action="underline" color="#ffde59"> */}
          <MorphingText
            texts={[
              "Book a Session",
              "Mentorship Call",
              "Freelance Work",
              "Consultation",
              "Discussion",
            ]}
          />
          {/* </Highlighter> */}
          {/* </span> */}
        </h3>

        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Schedule a personalized 1-on-1 session with professionals for mentorship, freelance projects, or expert consulting — all in one place.
        </p>
      </div>

      <iframe
        src="https://cal.com/jatinder-choudhary-gyhmjw/30min?overlayCalendar=true"
        style={{ width: "100%", height: "100vh", border: "0" }}
        allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
      />
    </div>
  );
}
