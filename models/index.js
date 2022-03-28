const Product = require("./Product.js");
const Category = require("./Category.js");
const Tag = require("./Tag.js");
const ProductTag = require("./ProductTag.js");

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsToMany(Tag, {
  through: ProductTag,
});

Tag.belongsToMany(Product, {
  through: ProductTag,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
