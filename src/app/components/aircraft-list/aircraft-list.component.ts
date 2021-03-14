
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '@root/shared/utilities/utils.service';
import { AircraftService } from '@services/aircraft.service';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.scss'],
})
export class AircraftListComponent implements OnInit {
  @Output() AircraftSelected = new EventEmitter<boolean>();
  public aircraftAll?: any[];
  constructor(
    private aircraftService: AircraftService,
    private utilService: UtilsService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.utilService.loading();
    this.getData();
  }
  getData() {
    this.aircraftService.searchAllAircraft$().subscribe(
      (resp: any) => {
        this.utilService.loading(false);
        this.aircraftAll = resp.data;
        this.messageService.showCustom(resp.message, null, 'success');
      },
      (error) => {
        this.utilService.loading(false);
        console.log(error);
        this.messageService.showCustom(error.error.message, null, 'error');
      }
    );
  }
  selected(aircraft: any){
    this.AircraftSelected.emit(aircraft);
  }
  edit(aircraft: any){
    this.router.navigateByUrl(`main/aeronaves/${aircraft.id}`);
  }
  delete(aircraft: any) {
    this.aircraftService.deleteAircraft$(aircraft).subscribe(
      (resp: any) => {
        this.utilService.loading(false);
        this.aircraftAll  = this.aircraftAll?.filter( e => e.id !== aircraft.id)
        this.messageService.showCustom(resp.message, null, 'success');
      },
      (error) => {
        this.utilService.loading(false);
        console.log(error);
        this.messageService.showCustom(error.error.message, null, 'error');
      }
    );
  }

}
