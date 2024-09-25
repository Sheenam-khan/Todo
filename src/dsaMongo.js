// Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
 
 
const twoElementsSum = (nums, target) => {
    if (!Array.isArray(nums) || typeof target !== 'number') {
        throw new Error('Invalid input arguments');
    }

    const numToIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }

    throw new Error('No two sum solution found.');
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoElementsSum(nums, target));


const aggregatedQuery=db?.sales?.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: {
                store: "$store",
                year: { $year: "$date" },
                month: { $month: "$date" }
            },
            totalRevenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } },
            totalQuantity: { $sum: "$items.quantity" },
            totalPrice: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
        }
    },
    {
        $project: {
            store: "$_id.store",
            month: {
                $concat: [
                    { $toString: "$_id.year" },
                    "-",
                    { $cond: { if: { $lt: ["$_id.month", 10] }, then: { $concat: ["0", { $toString: "$_id.month" }] }, else: { $toString: "$_id.month" } } }
                ]
            },
            totalRevenue: 1,
            averagePrice: { $divide: ["$totalPrice", "$totalQuantity"] },
            _id: 0,
        }
    },
    {
        $sort: {
            store: 1,
            month: 1
        }
    }
]);