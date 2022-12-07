const twoSum = (nums, target) => {
  let result = [];
  for(let i = 0; i < nums.length; i++) {
    if(nums.includes(target - nums[i])) {
      result.push(nums.findIndex((otherNum) => otherNum === target - nums[i]));
      result.push(i);
      return result;
    }
  }
}

const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length - 1; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}