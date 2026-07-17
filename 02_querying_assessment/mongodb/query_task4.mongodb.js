// Task 4: Total Revenue Summary
// At the end of the trading period, the owner wants a single figure that shows how much revenue
// the truck has generated across all recorded orders. This number will be used in their
// financial summary report, so the result should be returned as a single value named total_revenue.
//
// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql
use("chrome-burger-db");

db.orders.aggregate([
    {
      $group: {
        _id: null,
        total_revenue: {
          $sum: "$total_price"
        }
      }
    },{
      $project: {
        _id: 0,
        total_revenue: 1
      }
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
// Your thinking: ข้อนี้ต้องคิดตรงที่ต้องใช้ Aggregate ผมเลยเริ่มอ่านจากตัวอย่างเก่า โดยลองเริ่มใช้ $match ก่อน
// แต่ match มักจะใช้กับ document ที่มี status แต่ของ orders เราไม่มีผมเลยลองหาทางเลือกอื่นๆ
// เลยใช้ group แทนซึ่งทำให้เราสร้าง document total_revenue ที่ใช้คำนวณ SUM ได้เหมือนกัน
// อีกอย่างผมลองใส่ _id เป็น null ทดลองดูเพราะอยากได้ทุก document แต่สุดท้ายก็ได้คำตอบออกมาครับ
// อีกปัญหานึงที่ติดคือการแสดงแค่ค่า total_revenue ไม่สามารถใช้วิธีเดียวกับ find ได้
// เลยลองดูวิธีจนเจอว่าเราใช้ project ในการเลือกแสดงได้
