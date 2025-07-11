import { Router, Routes } from '@angular/router';
import { Produto } from './pages/produto/produto';
import { pagamento } from './pages/pagamento/pagamento';


export const routes: Routes = [
  {
			path : 'produto', component:Produto
		},
		{
			path:'' ,redirectTo: 'produto',pathMatch:'full'
		},
		{
			path: 'pagamento', component:pagamento
		}
];
