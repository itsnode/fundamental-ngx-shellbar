import { Component } from '@angular/core';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { FormItemComponent, FormLabelComponent } from '@fundamental-ngx/core/form';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { TabsModule } from '@fundamental-ngx/core/tabs';

@Component({
    selector: 'fd-tab-form-element-example',
    templateUrl: './tab-form-element-example.component.html',
    standalone: true,
    imports: [FormLabelComponent, TabsModule, ButtonModule, FormItemComponent, InputGroupModule]
})
export class TabFormElementExampleComponent {}
