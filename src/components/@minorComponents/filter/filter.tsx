import { CategoryFilterStyle } from "./style";

type Category = "all" | "myProjects" | "studies" | "practicalTests";

type CategoryFilterProps = {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <CategoryFilterStyle>
      <p
        className={selectedCategory === "all" ? "active" : ""}
        onClick={() => onCategoryChange("all")}
      >
        All
      </p>
      <p
        className={selectedCategory === "myProjects" ? "active" : ""}
        onClick={() => onCategoryChange("myProjects")}
      >
        My Projects
      </p>
      <p
        className={selectedCategory === "studies" ? "active" : ""}
        onClick={() => onCategoryChange("studies")}
      >
        Studies
      </p>
      <p
        className={selectedCategory === "practicalTests" ? "active" : ""}
        onClick={() => onCategoryChange("practicalTests")}
      >
        Practical Tests
      </p>
    </CategoryFilterStyle>
  );
}
