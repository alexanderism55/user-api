import { VIEW_ALL, VIEW_BY_ID } from "../data/constants.js";
import { getAllListener } from "./listeners/get-all-listener.js";
import { getByIdListener } from "./listeners/get-by-id-listener.js";

getAllListener(document.getElementById(VIEW_ALL));
getByIdListener(document.getElementById(VIEW_BY_ID));
