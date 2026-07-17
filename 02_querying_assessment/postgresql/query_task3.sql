-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js
--SELECT * FROM orders;

SELECT staff.first_name || ' ' || staff.last_name AS full_name, COUNT(orders.staff_id) AS total_orders FROM orders
JOIN staff 
ON orders.staff_id = staff.staff_id
GROUP BY staff.staff_id, full_name
ORDER BY total_orders DESC;

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking: ข้อนี้เริ่มงงตอนต้นนิดหน่อยเพราะต้องใช้ทั้งการ join เพื่อเอาชื่อกับสนามของสตาฟ
-- และการ count เพื่อนับจำนวนคนที่ทำ order สูงสุดเลยเริ่มจากศึกษาคำสั่ที่ต้องใช้ทั้งหมดก่อน
-- จุดที่ต้องไม่งงในข้อนี้คือต้องใส่ชื่อ table ก่อน คอลัมน์ เช่น table.column1 ไม่งั้นจะสับสน
-- และการที่ผลลัพธ์จากการ Count ต้องนำมาสร้างชื่อคอลัมน์ว่า total orders
-- มีจุดนึงเกือบลืมแต่กลับมาอ่านโจทย์อีกทีว่าเราต้อง concatenate ชื่อนามสกุลเขาด้วยกันตรงนี้ไม่ยากครับใช้ || และ AS เป็นชื่อใหม่