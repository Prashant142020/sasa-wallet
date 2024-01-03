import React from "react";
import MainLayoutCard from "../cards/MainLayoutCard";

function Header() {
  return (
    <div>
      SaaS Landing
      <br /> Page Template
    </div>
  );
}

function HeroSection() {
  return (
    <MainLayoutCard
      title={Header}
      description="This is a template Figma file, turned into code by Prashant.😎"
      rightSideImageUrl="/images/overview.gif"
    />
  );
}

export default HeroSection;
