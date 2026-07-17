-- Task 4: Supplier Dependency Check
-- The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
-- Before deciding whether to source from an alternative supplier, they need to know exactly
-- which ingredients depend on that supplier, so they can assess the impact on the menu.
--
-- Hint: Write a query to find the names of all ingredients supplied by 'Freshest Farm Produce'.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task4_bonus.mongodb.js

SELECT ingredients.name, ingredients.stock_level FROM ingredients
JOIN suppliers
ON ingredients.supplier_id  = suppliers.supplier_id
WHERE suppliers.supplier_id = 3
ORDER BY ingredients.stock_level ASC;



-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking: ข้อนี้อยากแรกคือต้อง join 2 ตารางเพื่อหาข้อมูลที่ตรงกันของ supplier กับ ingrediant
-- พอรู้ว่าโจทย์นี้ suppliers id = 3 ก็ ใช้ where เพื่อกรองให้เหลือแค่ suppliers ดังกล่าวตามโจทย์
-- stock_level ที่เอาเข้มาโชว์ด้วยผมตั้งใจเพราะตามโจทย์บอกว่าต้องประเมินผลกระทบ ผมเลยคิดว่าต้องมี stock_level ครับ
--