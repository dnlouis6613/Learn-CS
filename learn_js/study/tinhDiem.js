// export từng hàm (named export)
export function tinhTrungBinh(l, r, w, s) {
  return (l + r + w + s) / 4;
}

export function lamTronIelts(diem) {
  return Math.round(diem * 2) / 2;
}

export const BAND_TOI_DA = 9.0; // export cả hằng số

export default 123;
