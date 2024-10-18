import { VelocityScroll } from "./velocityscroll";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Get ready for Urjotsav 2024, a platform for showcasing technical and entrepreneurial talents! Join us from November 9th to 10th"
      default_velocity={2}
      className="font-display text-center text-4xl lg:text-6xl font-bold tracking-[-0.02em] bg-gradient-to-r from-[#87CEEB]  to-[#1d1f30] bg-clip-text text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"

    />
  );
}
