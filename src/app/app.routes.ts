import { Routes } from '@angular/router';
import { provideRouter, withHashLocation } from '@angular/router';
import { environment } from '../environments/environment';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '404',
    loadComponent: () =>
      import('./pages/nao-encontrado/nao-encontrado.component').then(m => m.NaoEncontradoComponent)
  },

  { path: 'produtos',
    loadComponent: () =>
      import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  },

  { path: 'produtos/:descricao',
    loadComponent: () =>
      import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  },

  { path: 'produto/:id',
    loadComponent: () =>
      import('./produtos/detalhes-produto/detalhes-produto.component').then(m => m.DetalhesProdutoComponent)
  },

  { path: 'carrinho',
    loadComponent: () =>
      import('./carrinho/carrinho.component').then(m => m.CarrinhoComponent)
  },

  { path: 'servidores',
    loadComponent: () =>
  import('./servidores/servidores.component').then(m => m.ServidoresComponent)
  },

   { path: 'home',
    loadComponent: () =>
  import('./home/home.component').then(m => m.HomeComponent)
  },

  { path: 'contato',
    loadComponent: () =>
      import('./contato/contato.component').then(m => m.ContatoComponent)
  },

  { path: '**',
    loadComponent: () =>
      import('./pages/nao-encontrado/nao-encontrado.component').then(m => m.NaoEncontradoComponent)
  }
];

// Configuração dinâmica: localhost (rotas limpas) ou GitHub Pages (hash)
export const router = provideRouter(
  routes,
  ...(environment.useHash ? [withHashLocation()] : [])
);
