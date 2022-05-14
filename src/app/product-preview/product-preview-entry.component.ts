import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PopUpComponent } from "../pop-up/pop-up.component";
import { PopUpService } from "../pop-up/pop-up.service";

@Component({
    template: ''
})
export class ProductPreviewEntryComponent implements OnInit{
    constructor(private router: Router,
        private route: ActivatedRoute,
        private popUpService: PopUpService
    ) {
        this.openDialog();
    }
    ngOnInit(): void {
        
    }
    openDialog(): void {
        const options = { component: PopUpComponent, title:'product Preview',id:this.route.snapshot.paramMap.get('product') }
        this.popUpService.open(options);

        this.popUpService.confirmed().subscribe(confirmed => {
            if (confirmed) {
                this.router.navigate(['../'], { relativeTo: this.route });
            }
        });
    }
}