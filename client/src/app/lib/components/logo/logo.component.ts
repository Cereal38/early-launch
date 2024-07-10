import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '@lib/services/api.service';

@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './logo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {
    constructor(private _apiService: ApiService) {}

    ngOnInit(): void {
        this._apiService.get('/').subscribe((data) => {
            console.log('Test API call', data);
        });
    }
}
