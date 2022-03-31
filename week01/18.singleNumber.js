var singleNumber = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 0);
    }
  }
  let result = 0;
  for (const [key, value] of map) {
    if (value === 0) {
      result = key;
    }
  }
  return result;
};
