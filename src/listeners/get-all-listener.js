import { START_EVENT } from "../../data/constants.js";
import { getAllHandler } from "../../src/handlers/get-all-handler.js";

export const getAllListener = (element) => {
  element.addEventListener(START_EVENT, getAllHandler);
};
