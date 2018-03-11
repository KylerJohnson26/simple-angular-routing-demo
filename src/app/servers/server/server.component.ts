import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Data } from '@angular/Router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  id: number;
  private subscription: Subscription;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(this.id);        
    // this.subscription = this.route.params.subscribe(params => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
  }

  onEdit() {
    this.router.navigate(
      ['edit'], 
      {
        relativeTo: this.route, 
        queryParamsHandling: 'preserve' // preserves query parameters
      }
    ); // relative route because we're already on this route.. just adds edit on end of url
  }

}
