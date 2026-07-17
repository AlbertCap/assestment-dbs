// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql
use("chrome-burger-db");

db.orders.find({"staff.staff_id": ObjectId("634d00000000000000000011")},{_id: 0, order_date: 1, total_price: 1});

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking: ข้อนี้ต้องการหาออร์เดอร์ที่รับผิดชอบโดย Jane Doe ผมเลยต้องไปดูที่ orders ก่อนแล้วคิดว่าจะดึงข้อมูลมาแสดง
// แค่ 2 document อย่างไร (order_date กับ total_price) ถ้าจะดึง firstname กับ last name คงไม่ค่อยสมเหตุสมผล ผมเลยเลือกดึง ที่ ID แทน
// พอดึงไอดีได้ก็เหลือแค่ทำให้แสดงแค่ 2 ค่า โดยใช้อีก Bracket ที่ต้องใส่ชื่อ Field กับค่า 1 เพื่อเลือกแสดง
//
