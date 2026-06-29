// src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';

interface Produto { id: number; nome: string; preco: number; }
interface ItemCarrinho extends Produto { qtd: number; }

export default function Home() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const taxaFixa = 3.00;
  const [isDark, setIsDark] = useState(false);
  const [nomeCliente, setNomeCliente] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  
  const [formaPagamento, setFormaPagamento] = useState('Pix');
  const [trocoPara, setTrocoPara] = useState('');

  // CORREÇÃO LOGICAL: Carrega o cardápio padrão caso o celular não tenha dados salvos
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('cardapioPadariaReal');
    
    let produtosDoBanco: Produto[] = [];
    
    if (dadosSalvos) {
      produtosDoBanco = JSON.parse(dadosSalvos);
    } else {
      // Itens padrão que vão aparecer no celular logo de cara antes do dono salvar algo
      produtosDoBanco = [
        { id: 1, nome: 'Pão Francês', preco: 0.50 },
        { id: 2, nome: 'Pão Doce', preco: 1.20 },
        { id: 3, nome: 'Pão Suíço', preco: 1.50 }
      ];
    }

    setCarrinho(produtosDoBanco.map((p: Produto) => ({ ...p, qtd: 0 })));
  }, []);

  const alterarQuantidade = (id: number, operacao: 'somar' | 'subtrair') => {
    setCarrinho(carrinho.map(item => {
      if (item.id === id) {
        let novaQtd = operacao === 'somar' ? item.qtd + 1 : item.qtd - 1;
        return { ...item, qtd: novaQtd < 0 ? 0 : novaQtd };
      }
      return item;
    }));
  };

  const subtotal = carrinho.reduce((soma, item) => soma + (item.preco * item.qtd), 0);
  const total = subtotal > 0 ? subtotal + taxaFixa : 0;

  const enviarPedidoWhatsApp = () => {
    if (subtotal === 0) return alert("Por favor, adicione itens ao carrinho.");
    if (!nomeCliente.trim() || !endereco.trim() || !bairro.trim()) return alert("Preencha seu Nome e Endereço.");
    
    if (formaPagamento === 'Dinheiro' && trocoPara) {
        const valorTroco = Number(trocoPara.replace(',', '.'));
        if (valorTroco < total) return alert("O valor do troco não pode ser menor que o total do pedido.");
    }

    const numeroPadaria = "5521969284982";
    
    let textoMensagem = `🥖 *NOVO PEDIDO - PADARIA REAL* 🥖\n\n` +
                        `👤 *Cliente:* ${nomeCliente}\n` +
                        `📍 *Endereço:* ${endereco}\n` +
                        `🏡 *Bairro:* ${bairro}\n\n` +
                        `🛒 *ITENS:*\n`;
    
    carrinho.filter(item => item.qtd > 0).forEach(item => {
      textoMensagem += `• ${item.nome}: ${item.qtd}x (R$ ${(item.preco * item.qtd).toFixed(2)})\n`;
    });

    textoMensagem += `\n🛵 *Taxa de Entrega:* R$ ${taxaFixa.toFixed(2)}\n`;
    textoMensagem += `----------------------\n`;
    textoMensagem += `💰 *Total a pagar:* R$ ${total.toFixed(2)}\n\n`;

    textoMensagem += `💳 *Forma de Pagamento:* ${formaPagamento}\n`;
    if (formaPagamento === 'Dinheiro') {
        textoMensagem += trocoPara ? `💵 *Troco para:* R$ ${trocoPara}\n` : `💵 *Troco:* Não precisa\n`;
    }

    const url = `https://wa.me/${numeroPadaria}?text=${encodeURIComponent(textoMensagem)}`;
    window.open(url, '_blank');
  };

  const corFundoFundo = isDark ? '#121212' : '#f9f9f9';
  const corFundoCard = isDark ? '#1e1e1e' : '#ffffff';
  const corTextoPrincipal = isDark ? '#ffffff' : '#333333';
  const corTextoSecundario = isDark ? '#aaaaaa' : '#666666';
  const corBorda = isDark ? '#333333' : '#f0f0f0';
  const corInputBg = isDark ? '#2d2d2d' : '#ffffff';
  const corInputBorda = isDark ? '#444444' : '#cccccc';

  return (
    <main style={{ minHeight: '100vh', backgroundColor: corFundoFundo, fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', transition: 'background-color 0.3s ease' }}>
      
      <div style={{ width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
        <button onClick={() => setIsDark(!isDark)} style={{ padding: '6px 10px', borderRadius: '15px', border: '1px solid ' + corInputBorda, backgroundColor: corFundoCard, color: corTextoPrincipal, cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
          {isDark ? '☀️ Claro' : '🌙 Escuro'}
        </button>
      </div>
      
      <div style={{ backgroundColor: '#b30000', color: '#ffd700', width: '100%', maxWidth: '400px', padding: '12px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '20px' }}>🥖 Padaria Real</h1>
        <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#fff' }}>Delivery Rápido</p>
      </div>

      <div style={{ backgroundColor: corFundoCard, width: '100%', maxWidth: '400px', marginTop: '12px', padding: '15px', borderRadius: '10px', border: '1px solid ' + corBorda }}>
        <h2 style={{ fontSize: '16px', color: corTextoPrincipal, margin: '0 0 10px 0', borderBottom: '1px solid ' + corBorda, paddingBottom: '5px' }}>📍 Dados da Entrega</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <input type="text" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} placeholder="Seu Nome" style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid ' + corInputBorda, backgroundColor: corInputBg, color: corTextoPrincipal, boxSizing: 'border-box', fontSize: '14px' }} />
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Rua e Nº" style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid ' + corInputBorda, backgroundColor: corInputBg, color: corTextoPrincipal, boxSizing: 'border-box', fontSize: '14px' }} />
          <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder="Bairro" style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid ' + corInputBorda, backgroundColor: corInputBg, color: corTextoPrincipal, boxSizing: 'border-box', fontSize: '14px' }} />
        </div>
      </div>

      <div style={{ backgroundColor: corFundoCard, width: '100%', maxWidth: '400px', marginTop: '12px', padding: '15px', borderRadius: '10px', border: '1px solid ' + corBorda }}>
        <h2 style={{ fontSize: '16px', color: corTextoPrincipal, margin: '0 0 10px 0', borderBottom: '1px solid ' + corBorda, paddingBottom: '5px' }}>🛒 Seu Pedido</h2>
        {carrinho.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid ' + corBorda }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: '15px', color: corTextoPrincipal, fontWeight: 'bold' }}>{item.nome}</p>
              <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#b30000', fontWeight: 'bold' }}>R$ {item.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button onClick={() => alterarQuantidade(item.id, 'subtrair')} style={{ width: '30px', height: '30px', fontSize: '18px', border: 'none', borderRadius: '6px', backgroundColor: isDark ? '#333' : '#eee', color: corTextoPrincipal, cursor: 'pointer' }}>-</button>
              <span style={{ fontSize: '16px', fontWeight: 'bold', width: '20px', textAlign: 'center', color: corTextoPrincipal }}>{item.qtd}</span>
              <button onClick={() => alterarQuantidade(item.id, 'somar')} style={{ width: '30px', height: '30px', fontSize: '18px', border: 'none', borderRadius: '6px', backgroundColor: isDark ? '#333' : '#eee', color: corTextoPrincipal, cursor: 'pointer' }}>+</button>
            </div>
          </div>
        ))}

        <div style={{ paddingTop: '5px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', color: corTextoSecundario, fontSize: '14px' }}><span>Subtotal:</span><span>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: corTextoSecundario, fontSize: '14px' }}><span>Taxa de entrega:</span><span>R$ {subtotal > 0 ? taxaFixa.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '0,00'}</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold', color: corTextoPrincipal }}><span>Total:</span><span>R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span></div>
        </div>
      </div>
      
      <div style={{ backgroundColor: corFundoCard, width: '100%', maxWidth: '400px', marginTop: '12px', padding: '15px', borderRadius: '10px', border: '1px solid ' + corBorda }}>
        <h2 style={{ fontSize: '16px', color: corTextoPrincipal, margin: '0 0 10px 0', borderBottom: '1px solid ' + corBorda, paddingBottom: '5px' }}>💳 Pagamento</h2>
        
        <select 
          value={formaPagamento} 
          onChange={(e) => setFormaPagamento(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid ' + corInputBorda, backgroundColor: corInputBg, color: corTextoPrincipal, fontSize: '14px' }}
        >
          <option value="Pix">Pix</option>
          <option value="Cartão de Crédito (Maquininha)">Cartão de Crédito (Máquina)</option>
          <option value="Cartão de Débito (Maquininha)">Cartão de Débito (Máquina)</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>

        {formaPagamento === 'Dinheiro' && (
          <div style={{ marginTop: '10px' }}>
            <label style={{ fontSize: '13px', color: corTextoSecundario, display: 'block', marginBottom: '4px' }}>Troco para quanto?</label>
            <input 
              type="number" 
              value={trocoPara} 
              onChange={(e) => setTrocoPara(e.target.value)} 
              placeholder="Ex: 50" 
              style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid ' + corInputBorda, backgroundColor: corInputBg, color: corTextoPrincipal, boxSizing: 'border-box', fontSize: '14px' }} 
            />
          </div>
        )}
      </div>

      <button onClick={enviarPedidoWhatsApp} style={{ width: '100%', maxWidth: '400px', margin: '15px 0', padding: '12px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(37, 211, 102, 0.3)' }}>
        Enviar Pedido (WhatsApp)
      </button>

    </main>
  );
}