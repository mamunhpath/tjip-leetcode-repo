var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    if (nums[i] !== 0) {
      // [nums[i], nums[count]] = [nums[count], nums[i]]

      nums[i] = nums[count];
      nums[count] = temp;

      count++;
    }
  }
  return nums;
};
