// Import the Farmer class or relevant modules
import ViewGallery from "../ViewAddProduct";

describe('Testing the calculateTotalProducts function in Farmer class', () => {
  test('Should return the correct total number of products listed by the farmer', () => {
    // Arrange
    const products = ['Tomatoes', 'Potatoes', 'Carrots'];
    const viewGallery = new ViewGallery(products);

    // Act
    const totalProducts = viewGallery.calculateTotalProducts();

    // Assert
    expect(totalProducts).toBe(3);
  });
});
