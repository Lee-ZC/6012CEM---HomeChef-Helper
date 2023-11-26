import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 100); // You can adjust the scroll height as needed
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "1450px",
        display: isVisible ? "block" : "none",
        cursor: "pointer",
        backgroundColor: "blue", // Add this line for the background color
        padding: "10px", // Add padding for better visibility
        borderRadius: "5px", // Add border-radius for a rounded appearance
      }}
      onClick={scrollToTop}
    >
      <button style={{ fontSize: "1.5em", color: "white" }}>↑</button>
    </div>
  );
};

export default BackToTopButton;
