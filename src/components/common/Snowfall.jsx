"use client"
import React, { useEffect } from "react";

const Snowfall = () => {
  useEffect(() => {
    // Generate snowflakes dynamically
    const snowflakesContainer = document.querySelector('.snowflakes');

    for (let i = 0; i < 5; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake', 'text-white','opacity-50');
      snowflake.textContent = '❄️';
      
      // Randomize snowflake size and position
      snowflake.style.fontSize = `${Math.random() * .3 +.7}rem`;  // Random size between 0.5rem and 2rem
      snowflake.style.left = `${Math.random() * 100}%`;  // Random horizontal position
      snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;  // Random falling speed (5s to 15s)
      snowflake.style.animationDelay = `${Math.random() * 5}s`;  // Random delay before it starts falling
      
      snowflakesContainer.appendChild(snowflake);
    }

    return () => {
      // Clean up snowflakes when the component unmounts
      const snowflakes = document.querySelectorAll('.snowflake');
      snowflakes.forEach(snowflake => snowflake.remove());
    };
  }, []);

  return (
    <div className="snowflakes fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* Snowflakes will be added dynamically via JS */}
    </div>
  );
};

export default Snowfall;
