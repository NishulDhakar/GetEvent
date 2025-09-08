import React from "react";
import { about } from "@/config/About";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { generateMetadata as getPageMetadata } from "@/config/meta";
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

export const generateMetadata = (): Metadata => {
  const metadata = getPageMetadata('/About');
  return {
    ...metadata,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      } as Robots['googleBot']
    }
  };
};

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="space-y-8 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          About {about.name}
        </h1>
        <p className="text-lg text-muted-foreground">{about.description}</p>

        <Separator />
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            At {about.name}, we aim to make event management seamless and
            accessible. Whether you’re hosting a small meetup or a large
            conference, our platform empowers organizers to plan with ease and
            provides attendees with a smooth discovery and booking experience.
          </p>
        </div>
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Easy event creation and management tools</li>
            <li>Seamless ticket booking and attendee registration</li>
            <li>Analytics and insights for event performance</li>
            <li>Personalized recommendations for attendees</li>
          </ul>
        </div>
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions or want to collaborate? Reach out to us at{" "}
            <a
              href={`mailto:${about.email}`}
              className="text-primary underline"
            >
              {about.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
