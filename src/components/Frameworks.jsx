import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "mysql",
    "javascript",
    "git",
    "vitejs",
    "tailwindcss",
    "css3",
    "html5",
    "intellij",
    "vscode",
  ];
  return (
    // <div className="relative flex h-[20rem] w-full flex-col items-center justify-center">
    <div className="relative flex h-[20rem] w-full flex-col">
      <div className="absolute inset-0 -translate-y-10 flex flex-col items-center justify-center">
        <OrbitingCircles iconSize={40}>
          {skills.map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>
        <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
          {skills.reverse().map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
