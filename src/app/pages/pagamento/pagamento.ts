import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoResponse } from '../../interfaces';
import { CarrinhoService } from '../../services/carrinho';

@Component({
  selector: 'app-pagamento',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  templateUrl: './pagamento.html', 
  styleUrls: ['./pagamento.css'] 
})
export class pagamento implements OnInit {
  produtos: ProdutoResponse[] = []; // Lista de produtos no carrinho

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    // Obtém os produtos do carrinho
    this.produtos = this.carrinhoService.obterCarrinho();
  }

  // Calcula o total do carrinho
  calcularTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }

  // Remove um produto do carrinho
  removerProduto(produto: ProdutoResponse): void {
    this.produtos = this.produtos.filter(p => p !== produto); // Remove o produto do array
    this.carrinhoService.atualizarCarrinho(this.produtos); // Atualiza o carrinho no serviço
  }

  // Realiza o pagamento
  realizarPagamento(): void {
    const total = this.calcularTotal();
    alert(`O total do seu carrinho é: ${total.toFixed(2)} BRL. Pagamento realizado com sucesso!`);
  }
}