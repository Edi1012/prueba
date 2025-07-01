import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Nuestros Productos</h1>
      <p>Aquí puedes ver todos nuestros productos disponibles.</p>
      
      <div class="products-grid">
        <div class="product-card">
          <h3>Producto 1</h3>
          <p>Descripción del producto 1</p>
          <span class="price">$99.99</span>
        </div>
        
        <div class="product-card">
          <h3>Producto 2</h3>
          <p>Descripción del producto 2</p>
          <span class="price">$149.99</span>
        </div>
        
        <div class="product-card">
          <h3>Producto 3</h3>
          <p>Descripción del producto 3</p>
          <span class="price">$79.99</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    h1 {
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    
    .product-card {
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    
    .product-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
    
    .price {
      font-weight: bold;
      color: #27ae60;
      font-size: 1.2em;
    }
  `]
})
export class ProductosComponent {

}
