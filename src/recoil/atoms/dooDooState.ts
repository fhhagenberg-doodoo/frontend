import { atom } from "recoil";

const DOO_DOO_STATE_KEY = "dooDooState";

export const dooDooState = atom({
  key: DOO_DOO_STATE_KEY,
  default: [],
});
