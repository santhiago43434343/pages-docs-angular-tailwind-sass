import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarrinhoService } from '../services/carrinho.service';
import { IprodutoCarrinho } from '@interfaces/iproduto-carrinho';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'], // agora com Tailwind + @apply
})
export class CarrinhoComponent implements OnInit {
  items: IprodutoCarrinho[] = [];
  itemsCarrinho: IprodutoCarrinho[] = [];

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.carrinhoService.obterCarrinho().map((item: IprodutoCarrinho) => item);
    this.itemsCarrinho = [...this.items];
  }

  removerProdutoCarrinho(produtoId: number): void {
    this.itemsCarrinho = this.itemsCarrinho.filter(item => item.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinho));
  }

  get total(): number {
    return this.itemsCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  }

  removerItem(index: number): void {
    this.itemsCarrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinho));
  }

  comprar(): void {
    alert("Parabéns, você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
