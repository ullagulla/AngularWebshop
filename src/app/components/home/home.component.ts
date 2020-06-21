import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Movie from 'src/app/models/MovieProduct';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieProducts: Movie[] = [];
  categories;
  movieControl = false;

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  constructor(private service: HttpService, private route: Router) { }

  ngOnInit(): void {

    this.service.theMovies.subscribe((m) => {
      this.movieProducts = m.filter((m) => {
        if (m.name === null && m.imageUrl === null) {
          return;
        }
        return m;
      });
    });

    this.service.getMovieProducts();

  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 270), behavior: 'smooth' });
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 270), behavior: 'smooth' });
  }

  goToProduct(movie) {
    this.route.navigate(["/products", movie.id])
  }

  imageNotFound(event) {
    event.target.src = "../../assets/ImageNotFound.png"
  }

}
