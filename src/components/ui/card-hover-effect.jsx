import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block h-full w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#FF6B35]/20 to-[#FB923C]/20 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.image} alt={item.name} />
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
              <CardRole>{item.role}</CardRole>
              <CardDescription>{item.bio}</CardDescription>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 group-hover:border-[#FF6B35]/50 transition-all duration-300 h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt, className }) => {
  return (
    <div className={cn("relative h-52 overflow-hidden", className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 border border-[#FF6B35]/30">
          <span className="text-black/50 text-sm">Coming Soon</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
    </div>
  );
};

export const CardContent = ({ className, children }) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};

export const CardTitle = ({ className, children }) => {
  return (
    <h3 className={cn("text-black font-semibold text-lg", className)}>
      {children}
    </h3>
  );
};

export const CardRole = ({ className, children }) => {
  return (
    <p className={cn("text-[#FF6B35] text-sm font-medium", className)}>
      {children}
    </p>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("text-black/70 text-xs mt-1", className)}>{children}</p>
  );
};
