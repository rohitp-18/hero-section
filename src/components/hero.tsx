import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.jpg";

const HeroSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log(hovered);
  }, [hovered]);

  return (
    <main className="position-relative mx-auto bg-dark w-100 vh-100 overflow-hidden">
      <section className="mb-5 min-vh-100 d-flex position-relative justify-content-center align-items-center container">
        <div className="d-flex justify-content-center align-items-center h-100 bg-dark">
          <svg
            viewBox="0 0 1000 500"
            className={`position-absolute svg-hero w-100 h-100 ${
              hovered ? "dimmed" : ""
            }`}
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="22%"
              textAnchor="middle"
              style={{ letterSpacing: "10px" }}
              fontSize="90"
              fontWeight="bolder"
            >
              IMAGINING
            </text>
            <text
              x="50%"
              y="37%"
              textAnchor="middle"
              style={{ letterSpacing: "10px" }}
              fontSize="90"
              fontWeight="bolder"
            >
              UNIQUE
            </text>
            <text
              x="50%"
              y="53%"
              textAnchor="middle"
              style={{ letterSpacing: "10px" }}
              fontSize="90"
              fontWeight="bolder"
            >
              CONCEPTS
            </text>
            <text
              x="50%"
              y="68%"
              textAnchor="middle"
              style={{ letterSpacing: "10px" }}
              fontSize="90"
              fontWeight="bolder"
            >
              AND DIGITAL
            </text>
            <text
              x="50%"
              y="83%"
              textAnchor="middle"
              style={{ letterSpacing: "10px" }}
              fontSize="90"
              fontWeight="bolder"
            >
              EXPERIENCES
            </text>
          </svg>
        </div>
      </section>
      <section className="position-absolute start-0 top-0 w-100 h-100">
        <div className="container h-100 mx-auto d-flex justify-content-center">
          <div className="row w-100 mx-auto">
            <div style={{ minHeight: "300px" }} className="col-6 w-100">
              <div
                className="row w-100 h-100 position-relative flex-nowrap"
                style={{ gap: "8rem", justifyContent: "space-between" }}
              >
                <div className="col-6 w-100 h-100 border-2 border-danger image-container">
                  <div className="w-100 h-100 position-relative">
                    {hovered && hovered !== 1 ? (
                      <div
                        style={{ left: "20%", bottom: "10%" }}
                        className="position-absolute placeholder-box"
                      ></div>
                    ) : (
                      <>
                        <img
                          src={hero1}
                          style={{
                            width: "336px",
                            position: "absolute",
                            left: "20%",
                            bottom: "10%",
                          }}
                          alt="Hero"
                          onMouseMove={(e) => {
                            setHovered(1);
                            const child = e.currentTarget as HTMLElement;
                            console.log(child);
                            const childRect = child.getBoundingClientRect();
                            const parentRect =
                              child.parentElement?.getBoundingClientRect();

                            if (!parentRect) return;

                            let x =
                              e.clientX - parentRect.left - childRect.width / 2;
                            let y =
                              e.clientY - parentRect.top - childRect.height / 2;

                            x = Math.max(
                              0,
                              Math.min(x, parentRect.width - childRect.width)
                            );
                            y = Math.max(
                              0,
                              Math.min(y, parentRect.height - childRect.height)
                            );

                            child.style.transition = "none";
                            setPosition({
                              x: x + childRect.width / 2,
                              y: y + childRect.height / 2,
                            });
                            child.style.transform = "translate(-50%, -50%)";
                            child.style.left = `${x + childRect.width / 2}px`;
                            child.style.top = `${y + childRect.height / 2}px`;
                          }}
                          onMouseLeave={(e) => {
                            setHovered(null);
                            const child = e.currentTarget as HTMLElement;
                            child.style.left = "20%";
                            child.style.bottom = "10%";
                            child.style.transition =
                              "left 5s ease, top 5s ease";
                          }}
                          className="object-fit-cover"
                        />
                        {hovered === 1 && (
                          <div
                            style={{
                              position: "absolute",
                              left: `${position.x + 80}px`,
                              top: `${position.y + 65}px`,
                              color: "white",
                              padding: "5px 10px",
                              borderRadius: "5px",
                              transition: "left 0.5s ease, top 0.5s ease",
                            }}
                          >
                            <h2
                              style={{ marginBottom: "-5px" }}
                              className="fw-bold pb-0"
                            >
                              BIGGER SCIENCE
                            </h2>
                            <span>Immersive Experience/WebGL/Gaming</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="col-6 w-100 h-100 border-2 border-danger image-container">
                  <div className="w-100 h-100 position-relative">
                    {hovered && hovered !== 2 ? (
                      <div
                        style={{ top: "20%", left: "20%" }}
                        className="position-absolute placeholder-box"
                      ></div>
                    ) : (
                      <>
                        <img
                          src={hero2}
                          style={{
                            width: "336px",
                            position: "absolute",
                            left: "20%",
                            top: "20%",
                          }}
                          alt="Hero"
                          onMouseMove={(e) => {
                            setHovered(2);
                            const child = e.currentTarget as HTMLElement;
                            console.log(child);
                            const childRect = child.getBoundingClientRect();
                            const parentRect =
                              child.parentElement?.getBoundingClientRect();

                            if (!parentRect) return;

                            let x =
                              e.clientX - parentRect.left - childRect.width / 2;
                            let y =
                              e.clientY - parentRect.top - childRect.height / 2;

                            x = Math.max(
                              0,
                              Math.min(x, parentRect.width - childRect.width)
                            );
                            y = Math.max(
                              0,
                              Math.min(y, parentRect.height - childRect.height)
                            );

                            child.style.transition = "none";
                            setPosition({
                              x: x + childRect.width / 2,
                              y: y + childRect.height / 2,
                            });
                            child.style.transform = "translate(-50%, -50%)";
                            child.style.left = `${x + childRect.width / 2}px`;
                            child.style.top = `${y + childRect.height / 2}px`;
                          }}
                          onMouseLeave={(e) => {
                            setHovered(null);
                            const child = e.currentTarget as HTMLElement;
                            child.style.left = "20%";
                            child.style.top = "10%";
                            child.style.transition =
                              "left 5s ease, top 5s ease";
                          }}
                          className="object-fit-cover"
                        />
                        {hovered === 2 && (
                          <div
                            style={{
                              position: "absolute",
                              left: `${position.x + 80}px`,
                              top: `${position.y + 45}px`,
                              color: "white",
                              padding: "5px 10px",
                              borderRadius: "5px",
                              transition: "left 0.5s ease, top 0.5s ease",
                            }}
                          >
                            <h2
                              style={{ marginBottom: "-5px" }}
                              className="fw-bold pb-0"
                            >
                              MUCEM
                            </h2>
                            <span>Experiential Website</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ minHeight: "300px" }} className="col-6 w-100">
              <div
                className="row w-100 h-100 position-relative flex-nowrap"
                style={{ gap: "8rem", justifyContent: "space-between" }}
              >
                <div className="col-6 w-100 h-100 border-2 border-danger image-container">
                  <div className="w-100 h-100 position-relative">
                    {hovered && hovered !== 3 ? (
                      <div
                        style={{ bottom: "10%", left: "20%" }}
                        className="position-absolute placeholder-box"
                      ></div>
                    ) : (
                      <>
                        <img
                          src={hero3}
                          style={{
                            width: "336px",
                            position: "absolute",
                            left: "20%",
                            bottom: "10%",
                          }}
                          alt="Hero"
                          onMouseMove={(e) => {
                            setHovered(3);
                            const child = e.currentTarget as HTMLElement;
                            console.log(child);
                            const childRect = child.getBoundingClientRect();
                            const parentRect =
                              child.parentElement?.getBoundingClientRect();

                            if (!parentRect) return;

                            let x =
                              e.clientX - parentRect.left - childRect.width / 2;
                            let y =
                              e.clientY - parentRect.top - childRect.height / 2;

                            x = Math.max(
                              0,
                              Math.min(x, parentRect.width - childRect.width)
                            );
                            y = Math.max(
                              0,
                              Math.min(y, parentRect.height - childRect.height)
                            );

                            child.style.transition = "none";
                            setPosition({
                              x: x + childRect.width / 2,
                              y: y + childRect.height / 2,
                            });
                            child.style.transform = "translate(-50%, -50%)";
                            child.style.left = `${x + childRect.width / 2}px`;
                            child.style.top = `${y + childRect.height / 2}px`;
                          }}
                          onMouseLeave={(e) => {
                            setHovered(null);
                            const child = e.currentTarget as HTMLElement;
                            child.style.left = "20%";
                            child.style.bottom = "10%";
                            child.style.transition =
                              "left 5s ease, top 5s ease";
                          }}
                          className="object-fit-cover"
                        />
                        {hovered === 3 && (
                          <div
                            style={{
                              position: "absolute",
                              left: `${position.x + 80}px`,
                              top: `${position.y + 50}px`,
                              color: "white",
                              padding: "5px 10px",
                              borderRadius: "5px",
                              transition: "left 0.5s ease, top 0.5s ease",
                            }}
                          >
                            <h2
                              style={{ marginBottom: "-5px" }}
                              className="fw-bold pb-0"
                            >
                              UNGANISHA
                            </h2>
                            <span>Experimental Website/WebGL/3D</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="col-6 w-100 h-100 border-2 border-danger image-container">
                  <div className="w-100 h-100 position-relative">
                    {hovered && hovered !== 4 ? (
                      <div
                        style={{ top: "20%", left: "20%" }}
                        className="position-absolute placeholder-box"
                      ></div>
                    ) : (
                      <>
                        <img
                          src={hero4}
                          style={{
                            width: "336px",
                            position: "absolute",
                            left: "20%",
                            top: "20%",
                          }}
                          alt="Hero"
                          onMouseMove={(e) => {
                            setHovered(4);
                            const child = e.currentTarget as HTMLElement;
                            console.log(child);
                            const childRect = child.getBoundingClientRect();
                            const parentRect =
                              child.parentElement?.getBoundingClientRect();

                            if (!parentRect) return;

                            let x =
                              e.clientX - parentRect.left - childRect.width / 2;
                            let y =
                              e.clientY - parentRect.top - childRect.height / 2;

                            x = Math.max(
                              0,
                              Math.min(x, parentRect.width - childRect.width)
                            );
                            y = Math.max(
                              0,
                              Math.min(y, parentRect.height - childRect.height)
                            );

                            child.style.transition = "none";
                            setPosition({
                              x: x + childRect.width / 2,
                              y: y + childRect.height / 2,
                            });
                            child.style.transform = "translate(-50%, -50%)";
                            child.style.left = `${x + childRect.width / 2}px`;
                            child.style.top = `${y + childRect.height / 2}px`;
                          }}
                          onMouseLeave={(e) => {
                            setHovered(null);
                            const child = e.currentTarget as HTMLElement;
                            child.style.left = "20%";
                            child.style.top = "20%";
                            child.style.transition =
                              "left 5s ease, top 5s ease";
                          }}
                          className="object-fit-cover"
                        />
                        {hovered === 4 && (
                          <div
                            style={{
                              position: "absolute",
                              left: `${position.x + 80}px`,
                              top: `${position.y + 45}px`,
                              color: "white",
                              padding: "5px 10px",
                              borderRadius: "5px",
                              transition: "left 0.5s ease, top 0.5s ease",
                            }}
                          >
                            <h2
                              style={{ marginBottom: "-5px" }}
                              className="fw-bold pb-0"
                            >
                              OLIVE TREE
                            </h2>
                            <span>Interactive Installation/Real Time</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
