/**
 * Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

  Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/assign-cookies
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((ele1, ele2) => ele1 - ele2);
  s.sort((ele1, ele2) => ele1 - ele2);

  let gIndex = 0;
  let sIndex = 0;
  let result = 0;

  while (gIndex < g.length && sIndex < s.length) {
    if (g[gIndex] <= s[sIndex]) {
      gIndex++;
      result++;
    }

    sIndex++;
  }

  return result;
};

/**
 * 题解
 * 涉及到数组相关的分配问题，一般都会先排序
 * 这里先将两个数组排序，然后以g为基点，去依次查找s这个数组是否有能满足g[i]的值
 * 总体比较简单
 */