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
  selectedValue: string | null = null;
  next: boolean = true;
  textButton: string = 'Sim';
  jueio = false;
  resposta: boolean | undefined;

  processadoresDomesticos = [
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

  processadoresGamers: Array<string> = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedValue = params.get('selectedValue');
      this.marca = this.selectedValue;

      switch (this.marca?.trim()) {
        case 'Positivo':
        case 'Multilaser':
          this.inicialAsk = `O ${this.marca} custa menos de R$200,00?`;
          break;
        default:
          this.inicialAsk = `Seu PC ${this.marca} será para uso doméstico?`;
      }
    });
  }

  sendValue( valor: boolean){
    this.resposta = valor;
  }

  processarResposta(ask: boolean) {
    this.responseBack();

    switch (this.marca?.trim()) {
      case 'Positivo':
      case 'Multilaser':
        if (ask) {
          this.inicialAsk = `Se não for usado, talvez valha a pena! 😎`;
        } else {
          this.inicialAsk = `COMPRA ${this.marca} NÃO! É bomba 💣`;
        }
        this.next = false;
        this.textButton = 'Início';
        break;
      default:
        if (ask) {
          this.next = false;
          this.textButton = 'Próximo';
          this.jueio = true;
          this.inicialAsk = 'Selecione o processador';
          if (this.selectedValue === 'Celeron') {
            this.inicialAsk =
              'Se você comprar, talvez seja melhor você procurar um psiquiatra, vai precisar 🤪';
            this.next = false;
            this.textButton = 'Início';
            this.jueio = false;
          }
        } else {
          this.inicialAsk = 'Será para jogos? 🎮';
          this.banana(ask);
        }
        break;
    }
  }

  banana(churros: boolean) {
    console.log(churros)
    if (churros) {
      this.processadoresGamers = [
        'Notebook Gamer Lenovo IdeaPad 3i',
        'Notebook Gamer Acer Predator Helios 300',
        'Notebook Gamer Dell G15',
        'Notebook Gamer ASUS TUF',
      ];
      this.inicialAsk =
        'Uma loja geladeira não é o melhor lugar para comprar um PC gamer. Aqui estão algumas opções de linhas gamers que podem te ajudar 🖥️:';
      this.next = false;
      this.textButton = 'Início';
    } else {
      console.log('juliete');
    }
  }

  responseBack() {
    switch (this.textButton.trim()) {
      case 'Início':
        this.router.navigateByUrl('');
      break;
    }
  }
}
