-- Task 2 Bonus: Shift Activity Report
-- Jane Doe has an upcoming performance review and the manager wants to look at her order history
-- ahead of the meeting. They only need to see when each order was placed and what it was worth —
-- no other details are required for this particular review.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the order_date and total_price from the Orders table
-- for all orders handled by Jane Doe. You will need to join with the Staff table
-- to filter by the staff member's name.

SELECT Orders.order_date , Orders.total_price FROM Orders
JOIN Staff
ON Orders.staff_id = Staff.staff_id
WHERE Orders.staff_id = 1;

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking: ข้อนี้อ่านตามโจทย์ค่อนข้างบอกมาครบแล้ว หน้าที่ของเราคือ JOIN 2 table ให้ข้อมูลตรงกัน 
-- และหาว่า Jane Doe คือคนไไหน แล้วใช้ WHERE เลือก
--
