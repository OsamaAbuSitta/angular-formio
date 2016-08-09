import { OnInit } from '@angular/core';
import { BaseComponent, BaseOptions, BaseElement} from '../base';
import { FormioComponents } from '../components';
import { FormioTemplate } from '../../formio.template';

export interface RadioOptions extends BaseOptions<string> {
    inputType?: string,
    type?: string,
    inline?: boolean,
    value?: string,
    values?: Array<{}>,
    defaultValue?: string,
    name?: string
}

export class RadioComponent extends BaseComponent<RadioOptions> {}

export class RadioElement extends BaseElement<RadioComponent> implements OnInit {
    ngOnInit() {
        this.onRender();
    }
}

export function RadioField(template:FormioTemplate) {
    FormioComponents.register('radio', RadioComponent, RadioElement, {
        template: template.components.radio
    });
    return RadioElement;
}
