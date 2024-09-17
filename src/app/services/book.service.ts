// src/app/services/book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'  // Isso garante que o serviço esteja disponível em toda a aplicação
})
export class BookService {
  private API_URL = 'https://gutendex.com/books/';  // URL base da API 

 
  
  constructor(private http: HttpClient) {}

  // Método para buscar livros por autor
  buscarLivros(query: string): Observable<any> {
    const url = `${this.API_URL}?q=${query}`;
    return this.http.get(url);
  }
}