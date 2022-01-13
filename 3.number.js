///限界値

xx = 1.8 * 1.0e308;
if (xx >= Number.MAX_VALUE) {
   alert("計算可能な範囲を超えました");
}

// ◆ Number.POSITIVE_INFINITY
// ◆ Number.NEGATIVE_INFINITY

xx = 1.8 * 1.0e308;
if ((xx == Number.POSITIVE_INFINITY)
 || (xx == Number.NEGATIVE_INFINITY)) {
   alert("計算可能な範囲を超えました");
}