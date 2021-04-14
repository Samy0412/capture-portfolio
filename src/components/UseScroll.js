//intersection observer
import { useInView } from "react-intersection-observer";

//framer Motion
import { useAnimation } from "framer-motion";

export default function UseScroll() {
  const controls = useAnimation();
  const [element, view] = useInView();
  controls.start(view ? "show" : "hidden");

  return [element, controls];
}
