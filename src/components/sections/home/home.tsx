import { BsLinkedin, BsGithub, BsTwitterX, BsInstagram } from "react-icons/bs";
import { HomeStyle } from "./style";
import hand from "../../../../public/images/emojis/emojiHi.png";

type GreetProps = {
  classTitle: string;
  title: string;
  hand: string;
  description: string;
  stack: string;
};

export default function Home(props: GreetProps) {
  return (
    <HomeStyle id="home">
      <div className="container">
        <div className="main">
          <div>
            <h1 className={props.classTitle}>{props.title}</h1>
            <img src={hand} className={props.hand} />
            <p>{props.description}</p>
            <span>
              <a
                title="Linkedin"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/sillas-emanoel-656478218"
              >
                <BsLinkedin />
              </a>
              <a
                title="GitHub"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/sillasemanoel"
              >
                <BsGithub />
              </a>
              <a
                title="X"
                rel="noreferrer"
                target="_blank"
                href="https://x.com/silsdev"
              >
                <BsTwitterX />
              </a>
              <a
                title="Instagram"
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/silsdev"
              >
                <BsInstagram />
              </a>
            </span>
          </div>
          <div className="hero"></div>
        </div>
        <div className="skills">
          <p>{props.stack}</p>
          <div>
            <ul>
              {/* Soft Skills */}
              <li title="Git">
                <img
                  src="https://www.svgrepo.com/show/452210/git.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="GitHub">
                <img
                  src="https://www.svgrepo.com/show/452211/github.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Vercel">
                <img
                  src="https://www.svgrepo.com/show/378475/vercel-fill.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Figma">
                <img
                  src="https://www.svgrepo.com/show/452202/figma.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Supabase">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyu74dDPHYpCINs5AIb8MYSq2-1gScU0y9g&s"
                  alt="skill-icon"
                />
              </li>
              <li title="Pinata">
                <img
                  src="https://www.svgrepo.com/show/286025/pinata.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Docker">
                <img
                  src="https://www.svgrepo.com/show/452192/docker.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="AWS">
                <img
                  src="https://www.svgrepo.com/show/448266/aws.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Resend">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_TiWMxcsZ7QlCGql_fKGP95fy0LkmDdYvw&s"
                  alt="skill-icon"
                />
              </li>
              <li title="Stripe">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png"
                  alt="skill-icon"
                />
              </li>
              <li title="Lemon Squeezy">
                <img
                  src="https://logowik.com/content/uploads/images/lemon-squeezy-icon3930.logowik.com.webp"
                  alt="skill-icon"
                />
              </li>
              {/* Languages */}
              <li title="HTML5">
                <img
                  src="https://www.svgrepo.com/show/452228/html-5.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="CSS3">
                <img
                  src="https://www.svgrepo.com/show/452185/css-3.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="JavaScript">
                <img
                  src="https://www.svgrepo.com/show/349419/javascript.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="TypeScript">
                <img
                  src="https://www.svgrepo.com/show/349540/typescript.svg"
                  alt="skill-icon"
                />
              </li>
              {/* Frameworks */}
              <li title="React">
                <img
                  src="https://www.svgrepo.com/show/374032/reactjs.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Node.js">
                <img
                  src="https://www.svgrepo.com/show/452075/node-js.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Bun">
                <img
                  src="https://bun.sh/logo.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Vite">
                <img
                  src="https://www.svgrepo.com/show/374167/vite.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Next.js">
                <img
                  src="https://www.svgrepo.com/show/306466/next-dot-js.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="NestJS">
                <img
                  src="https://www.svgrepo.com/show/373872/nestjs.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Sass">
                <img
                  src="https://www.svgrepo.com/show/374067/scss2.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Tailwind CSS">
                <img
                  src="https://www.svgrepo.com/show/374118/tailwind.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="styled-components">
                <img
                  src="https://img.icons8.com/?size=512&id=ttxR7mXaDvqS&format=png"
                  alt="skill-icon"
                />
              </li>
              <li title="shadcn/ui">
                <img
                  src="https://bestofjs.org/logos/shadcnui.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Magic  UI">
                <img
                  src="https://svgl.app/library/magicui.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Prisma">
                <img
                  src="https://www.svgrepo.com/show/373776/light-prisma.svg"
                  alt="skill-icon"
                />
              </li>
              <li title="Jest">
                <img
                  src="https://www.svgrepo.com/show/373701/jest-snapshot.svg"
                  alt="skill-icon"
                />
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </HomeStyle>
  );
}
