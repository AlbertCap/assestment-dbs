// Task 3 Bonus: Staff Performance Review
// At the end of the month, the owner wants to reward the hardest-working cashiers.
// To decide fairly, they want to see how many orders each staff member has processed,
// with the busiest staff member appearing at the top of the list.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write an aggregation query on the orders collection to count the number of orders
// per staff member. Each order embeds the staff member's first and last name directly.
// The result should show each staff member's full name and their total order count,
// ordered by the count in descending order.

use("chrome-burger-db");
db.orders.aggregate([
  {
    $group: {
      _id: {
        firstName: "$staff.first_name",
        lastName: "$staff.last_name"
      },
      totalOrders: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      fullName: { $concat: ["$_id.firstName", " ", "$_id.lastName"] },
      totalOrders: 1
    }
  },
  {
    $sort: { totalOrders: -1 }
  }
]);

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking: ข้อนี้ต้องให้ AI ช่วยไกด์
// ลองทำหลายๆวิธียังไมไ่ด้ ได้มากว่าคือนับจำนวรวมที่ 19 เลยลองให้ AI ช่วยไกด์แล้วสรุปได้ว่า
// สิ่งที่ต้องทำอย่างแรกคือสร้างกลุ่มให้พนักงานแต่ละคนโดยคำสั่ง group 
// จากนั้นก็ใช้คำสั่ง totalOrders: { $sum: 1 } ซึ่งไม่ใช่การบวกที่ staff_id แต่เป็นการบวกทุกครั้ง
// ที่มีชื่อพนักกงานซ้ำกันจากการที่เราสร้าง group ไว้