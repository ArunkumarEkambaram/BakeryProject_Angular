import { ProductService } from './../product.service';
import { product } from './../../models/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  prod: product = new product();

  imgSrc: string;
  imgFileName: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onChange(event) {
    let imgFile = event.target.files[0];
    this.prod.ImageFileName=imgFile.name;
    console.log(this.prod.ImageFileName);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgSrc = reader.result as string;
      }
    }
  }

  addProduct() {
    this.productService.save(this.prod).subscribe();
  }
}
