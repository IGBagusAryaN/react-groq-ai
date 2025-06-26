"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const LogoAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/logo.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <div>
      <Lottie animationData={animationData} className="w-[300px] h-[300px]" />
    </div>
  );
};

export default LogoAnimation;
