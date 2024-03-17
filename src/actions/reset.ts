import { dom } from "../dom";

export const reset = () => {
  dom.output.innerHTML = "";
  dom.output.scrollIntoView({ behavior: "smooth" });
};
