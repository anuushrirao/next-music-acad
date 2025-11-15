import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import UpcomingWebinars from "../components/UpcomingWebinars";
import Instructors from "@/components/Instructors";


export default function Home() {
  return (
    <div className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <UpcomingWebinars/>
      <Instructors/>
    </div>
  );
}
