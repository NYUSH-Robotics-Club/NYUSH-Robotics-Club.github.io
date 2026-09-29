/**
 * 图片路径要拼进 `srcSet`，而 `srcSet` 本身是用逗号分隔候选项的——
 * 文件名里只要出现逗号，浏览器就会在逗号处把 URL 截断，图片静默 404。
 * 这个坑真的踩过一次（"20250418, Chen Feng, cover (1).webp"）。
 *
 * 现在文件名都改成 URL 安全的形式了，这里再兜一层：
 * 以后有人传了带逗号的文件，也不会静默挂掉。
 */
export const imgUrl = (path: string): string => path.replace(/,/g, '%2C');

/** 拼 srcSet；没有小图变体时返回 undefined，让 <img> 走 src 单图 */
export function srcSetFor(
  full: string,
  small: string | undefined,
  fullWidth: number | undefined,
): string | undefined {
  if (!small || !fullWidth) return undefined;
  return `${imgUrl(small)} 700w, ${imgUrl(full)} ${fullWidth}w`;
}
