import { START_EVENT } from "../../data/constants.js";
import { getByIdHandler } from "../handlers/get-by-id-handler.js";

export const getByIdListener = (element) => {
  element.addEventListener(START_EVENT, getByIdHandler);
};
