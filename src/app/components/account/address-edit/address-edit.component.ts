import { Component, OnInit } from '@angular/core';
import { AddressEdit } from 'src/app/_models/addressEdit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressService } from 'src/app/_services/address.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['../../../styles/formgroupcenter.css', './address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
  addressId: number;
  address: AddressEdit;
  addressEditForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private authService: AuthService, 
    private addressService: AddressService, 
    private alertify: AlertifyService, 
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.address = data['address'];
    })

    this.addressEditForm = this.fb.group({
      id: [this.address.id],
      userId: [this.authService.decodedToken.sub],
      alias: [ this.address.alias, Validators.required],
      firstName: [this.address.firstName, Validators.required],
      lastName: [this.address.lastName, Validators.required],
      street: [this.address.street, Validators.required],
      buildingNumber: [this.address.buildingNumber, Validators.required],
      apartmentNumber: [this.address.apartmentNumber],
      place: [this.address.place, Validators.required],
      postCode: [this.address.postCode, Validators.required],
      phone: [this.address.phone, Validators.required],
      email: [this.address.email, Validators.required],
      nip: [this.address.nip],
      company: [this.address.company],
    });
  }

  get f() { return this.addressEditForm.controls; }

  updateAddress() {

    if(this.addressEditForm.valid) {
      this.address = Object.assign({}, this.addressEditForm.value);

      this.addressService.updateAddress(this.authService.decodedToken.sub, this.route.snapshot.params['id'], this.address).subscribe(() => {
        this.alertify.success('Pomyślnie zapisano zmiany.');
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.router.navigate(['/moje-konto/adresy']);
      });
    }
  }
}
