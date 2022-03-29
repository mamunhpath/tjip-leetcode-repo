var majorityElement = function (nums) {
  let voteCount = 0;
  let winner = 0;
  for (let i = 0; i < nums.length; i++) {
    if (voteCount === 0) {
      winner = nums[i];
    }
    if (nums[i] === winner) {
      voteCount++;
    } else {
      voteCount--;
    }
  }
  return winner;
};
