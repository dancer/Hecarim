"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Download,
  Github,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Copy,
  X,
} from "lucide-react";

const themes = [
  {
    name: "Hecarim Dark",
    image: "/images/dark.png",
    colors: ["#1E1E1E", "#D4D4D4", "#569CD6", "#C586C0", "#4EC9B0", "#CE9178"],
    features: [
      "Dark theme optimized for long coding sessions",
      "Carefully selected color palette for improved readability",
      "Syntax highlighting for multiple languages",
      "Customized UI elements for a cohesive look",
      "Six different color schemes to suit your preference",
      "Regular updates and improvements based on user feedback",
    ],
  },
  {
    name: "Hecarim Light",
    image: "/images/light.png",
    colors: ["#FFFFFF", "#000000", "#0000FF", "#AF00DB", "#267F99", "#A31515"],
    features: [
      "Bright and clean interface for daytime coding",
      "High contrast for improved code visibility",
      "Optimized for reducing eye strain in well-lit environments",
      "Clear distinction between different code elements",
      "Perfect for pair programming and code reviews",
      "Ideal for presentations and screen sharing",
    ],
  },
  {
    name: "Hecarim Beige",
    image: "/images/beige.png",
    colors: ["#F5E8C7", "#3F3F3F", "#6A329F", "#9C3328", "#2F8F9D", "#7C5A2C"],
    features: [
      "Warm, soothing color scheme for comfortable coding",
      "Reduced blue light emission for better sleep patterns",
      "Elegant and professional look for coding in style",
      "Balanced contrast for extended coding sessions",
      "Unique color palette inspired by natural tones",
      "Ideal for both light and moderately-lit environments",
    ],
  },
  {
    name: "Hecarim Purple",
    image: "/images/purple.png",
    colors: ["#2D2B55", "#FFFFFF", "#FAD000", "#FF9D00", "#FB94FF", "#9EFFFF"],
    features: [
      "Rich, vibrant purple theme for a unique coding experience",
      "High contrast colors for enhanced code readability",
      "Energizing color scheme to boost productivity",
      "Perfect for night owls and late-night coding sessions",
      "Customized syntax highlighting for popular languages",
      "Ideal for developers who want to stand out",
    ],
  },
  {
    name: "Hecarim Light Pink",
    image: "/images/lightpink.png",
    colors: ["#FFF0F5", "#FF69B4", "#FF1493", "#C71585", "#DB7093", "#FFC0CB"],
    features: [
      "Soft, pastel pink theme for a calming coding environment",
      "Gender-neutral design appealing to all developers",
      "Gentle on the eyes for long coding sessions",
      "Unique and playful aesthetic for creative coders",
      "Customized icons and UI elements for a cohesive look",
      "Perfect for adding a touch of personality to your IDE",
    ],
  },
  {
    name: "Hecarim Dark Pink",
    image: "/images/darkpink.png",
    colors: ["#2B0910", "#FF69B4", "#FF1493", "#C71585", "#DB7093", "#FFC0CB"],
    features: [
      "Bold dark pink theme for a striking visual experience",
      "High contrast for excellent code readability in low light",
      "Energizing color scheme to keep you focused",
      "Perfect for night-time coding and dark mode enthusiasts",
      "Customized syntax highlighting for popular languages",
      "Ideal for developers who love to code with attitude",
    ],
  },
];

interface ThemeCarouselProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ThemeCarousel: React.FC<ThemeCarouselProps> = ({
  currentIndex,
  setCurrentIndex,
}) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const imageVariants = {
    center: { x: 0, scale: 1, zIndex: 5, opacity: 1, rotateY: 0 },
    left1: { x: "-60%", scale: 0.8, zIndex: 4, opacity: 0.7, rotateY: 45 },
    left2: { x: "-100%", scale: 0.6, zIndex: 3, opacity: 0.5, rotateY: 45 },
    right1: { x: "60%", scale: 0.8, zIndex: 4, opacity: 0.7, rotateY: -45 },
    right2: { x: "100%", scale: 0.6, zIndex: 3, opacity: 0.5, rotateY: 45 },
    hidden: { x: 0, scale: 0.5, zIndex: 1, opacity: 0, rotateY: 0 },
  };

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev: number) => (prev - 1 + themes.length) % themes.length
    );
  }, [setCurrentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev: number) => (prev + 1) % themes.length);
  }, [setCurrentIndex]);

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        className="bg-white/30 hover:bg-white/50 text-white rounded-full w-14 h-14 transition-all duration-300 ease-in-out transform hover:scale-110"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <div className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute w-full h-full flex items-center justify-center">
          {themes.map((theme, index) => {
            let position = "hidden";
            if (index === currentIndex) position = "center";
            else if (index === (currentIndex + 1) % themes.length)
              position = "right1";
            else if (index === (currentIndex + 2) % themes.length)
              position = "right2";
            else if (
              index ===
              (currentIndex - 1 + themes.length) % themes.length
            )
              position = "left1";
            else if (
              index ===
              (currentIndex - 2 + themes.length) % themes.length
            )
              position = "left2";

            return (
              <motion.div
                key={theme.name}
                className="absolute w-[500px] h-[375px]"
                initial="hidden"
                animate={position}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="w-full h-full cursor-pointer relative overflow-hidden rounded-[1px]"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  onClick={() => setFullscreenImage(theme.image)}
                >
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    className="rounded-[1px] shadow-lg"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="bg-white/30 hover:bg-white/50 text-white rounded-full w-14 h-14 transition-all duration-300 ease-in-out transform hover:scale-110"
        onClick={handleNext}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setFullscreenImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[1px]">
                <Image
                  src={fullscreenImage}
                  alt="Fullscreen theme preview"
                  className="rounded-[1px]"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 bg-white/30 hover:bg-white/50 text-white rounded-full w-14 h-14 transition-all duration-300 ease-in-out transform hover:scale-110"
                onClick={() => setFullscreenImage(null)}
              >
                <X className="h-8 w-8" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ColorPalette: React.FC<{ colors: string[] }> = ({ colors }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {colors.map((color, index) => (
        <div key={index} className="relative group">
          <div
            className="w-12 h-12 rounded-full cursor-pointer transition-transform transform group-hover:scale-110"
            style={{ backgroundColor: color }}
            onClick={() => handleCopyColor(color)}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Copy className="text-white h-6 w-6" />
          </div>
          {copiedColor === color && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded">
              Copied!
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const SupportedPlatforms: React.FC = () => {
  return (
    <Card className="mt-12">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          Supported Platforms
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code"
              width={64}
              height={64}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p className="mt-2 text-center">VS Code</p>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg"
              alt="Vim"
              width={64}
              height={64}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p className="mt-2 text-center">
              Vim
              <br />
              (Coming Soon)
            </p>
          </div>

          <div className="flex flex-col items-center opacity-50">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg"
              alt="Atom"
              width={64}
              height={64}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p className="mt-2 text-center">
              Atom
              <br />
              (Coming Soon)
            </p>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
              alt="IntelliJ IDEA"
              width={64}
              height={64}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p className="mt-2 text-center">
              IntelliJ IDEA
              <br />
              (Coming Soon)
            </p>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-8 mb-4 text-primary">
          Operating Systems
        </h3>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
              alt="Windows"
              width={48}
              height={48}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p className="mt-2">Windows</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
              alt="macOS"
              width={48}
              height={48}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p className="mt-2">macOS</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
              alt="Linux"
              width={48}
              height={48}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p className="mt-2">Linux</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ThemePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
      <header className="p-4 flex justify-between items-center">
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-transparent hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
            Hecarim VS Code Theme
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-center">
            Elevate your coding experience with our sleek and modern theme for
            Visual Studio Code.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=Hecarim.hecarim-theme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Install Theme
              </Button>
            </a>
            <a
              href="https://github.com/dancer/Hecarim-Theme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </a>
          </div>

          <ThemeCarousel
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {themes[currentIndex].name}
            </h3>
            <ColorPalette colors={themes[currentIndex].colors} />
          </div>

          <Card className="mt-12 bg-card text-card-foreground">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Features</h2>
              <ul className="space-y-2">
                {themes[currentIndex].features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted-foreground"
                  >
                    <svg
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <SupportedPlatforms />
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-muted-foreground">
        © 2024 Hecarim. All rights reserved.
      </footer>
    </div>
  );
}