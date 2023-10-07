import React from 'react';

const getRandomValue = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomPolygon = (): string => {
  const numberOfPoints = getRandomValue(5, 12); // Adjust the range as needed
  const points: string[] = [];

  for (let i = 0; i < numberOfPoints; i++) {
    const x = getRandomValue(0, 100);
    const y = getRandomValue(0, 100);
    points.push(`${x}% ${y}%`);
  }

  return `polygon(${points.join(', ')})`;
};

const RandomShape = ({ className }: { className: string }) => {
  const randomShape = generateRandomPolygon();

  const style: React.CSSProperties = {
    clipPath: randomShape,
  };

  return <div className={`${className} w-[70vh] h-[90vh] absolute`} style={style}></div>;
};

export default RandomShape;
