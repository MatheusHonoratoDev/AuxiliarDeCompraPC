import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface notebookBrand {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedValue: any;
  

  notebookBrand: notebookBrand[] = [
    { value: 'Multilaser', viewValue: 'Multilaser' },
    { value: 'Positivo', viewValue: 'Positivo' },
    { value: 'Dell', viewValue: 'Dell' },
    { value: 'HP', viewValue: 'HP (Hewlett-Packard)' },
    { value: 'Lenovo', viewValue: 'Lenovo' },
    { value: 'Apple', viewValue: 'Apple' },
    { value: 'Asus', viewValue: 'Asus' },
    { value: 'Acer', viewValue: 'Acer' },
    { value: 'Microsoft', viewValue: 'Microsoft' },
    { value: 'MSI', viewValue: 'MSI' },
    { value: 'Alienware', viewValue: 'Alienware' },
    { value: 'Razer', viewValue: 'Razer' },
    { value: 'Samsung', viewValue: 'Samsung' },
  ];
  
  constructor(private router: Router) {
    this.notebookBrand.sort((a, b) => a.viewValue.localeCompare(b.viewValue));
  }

  verificarSelecao() {
    console.log('Valor selecionado:', this.selectedValue);
    this.router.navigate(['/outro-componente', this.selectedValue]);
  }
  
}
