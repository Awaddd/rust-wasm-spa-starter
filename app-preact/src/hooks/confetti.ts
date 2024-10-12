import Confetti from "canvas-confetti";
import { useRustCtx } from "./hooks";

export default function () {
  const [limitExceeded] = useRustCtx("counter_limit_exceeded", false);

  if (!limitExceeded) return null;

  Confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
