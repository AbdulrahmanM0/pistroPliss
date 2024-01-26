import React from "react";
import VisitUsSection from "../Components/PagesSup/About/VisitUsSection/VisitUsSection";
import VideoSection from "../Components/PagesSup/About/VideoSection/VideoSection";
import GuestInfoSection from "../Components/PagesSup/About/GuestInfoSection/GuestInfoSection";
import DescriptionSection from "../Components/PagesSup/About/DescriptionSection/DescriptionSection";

export default function About() {
  return (
    <div>
      <VisitUsSection />
      <VideoSection />
      <DescriptionSection />
      <GuestInfoSection />
    </div>
  );
}
