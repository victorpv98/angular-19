import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // instanciando los servicios
  constructor(private userService: UserServiceService){}

  // Jalando metodo get de servicio
  listado  = new Array();
  listadoDataArr = new Array();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.metodoGet().subscribe({
      next:(comentsAll: string)=>{
        this.listado.push(comentsAll);
        this.listadoDataArr = [...this.listado[0]]
      },
      error:(er)=>{console.error(er)},
      complete:()=>console.info("api trae datos correctos")
    })
  }
}
