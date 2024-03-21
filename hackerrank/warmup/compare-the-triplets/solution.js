function compareTriplets(a, b) {
  const points = [0, 0];
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      points[0] += 1;
    } else if (a[i] < b[i]) {
      points[1] += 1;
    }
  }
  return points;
}
