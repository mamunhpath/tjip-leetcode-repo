var twoSum = function (nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    if (seen.hasOwnProperty(remaining)) {
      return [seen[remaining], i];
    }
    seen[nums[i]] = i;
  }
};
