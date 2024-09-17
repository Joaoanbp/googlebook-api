import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public data: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
      this.fetchDetails();
  }
  public async fetchDetails() {
    const makeAPICall = async () => {
      try {
        const response = await fetch(`https://gutendex.com/books`);
        const data = await response.json();
        return data;
      } catch (e) {
        console.error('Error fetching api:', e);
      }
    };
    // Espera a resolução da promessa antes de acessar 'results'
    const banana = await makeAPICall();
  
    if (banana && banana['results']) {
      banana['results'].map((x: any) => console.log(x['title'], x['authors']));
    } else {
      console.error('No results found');
    }
  }
}