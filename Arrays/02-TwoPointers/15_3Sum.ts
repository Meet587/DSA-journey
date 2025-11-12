function threeSum(nums: number[]): number[][] {
    const res = []
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        const a = -nums[i];
        let p = i + 1;
        let q = nums.length - 1;
        while (p < q) {
            if (nums[p] + nums[q] == a) {
                res.push([nums[p], nums[q], -a]);
                p++; q--;
                while (p < q && nums[p] === nums[p - 1]) p++;
                while (p < q && nums[q] === nums[q + 1]) q--;
            } else if (nums[p] + nums[q] > a) {
                q--;
            } else { p++; }

        }
    }

    return res;
};