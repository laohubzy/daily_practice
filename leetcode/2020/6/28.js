// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

// 示例: 

// 输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
// 进阶:

// 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    const length = nums.length
    if(!length) {
        return 0
    }    
    if(length === 1) {
        return nums[0] >= s ? 1 : 0
    }
    let left = 0
    let right = 1
    let result = 0
    let total = nums[left]
    while(left < length && right < length) {
        let temp = total + nums[right]
        if (temp < s) {
            total = temp
            right ++
        } else {
            while(left < right && right < length) {
                if (temp - nums[left] >= s) {
                    temp -= nums[left]
                    left ++
                } else {
                    total = temp
                    result = Math.min(length, right - left + 1)
                    console.log(left, right)
                    right ++
                    break
                }

            }
            
        }
    }
    return result
};


var minSubArrayLen_better = function(s, nums) {
    let i = 0;
    let sum = 0;
    let len = 0;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= s) {
            len = len == 0 ? j - i + 1 : Math.min(len, j - i + 1);
            sum -= nums[i++];
        }
    }
    return len;
};



// const nums = [1,4,4]
// console.log(minSubArrayLen_better(4, nums))


// 211. 添加与搜索单词 - 数据结构设计
// 设计一个支持以下两种操作的数据结构：
// void addWord(word)
// bool search(word)
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。
// 示例:
// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true


/**
 * Initialize your data structure here.
 */
//构造函数
var WordDictionary = function() {
    this.map={}
  };
  
  //add函数
  WordDictionary.prototype.addWord = function(word) {
    let len=word.length
    if(this.map[len]==undefined)
      this.map[len]=[word]
    else
      this.map[len].push(word)
  };
  
  //搜索函数
  WordDictionary.prototype.search = function(word) {
    let len =word.length
    var re=new RegExp("^"+word.replace(".","\\w")+"$");
    if(this.map[len]==undefined)
      return false
      
    for(var i=0;i<this.map[len].length;i++){
      if(re.test(this.map[len][i])){
        return true
      }
    }
    return false
  };
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// var obj = new WordDictionary()
// obj.addWord("bad")
// obj.addWord("dad")
// obj.addWord("mad")
// obj.search(".ad")
// // search("bad") -> true
// // search(".ad") -> true
// // search("b..") -> true