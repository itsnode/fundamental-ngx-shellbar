import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MessagePageModule } from '@fundamental-ngx/core/message-page';

@Component({
    selector: 'fd-upload-collection-empty-example',
    templateUrl: './upload-collection-empty-example.component.html',
    standalone: true,
    imports: [NgIf, MessagePageModule]
})
export class UploadCollectionEmptyExampleComponent {
    items = [];
}
