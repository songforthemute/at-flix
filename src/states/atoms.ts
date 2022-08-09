import { atom } from "recoil";
import { InterfaceMovie } from "../apis/api";

export interface InterfaceModalInfo {
    data: InterfaceMovie[];
}

export const modalInfoState = atom<InterfaceModalInfo>({
    key: "atom",
    default: {
        data: [],
    },
});
