/*
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:

Some people write the regular expression too long, let us compress it.

Input: regex, a regular expression string

Output: a compressed regular expression string
Example:

"/aaaaaaaaaa/" should compress to "/a{10}/"

"/ababababab/" should compress to "/(ab){5}/"

"/abcdabcdabcdabcd/" should compress to "/(abcd){4}/"

"/aa/" should NOT compress to "/a{2}/"

It should return the original string, because The original string is shorter, it cannot be compressed.

"/abab/", "/abcdabcd/"should return the original string too

we love the shortest code ;-)

For the sake of simplicity, we only test a single repeat.

/aaaaabbbbb/ can compress to "/a{5}b{5}/"

but this kind of situation will not appear in the test.
*/

function sc(regex) {
  let m = regex.match(/^\/(.+?)(\1+)\/$/)
  if (!m) return regex
  let pattern = m[1].length === 1 ? m[1] : `(${m[1]})`
  let re = `/${pattern}{${m[2].length/m[1].length+1}}/`
  return re.length < regex.length ? re : regex
}