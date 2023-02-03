import { Injectable } from '@angular/core';
import { collectionData, Firestore, addDoc } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs'

import { Product } from '../models/product';
import { userMessage } from '../models/userMessage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore) { 
  
  }
    addUserComment(comment : userMessage){

      const commentRef = collection(this.firestore, 'comments');
      return addDoc(commentRef, comment)

    }

    getProducts(): Observable<Product[]>{
      const productRef = collection(this.firestore, 'products');
      return collectionData(productRef, {idField: 'id'}) as Observable<Product[]>
    }

  }
