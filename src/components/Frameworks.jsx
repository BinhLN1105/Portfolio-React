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
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skills, index) => (
          <Icon key={index} src={`assets/logos/${skills}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skills, index) => (
          <Icon key={index} src={`assets/logos/${skills}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
