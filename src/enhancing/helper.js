module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newEnhance = item.enhancement === 20 ? 20 : item.enhancement + 1;
  return { ...item, enhancement: newEnhance };
}

function fail(item) {
  const newDurability = item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
  const newEnhance = item.enhancement > 15 ? item.enhancement - 1 : item.enhancement;
  return { ...item, durability: newDurability, enhancement: newEnhance };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}