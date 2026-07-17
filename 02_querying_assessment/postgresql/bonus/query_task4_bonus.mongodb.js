// Task 4 Bonus: Supplier Dependency Check
// The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
// Before deciding whether to source from an alternative supplier, they need to know exactly
// which ingredients depend on that supplier, so they can assess the impact on the menu.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: In the ingredients collection, supplier references are stored as ObjectIds rather than names.
// Use an aggregation pipeline with $lookup to join the ingredients collection with the suppliers
// collection, then filter where the supplier name is 'Freshest Farm Produce' and return
// only the ingredient names.

use("chrome-burger-db");
db.ingredients.aggregate([
 {
    $lookup: {
      from: "suppliers",
      localField: "supplier_id",
      foreignField: "_id",
      as: "suppliers_info"
    }
 },
 { $match: {
   "supplier_id": ObjectId('634d00000000000000000003')
 }
 },
 { $project:{
    _id: 0,
    name: 1,
    stock_level: 1,
 }
 },{
    $sort: { "stock_level" : 1 }
  }

])

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking: ข้อนี้ทำเองได้ 100% แบบไม่ต้องให้ ai ช่วยเหมือน Bonus 3 แล้วครับ
// อยากแรกคือต้องรู้ว่า $lookup join กันข้ามตารางยังไง
// พอjoin แล้วผลลัพธ์ผ่านผมก็ทำ $project ก่อนเพราะข้อมูลที่แสดงเยอะมาก
// ทีนี่เรายังม่ได้ทำตามโจทย์คือเลือก suppliers 'Freshest Farm Produce' ผมกฌใช้วิธี match
// ที่ค่า ID แทน และสุดท้ายก็เรียงลำดับ stock อันที่เหลือน้อยสุดเพื่อคำนึงถึงการเติมในอนาคต
//
