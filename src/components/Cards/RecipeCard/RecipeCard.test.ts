/// <reference types="vitest" />
import { describe, it, expect } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import RecipeCard from "./RecipeCard.astro";

describe("RecipeCard Component", () => {
  it("renders heading, description, and tags correctly", async () => {
    const container = await AstroContainer.create();

    const props = {
      heading: "Test Recipe",
      description: "This is a test description",
      tags: ["vegan", "dessert"],
      imageSrc: "/test-image.jpg",
      imageAltText: "Test Image",
      pageUrl: "https://example.com",
    };

    const result = await container.renderToString(RecipeCard, { props });

    // Check that heading is rendered
    expect(result).toContain(props.heading);

    // Check that description is rendered
    expect(result).toContain(props.description);

    // Check that tags are rendered
    props.tags.forEach((tag) => {
      expect(result).toContain(tag.toUpperCase());
    });

    // Optional: check for class from CSS Module
    expect(result).toContain("recipeCardWrapper");
  });
});
