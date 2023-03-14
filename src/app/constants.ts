import { Alg } from "./types";

export const algList: Alg[] = [
{ name: "AG", alg: "R' D R, U2" },{ name: "GA", alg: "U2, R' D R" },{ name: "AP", alg: "R' D' R, U2" },{ name: "PA", alg: "U2, R' D' R" },{ name: "AF", alg: "F: U2, R' D' R" },{ name: "FA", alg: "F: R' D' R, U2" },{ name: "BR", alg: "R': R' D' R, U2" },{ name: "RB", alg: "R': U2, R' D' R" },{ name: "DN", alg: "U' R': U2, R' D' R" },{ name: "ND", alg: "U' R': R' D' R, U2" },{ name: "DE", alg: "R U R': U2, R' D' R" },{ name: "ED", alg: "R U R': R' D' R, U2" },{ name: "FV", alg: "R U' R': R' D' R, U2" },{ name: "VF", alg: "R U' R': U2, R' D' R" },{ name: "BG", alg: "R' D R, U" },{ name: "GB", alg: "U, R' D R" },{ name: "BS", alg: "D: R' D R, U" },{ name: "SB", alg: "D: U, R' D R" },{ name: "BK", alg: "D': R' D R, U" },{ name: "KB", alg: "D': U, R' D R" },{ name: "HB", alg: "R D' R', U'" },{ name: "BH", alg: "U', R D' R'" },{ name: "BO", alg: "U', R D R'" },{ name: "OB", alg: "R D R', U'" },{ name: "BP", alg: "R' D' R, U" },{ name: "PB", alg: "U, R' D' R" },{ name: "BL", alg: "D: R' D' R, U" },{ name: "LB", alg: "D: U, R' D' R" },{ name: "BT", alg: "D': R' D' R, U" },{ name: "TB", alg: "D': U, R' D' R" },{ name: "AB", alg: "l': R' D2 R, U" },{ name: "BA", alg: "l': U, R' D2 R" },{ name: "DG", alg: "R' D R, U'" },{ name: "GD", alg: "U', R' D R" },{ name: "DK", alg: "D': R' D R, U'" },{ name: "KD", alg: "D': U', R' D R" },{ name: "DS", alg: "D: R' D R, U'" },{ name: "SD", alg: "D: U', R' D R" },{ name: "AD", alg: "R' D' R U': U', R' D R" },{ name: "DA", alg: "R' D' R U': R' D R, U'" },{ name: "DP", alg: "R' D' R, U'" },{ name: "PD", alg: "U', R' D' R" },{ name: "BF", alg: "R': R' D' R, U'" },{ name: "FB", alg: "R': U', R' D' R" },{ name: "DL", alg: "D: R' D' R, U'" },{ name: "LD", alg: "D: U', R' D' R" },{ name: "DT", alg: "D': R' D' R, U'" },{ name: "TD", alg: "D': U', R' D' R" },{ name: "DR", alg: "U' R': U', R' D' R" },{ name: "RD", alg: "U' R': R' D' R, U'" },{ name: "EQ", alg: "U R': U', R' D' R" },{ name: "QE", alg: "U R': R' D' R, U'" },{ name: "FR", alg: "R' U': R' D' R, U'" },{ name: "RF", alg: "R' U': U', R' D' R" },{ name: "EK", alg: "R U R': R' D' R, U'" },{ name: "KE", alg: "R U R': U', R' D' R" },{ name: "EV", alg: "U R' D': U', R' D' R" },{ name: "VE", alg: "U R' D': R' D' R, U'" },{ name: "GR", alg: "U' R' D: U', R' D' R" },{ name: "RG", alg: "U' R' D: R' D' R, U'" },{ name: "HP", alg: "D2, R U R'" },{ name: "PH", alg: "R U R', D2" },{ name: "LP", alg: "D, R U R'" },{ name: "PL", alg: "R U R', D" },{ name: "LH", alg: "D: R U R', D" },{ name: "HT", alg: "D2: R U R', D" },{ name: "TH", alg: "D': R U R', D'" },{ name: "PT", alg: "R U R', D'" },{ name: "TP", alg: "D', R U R'" },{ name: "HL", alg: "D2: R U R', D'" },{ name: "KO", alg: "U: R U' R', D'" },{ name: "OK", alg: "U: D', R U' R'" },{ name: "GK", alg: "U: D, R U' R'" },{ name: "KG", alg: "U: R U' R', D" },{ name: "KS", alg: "U: R U' R', D2" },{ name: "SK", alg: "D2, U R U' R'" },{ name: "PN", alg: "R': R2 U R2 U' R2, D'" },{ name: "NP", alg: "R': D', R2 U R2 U' R2" },{ name: "UV", alg: "D, R2 U R2 U' R2" },{ name: "VU", alg: "R2 U R2 U' R2, D" },{ name: "VW", alg: "R2 U R2 U' R2, D'" },{ name: "WV", alg: "D', R2 U R2 U' R2" },
//   { name: "AP", alg: "R' D' R, U2" },
//   { name: "PA", alg: "U2, R' D' R" },
//   { name: "AF", alg: "F: U2, R' D' R" },
//   { name: "FA", alg: "F: R' D' R, U2" },
//   { name: "BR", alg: "R': R' D' R, U2" },
//   { name: "RB", alg: "R': U2, R' D' R" },
//   { name: "DN", alg: "U' R': U2, R' D' R" },
//   { name: "ND", alg: "U' R': R' D' R, U2" },
//   { name: "DE", alg: "R U R': U2, R' D' R" },
//   { name: "ED", alg: "R U R': R' D' R, U2" },
//   { name: "FV", alg: "R U' R': R' D' R, U2" },
//   { name: "VF", alg: "R U' R': U2, R' D' R" },
//   { name: "DP", alg: "R' D' R, U'" },
// { name: "PD", alg: "U', R' D' R" },
// { name: "BF", alg: "R': R' D' R, U'" },
// { name: "FB", alg: "R': U', R' D' R" },
// { name: "DL", alg: "D: R' D' R, U'" },
// { name: "LD", alg: "D: U', R' D' R" },
// { name: "DT", alg: "D': R' D' R, U'" },
// { name: "TD", alg: "D': U', R' D' R" },
// { name: "DR", alg: "U' R': U', R' D' R" },
// { name: "RD", alg: "U' R': R' D' R, U'" },
// { name: "EQ", alg: "U R': U', R' D' R" },
// { name: "QE", alg: "U R': R' D' R, U'" },
// { name: "FR", alg: "R' U': R' D' R, U'" },
// { name: "RF", alg: "R' U': U', R' D' R" },
// { name: "EK", alg: "R U R': R' D' R, U'" },
// { name: "KE", alg: "R U R': U', R' D' R" },
// { name: "EV", alg: "U R' D': U', R' D' R" },
// { name: "VE", alg: "U R' D': R' D' R, U'" },
// { name: "GR", alg: "U' R' D: U', R' D' R" },
// { name: "RG", alg: "U' R' D: R' D' R, U'" },
]