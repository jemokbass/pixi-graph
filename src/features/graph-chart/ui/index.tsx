import { Application } from "pixi.js";
import { useLayoutEffect, useEffect, useRef, useState, useCallback } from "react";
import { PaintShape } from "../../../entities/graphics";

const app = new Application<HTMLCanvasElement>({
  width: 800,
  height: 400,
  eventFeatures: {
    click: true,
  },
});

const SCROLLABLE_WIDTH = app.view.width - 100;

export function GraphChart() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [item, setItem] = useState({ from: { x: 0, y: 0 }, to: { x: 30, y: 30 } });
  const shiftByY = -Number(item.to.x - SCROLLABLE_WIDTH);

  const paintShape = useCallback(() => {
    const shape = new PaintShape();
    shape.paintLine(item.from, item.to);
    shape.paintPoint(item.to.x, item.to.y);

    return shape;
  }, [item]);

  useLayoutEffect(() => {
    if (wrapper.current) {
      wrapper.current.appendChild(app.view);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setItem(prevState => ({
        from: { x: prevState.to.x, y: prevState.to.y },
        to: {
          x: prevState.to.x + 30,
          y: Math.floor(Math.random() * 300) + 1,
        },
      }));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    app.stage.addChild(paintShape());

    if (SCROLLABLE_WIDTH <= item.to.x) {
      app.stage.setTransform(shiftByY);
    }
  }, [paintShape]);

  return <div ref={wrapper} />;
}
