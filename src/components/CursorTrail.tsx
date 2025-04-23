import React, { useEffect } from "react";

const CursorTrail: React.FC = () => {
  useEffect(() => {
    const cursorTrails: HTMLElement[] = [];

    // Create 10 cursor trail elements (heart-shaped)
    for (let i = 0; i < 10; i++) {
      const trail = document.createElement("div");

      // Add Tailwind classes to create a heart shape
      trail.classList.add(
        "absolute", // Position the trail element absolutely
        "w-6", // Width of the heart
        "h-6", // Height of the heart
        "bg-red-500", // Color of the heart (red)
        "opacity-75", // Make the heart slightly transparent
        "transform", // Use transform for smooth movement
        "transition-all", // Smooth transitions when moving
        "duration-150", // Time duration for smooth movement
        "scale-90", // Add a shrinking effect to the trail over time
        "shadow-lg", // Add a shadow effect for glowing
        "shadow-red-400/50", // Apply red shadow color
        "pointer-events-none", // Ensure the trail does not block events
        "rounded-full", // Makes it a circle initially (for both sides of the heart)
        "rotate-45", // Rotate to form a diamond (heart shape)
        "before:block", // Use ::before for the upper parts of the heart
        "before:w-6", // Set width for ::before
        "before:h-6", // Set height for ::before
        "before:bg-red-500", // Color for the upper part of the heart
        "before:rounded-full", // Make the upper parts rounded
        "before:top-0", // Position it at the top part of the heart
        "before:left-0", // Align it to the left part
        "before:absolute" // Position ::before absolutely
      );

      // Append the heart trail to the body
      document.body.appendChild(trail);
      cursorTrails.push(trail);
    }

    // Move the cursor trails with mousemove event
    const handleMouseMove = (e: MouseEvent) => {
      cursorTrails.forEach((trail, index) => {
        const delay = (index + 1) * 100; // Delay for smooth effect
        setTimeout(() => {
          trail.style.left = `${e.pageX}px`; // Set X position of the trail
          trail.style.top = `${e.pageY}px`;  // Set Y position of the trail
        }, delay);
      });
    };

    // Listen for mousemove event
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; // No need to render anything, as the trails are created dynamically via JavaScript
};

export default CursorTrail;
