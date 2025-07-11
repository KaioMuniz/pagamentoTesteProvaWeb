import { Injectable } from '@angular/core';

@Injectable({
	  providedIn: 'root'
	})
	export class CarrinhoService {
	  constructor() { }

	  // Adiciona um produto ao carrinho
	  adicionarAoCarrinho(produto: any): void {
		const carrinho = this.obterCarrinho(); // Obtém os produtos do carrinho
		carrinho.push(produto); // Adiciona o produto ao array do carrinho
		localStorage.setItem('carrinho', JSON.stringify(carrinho));
	  }

	  // Obtém os itens do carrinho
	  obterCarrinho(): any[] {
		const carrinho = localStorage.getItem('carrinho');
		return carrinho ? JSON.parse(carrinho) : [];
	  }

	  // Atualiza os itens do carrinho
	  atualizarCarrinho(produtos: any[]): void {
		localStorage.setItem('carrinho', JSON.stringify(produtos)); 
	  }

	  // Conta o número de itens no carrinho
	  contarItensCarrinho(): number {
		const carrinho = this.obterCarrinho();
		return carrinho.length; // Retorna a quantidade de produtos no carrinho
	  }
	}