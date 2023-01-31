import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcurmbs',
  templateUrl: './breadcurmbs.component.html',
  styleUrls: ['./breadcurmbs.component.css']
})
export class BreadcurmbsComponent implements OnDestroy {
  public titulo? :string;
  public tituloSubs$: Subscription;

  constructor(
    private router: Router,
  ) { 

    this.tituloSubs$ = this.getArgumentos().subscribe(({titulo})=>{
      this.titulo = titulo;
      document.title =`Staycloo - ${titulo}`
    }
   
    )

  }
  ngOnDestroy(): void {
    this.tituloSubs$?.unsubscribe();
  }

  ngOnInit(): void {
  }

getArgumentos(){

return this.router.events.pipe(
  filter((event:any)=>event instanceof ActivationEnd),
  filter((event:ActivationEnd)=> event.snapshot.firstChild == null),
  map((event: ActivationEnd)=>event.snapshot.data)

)
}
}
