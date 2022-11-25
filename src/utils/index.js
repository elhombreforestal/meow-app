export const RandomName = (l = 12) =>
  [...Array(l)].map((i) => (~~(Math.random() * 36)).toString(36)).join("");
