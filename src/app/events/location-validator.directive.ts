import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]

})

export class LocationValidator implements Validator {
    validate(formgroup: FormGroup): {[key: string]: any} {
        const addressControl = formgroup.controls['address'];
        const cityControl = formgroup.controls['city'];
        const countryControl = formgroup.controls['country'];
        const onlineUrlControl = (<FormGroup>formgroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            return {validateLocation: false};
        }
    }
}
