import { Application } from "pixi.js";
import { useEffect, useRef } from "react";

const app = new Application<HTMLCanvasElement>({
  width: 800,
  height: 400,
});

export function GraphChart() {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapper.current) {
      wrapper.current.appendChild(app.view);
    }
  }, []);

  return (
    <div ref={wrapper}>
      <div>I chart</div>
    </div>
  );
}
