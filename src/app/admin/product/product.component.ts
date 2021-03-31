import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //not best practice, better used type data like int, string, etc
  title: any; 

  //register book data
  book:any={};

  //create arrays books data
  books: any = [];

  
  constructor(
     //create dialog data
    /**
     * dialog
     */
    public dialog:MatDialog,

    /**
     * api
     */
    public api:ApiService,
  ) { 
    
  }

  getBooks()
  {
    this.api.get('books').subscribe(result=>{
      this.books=result;
    });

    //form local
    //update arrays book data
  /**
   * this.books = 
   [
     {
       title:"Belajar Angular",
       author:"Resa Cahya Saputra",
       publisher:"Sownhouse Digital",
       year:"2021",
       isbn:"m83109283019",
       price:90000 
     },
     {
       title:"Belajar Angular 2",
       author:"Resa Cahya Saputra",
       publisher:"Sownhouse Digital",
       year:"2021",
       isbn:"m83109283019",
       price:90000 
     },
     {
       title:"Belajar Angular 3",
       author:"Resa Cahya Saputra",
       publisher:"Sownhouse Digital",
       year:"2021",
       isbn:"m83109283019",
       price:90000 
     },
   ] 
   */
   
  }

  productDetail(data, idx){
    let dialog=this.dialog.open(ProductDetailComponent,{
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res){
        //if data idx (new data) then add data
        if(idx==-1) this.books.push(res);
        //else update data
        else this.books[idx]=res;
      }
    })
  }

  deleteProduct(idx){
    var conf=confirm('delete item?');
    if(conf){
    }
    this.books.splice(idx, 1)
  }
  ngOnInit(): void {

    //update title data
    this.title="Product";

    //update book data
    this.book={
      title:"Belajar Angular",
      author:"Resa Cahya Saputra",
      publisher:"Sownhouse Digital",
      year:"2021",
      isbn:"m83109283019",
      price:90000 
    };

    this.getBooks();
    // console.log(this.api.get());
  }

  //GET api.sunhouse.co.id/index.php/books
}
