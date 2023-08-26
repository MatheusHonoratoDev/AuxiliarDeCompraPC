import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent {
  marca: string | null = null;
  inicialAsk: string | null = null;
  ask: boolean = false;
  selectedValue: string | null = null;
  next: boolean = true;
  textButton: string = 'Sim';

  processadores = [
    'Atom',
    'Celeron',
    'Pentium',
    'Intel® Core™ i3-3245',
    'Intel® Core™ i5-3340S',
    'Intel® Core™ i3-3250',
    'Intel® Core™ i3-3250T',
    'DualCore',
    'QuadCore',
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedValue = params.get('selectedValue');
      this.marca = this.selectedValue;

      if (
        this.marca?.trim() === 'Positivo' ||
        this.marca?.trim() === 'Multilaser'
      ) {
        this.inicialAsk = `O ${this.marca} custa menos de R$200,00?`;
      } else {
        this.inicialAsk = `Seu pc ${this.marca} será para uso doméstico?`;
      }
    });
  }

  processarResposta(ask: boolean) {
    this.responseBack();
    if (
      this.marca?.trim() === 'Positivo' ||
      this.marca?.trim() === 'Multilaser'
    ) {
      if (
        ask === true &&
        (this.marca?.trim() === 'Positivo' ||
          this.marca?.trim() === 'Multilaser')
      ) {
        this.inicialAsk =
          'Se for usado e tiver menos de 3 anos talvez valha a pena! 😎';
        this.next = false;
        this.textButton = 'Inicio';
      } else {
        this.inicialAsk = `COMPRA ${this.marca} NÃO! é bomba 💣`;
        this.next = false;
        this.textButton = 'Inicio';
      }
    } else {
      if (
        (ask && this.marca?.trim() !== 'Positivo') ||
        this.marca?.trim() !== 'Multilaser'
      ) {
        this.next = false;
        this.textButton = 'Próximo';
        this.ask = true;
        this.inicialAsk = 'Selecione o processador';
        if (this.selectedValue === 'Celeron') {
        }
      } else {
        console.log('Resposta falsa');
      }
    }
  }

  responseBack() {
    if (this.textButton.trim() === 'Inicio') {
      this.router.navigateByUrl('');
    }
  }
}
