import React, { useState, useEffect } from "react";
import Konva from "konva";
import { Stage, Layer, Star } from "react-konva";

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
};

export const Particles = ({
  className = "",
  quantity = 100,
  color = "#ffffff",
  size = 1,
  opacity = 0.8,
}) => {
  const parentRef = React.useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const isClient = useIsClient();

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const updateSize = () => {
      const rect = parent.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(parent);

    updateSize();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log('Particles rendered:', { isClient, dimensions, quantity, color });
  }, [isClient, dimensions, quantity, color]);

  if (!isClient) {
    return <div className={cn("absolute inset-0", className)} ref={parentRef} />;
  }

  return (
    <div className={cn("absolute inset-0", className)} ref={parentRef}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Stage width={dimensions.width} height={dimensions.height}>
          <Layer>
            {Array.from({ length: quantity }).map((_, i) => (
              <Particle 
                key={i} 
                color={color} 
                stageWidth={dimensions.width} 
                stageHeight={dimensions.height}
                size={size}
                opacity={opacity}
              />
            ))}
          </Layer>
        </Stage>
      )}
    </div>
  );
};

const Particle = ({ color, stageWidth, stageHeight, size = 1, opacity = 0.8 }) => {
  const starRef = React.useRef(null);

  useEffect(() => {
    const star = starRef.current;
    if (!star || !stageWidth || !stageHeight) return;

    const x = Math.random() * stageWidth;
    const y = Math.random() * stageHeight;
    
    star.x(x);
    star.y(y);
    star.scaleX(0);
    star.scaleY(0);

    const tween = new Konva.Tween({
      node: star,
      duration: Math.random() * 3 + 2,
      scaleX: size,
      scaleY: size,
      easing: Konva.Easings.ElasticEaseOut,
    });

    tween.play();

    const floatTween = new Konva.Tween({
      node: star,
      duration: Math.random() * 4 + 3,
      y: y + (Math.random() - 0.5) * 50,
      yoyo: true,
      repeat: -1,
      easing: Konva.Easings.EaseInOut,
    });

    setTimeout(() => {
      floatTween.play();
    }, tween.duration * 1000);

    return () => {
      tween.destroy();
      floatTween.destroy();
    };
  }, [stageWidth, stageHeight, size]);

  return (
    <Star
      ref={starRef}
      numPoints={5}
      innerRadius={0.5 * size}
      outerRadius={1 * size}
      fill={color}
      opacity={Math.random() * opacity + 0.2}
    />
  );
};