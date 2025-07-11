import { CommonModule } from "@angular/common";

import { ProdutoResponse } from "../../interfaces";
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Component, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CarrinhoService } from "../../services/carrinho";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

	@Component({
	  selector: 'app-produto',
	  imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	  ], 
	  templateUrl: './produto.html', 
	  styleUrls: ['./produto.css'] 
	})
	export class Produto {
Carrinho(_t5: ProdutoResponse) {
throw new Error('Method not implemented.');
}
	  http = inject(HttpClient); // Injeção do serviço HttpClient para fazer requisição HTTP
	  fb = inject(FormBuilder); // Injeção do FormBuilder para criar formulários reativos
	  produtos: ProdutoResponse[] = []; // Lista de produtos
	  carrinhoService = inject(CarrinhoService); // Injeção do CarrinhoService
	  router = inject(Router); // Injeção do Router para navegação

	  // Formulário reativo para capturar dados
	  form = this.fb.group({
		preco: new FormControl,
		nome: new FormControl
	  });

	  ngOnInit() {
		// Requisição HTTP para obter os produtos da API
		this.http.get(environment.apiPagamento + '/produtos')
		  .subscribe((response) => {
			const produtos = response as ProdutoResponse[]; 
			this.produtos = produtos; // Armazenando os produtos no array
		  });
	  }

	  // Adiciona o produto ao carrinho
	  adicionarCarrinho(produto: ProdutoResponse): void {
		this.carrinhoService.adicionarAoCarrinho(produto);
	  }

	  // Obtém a contagem de itens no carrinho
	  obterContagemCarrinho(): number {
		return this.carrinhoService.contarItensCarrinho();
	  }

	  // Navega para a página de pagamento
	  irParaCarrinho(): void {
		this.router.navigate(['/pagamento']);
	  }
	}