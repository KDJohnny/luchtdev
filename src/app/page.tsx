import "./styles/globals.css";
import "./styles/home.css";

export const metadata = {
  title: "LuchtDev: Homepage",
  description: "",
};

export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <h1>Hallo!</h1>
        <h1>
          Ich bin <div className="elevated">J</div>onathan,
        </h1>
        <h1>Full-Stack Developer</h1>
      </div>
    </main>
  );
}
