// src/app/admin/page.tsx
"use client";

import { useState, useEffect } from 'react';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

export default function AdminPanel() {
  const [produtos, setProdutos] = useState<Produto[]>([
    { id: 1, nome: 'Pão Francês', preco: 0.50 }
  ]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('cardapioPadariaReal');
    if (dadosSalvos) setProdutos(JSON.parse(dadosSalvos));
  }, []);

  const salvarCardapio = () => {
    // VALIDAÇÃO ANTES DE SALVAR
    for (let produto of produtos) {
      if (!produto.nome.trim()) {
        alert('⚠️ Ops! Todos os produtos precisam ter um nome preenchido.');
        return; // Interrompe o salvamento
      }
      if (produto.preco <= 0) {
        alert(`⚠️ O produto "${produto.nome}" não pode custar R$ 0,00.`);
        return; // Interrompe o salvamento
      }
    }

    // Se passou pelas travas, salva!
    localStorage.setItem('cardapioPadariaReal', JSON.stringify(produtos));
    alert('✅ Cardápio salvo com sucesso!');
  };

  const adicionarProduto = () => {
    const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
    setProdutos([...produtos, { id: novoId, nome: '', preco: 0 }]);
  };

  const removerProduto = (id: number) => {
    setProdutos(produtos.filter((p) => p.id !== id));
  };

  const atualizarNome = (id: number, valor: string) => {
    setProdutos(produtos.map((p) => p.id === id ? { ...p, nome: valor } : p));
  };

  const atualizarPreco = (id: number, valorDigitado: string) => {
    const apenasNumeros = valorDigitado.replace(/\D/g, '');
    const valorDecimal = Number(apenasNumeros) / 100;
    setProdutos(produtos.map((p) => p.id === id ? { ...p, preco: valorDecimal } : p));
  };

  const corFundoFundo = isDark ? '#121212' : '#f4f4f4';
  const corFundoCard = isDark ? '#1e1e1e' : '#ffffff';
  const corTextoPrincipal = isDark ? '#ffffff' : '#333333';
  const corTextoSecundario = isDark ? '#aaaaaa' : '#666666';
  const corBorda = isDark ? '#333333' : '#eee';
  const corInputBg = isDark ? '#2d2d2d' : '#ffffff';
  const corInputBorda = isDark ? '#444444' : '#ccc';
  const corPrecoBg = isDark ? '#2a2a2a' : '#eee';

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: corFundoFundo, minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      
      <div style={{ maxWidth: '600px', margin: '0 auto 15px auto', display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={() => setIsDark(!isDark)} style={{ padding: '8px 12px', borderRadius: '20px', border: '1px solid ' + corInputBorda, backgroundColor: corFundoCard, color: corTextoPrincipal, cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
          {isDark ? '☀️ Tema Claro' : '🌙 Tema Escuro'}
        </button>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: corFundoCard, padding: '20px', borderRadius: '10px', border: '1px solid ' + corBorda, transition: 'background-color 0.3s ease' }}>
        
        <h1 style={{ color: '#b30000', borderBottom: '2px solid ' + corBorda, paddingBottom: '10px', margin: '0 0 10px 0' }}>⚙️ Painel de Gestão - Padaria Real</h1>
        <p style={{ color: corTextoSecundario, marginBottom: '20px' }}>Adicione, edite ou remova os produtos do seu cardápio.</p>

        {produtos.map((produto) => (
          <div key={produto.id} style={{ display: 'flex', gap: '10px', marginBottom: '15px', alignItems: 'center' }}>
            <input type="text" value={produto.nome} placeholder="Nome do produto" onChange={(e) => atualizarNome(produto.id, e.target.value)} style={{ flex: 2, padding: '10px', borderRadius: '5px', border: '1px solid ' + corInputBorda, backgroundColor: corInputBg, color: corTextoPrincipal }} />
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, backgroundColor: corPrecoBg, borderRadius: '5px', padding: '0 10px', border: '1px solid ' + corInputBorda }}>
              <span style={{ color: corTextoSecundario, fontWeight: 'bold', marginRight: '5px' }}>R$</span>
              <input type="text" value={produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} onChange={(e) => atualizarPreco(produto.id, e.target.value)} style={{ width: '100%', padding: '10px', border: 'none', backgroundColor: 'transparent', outline: 'none', color: corTextoPrincipal }} />
            </div>
            <button onClick={() => removerProduto(produto.id)} style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>X</button>
          </div>
        ))}

        <button onClick={adicionarProduto} style={{ width: '100%', padding: '12px', backgroundColor: '#ffd700', color: '#b30000', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>+ Adicionar Novo Produto</button>
        <button onClick={salvarCardapio} style={{ width: '100%', padding: '12px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>💾 Salvar Alterações no Cardápio</button>

      </div>
    </main>
  );
}