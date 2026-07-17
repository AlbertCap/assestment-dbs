// Task 3: Stock Replenishment Check
// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// that are already well-stocked. They need a list of every ingredient with a stock level
// of 100 or more so those can be deprioritised in this week's order.
//
// Hint: Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql
use("chrome-burger-db");

db.ingredients.find({stock_level: {$gte: 100.00}});

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking: ข้อนี้ที่คิดอย่างแรกคือต้องใช้ operater กับค่า stock เพื่อหาสินค้าในสต๊อกกี่เท่ากับหรือมากกว่า 100 เลยไม่ยากครับเพราะใช้
// แค่การเช็คด้วย $gte ที่เหลือก็ไปดูว่าต้องดึงค่าสต๊อกว่า document ชื่ออะไร (stock_level)
//
