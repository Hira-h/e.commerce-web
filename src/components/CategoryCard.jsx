function CategoryCard({ name, image }) {
  return (
    <div className="category-card">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <span>Shop Now →</span>
      </div>
    </div>
  );
}

export default CategoryCard;