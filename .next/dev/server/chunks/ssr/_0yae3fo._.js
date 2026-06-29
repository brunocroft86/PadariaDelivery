module.exports = [
"[project]/src/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/app/admin/page.tsx
"use client";
;
;
function AdminPanel() {
    const [produtos, setProdutos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            nome: 'Pão Francês',
            preco: 0.50
        }
    ]);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dadosSalvos = localStorage.getItem('cardapioPadariaReal');
        if (dadosSalvos) setProdutos(JSON.parse(dadosSalvos));
    }, []);
    const salvarCardapio = ()=>{
        // VALIDAÇÃO ANTES DE SALVAR
        for (let produto of produtos){
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
    const adicionarProduto = ()=>{
        const novoId = produtos.length > 0 ? Math.max(...produtos.map((p)=>p.id)) + 1 : 1;
        setProdutos([
            ...produtos,
            {
                id: novoId,
                nome: '',
                preco: 0
            }
        ]);
    };
    const removerProduto = (id)=>{
        setProdutos(produtos.filter((p)=>p.id !== id));
    };
    const atualizarNome = (id, valor)=>{
        setProdutos(produtos.map((p)=>p.id === id ? {
                ...p,
                nome: valor
            } : p));
    };
    const atualizarPreco = (id, valorDigitado)=>{
        const apenasNumeros = valorDigitado.replace(/\D/g, '');
        const valorDecimal = Number(apenasNumeros) / 100;
        setProdutos(produtos.map((p)=>p.id === id ? {
                ...p,
                preco: valorDecimal
            } : p));
    };
    const corFundoFundo = isDark ? '#121212' : '#f4f4f4';
    const corFundoCard = isDark ? '#1e1e1e' : '#ffffff';
    const corTextoPrincipal = isDark ? '#ffffff' : '#333333';
    const corTextoSecundario = isDark ? '#aaaaaa' : '#666666';
    const corBorda = isDark ? '#333333' : '#eee';
    const corInputBg = isDark ? '#2d2d2d' : '#ffffff';
    const corInputBorda = isDark ? '#444444' : '#ccc';
    const corPrecoBg = isDark ? '#2a2a2a' : '#eee';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            padding: '20px',
            fontFamily: 'sans-serif',
            backgroundColor: corFundoFundo,
            minHeight: '100vh',
            transition: 'background-color 0.3s ease'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '600px',
                    margin: '0 auto 15px auto',
                    display: 'flex',
                    justifyContent: 'flex-end'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsDark(!isDark),
                    style: {
                        padding: '8px 12px',
                        borderRadius: '20px',
                        border: '1px solid ' + corInputBorda,
                        backgroundColor: corFundoCard,
                        color: corTextoPrincipal,
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    },
                    children: isDark ? '☀️ Tema Claro' : '🌙 Tema Escuro'
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '600px',
                    margin: '0 auto',
                    backgroundColor: corFundoCard,
                    padding: '20px',
                    borderRadius: '10px',
                    border: '1px solid ' + corBorda,
                    transition: 'background-color 0.3s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            color: '#b30000',
                            borderBottom: '2px solid ' + corBorda,
                            paddingBottom: '10px',
                            margin: '0 0 10px 0'
                        },
                        children: "⚙️ Painel de Gestão - Padaria Real"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: corTextoSecundario,
                            marginBottom: '20px'
                        },
                        children: "Adicione, edite ou remova os produtos do seu cardápio."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    produtos.map((produto)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px',
                                marginBottom: '15px',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: produto.nome,
                                    placeholder: "Nome do produto",
                                    onChange: (e)=>atualizarNome(produto.id, e.target.value),
                                    style: {
                                        flex: 2,
                                        padding: '10px',
                                        borderRadius: '5px',
                                        border: '1px solid ' + corInputBorda,
                                        backgroundColor: corInputBg,
                                        color: corTextoPrincipal
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        flex: 1,
                                        backgroundColor: corPrecoBg,
                                        borderRadius: '5px',
                                        padding: '0 10px',
                                        border: '1px solid ' + corInputBorda
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: corTextoSecundario,
                                                fontWeight: 'bold',
                                                marginRight: '5px'
                                            },
                                            children: "R$"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: produto.preco.toLocaleString('pt-BR', {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            }),
                                            onChange: (e)=>atualizarPreco(produto.id, e.target.value),
                                            style: {
                                                width: '100%',
                                                padding: '10px',
                                                border: 'none',
                                                backgroundColor: 'transparent',
                                                outline: 'none',
                                                color: corTextoPrincipal
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>removerProduto(produto.id),
                                    style: {
                                        backgroundColor: '#ff4d4d',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 15px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                    },
                                    children: "X"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, produto.id, true, {
                            fileName: "[project]/src/app/admin/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: adicionarProduto,
                        style: {
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#ffd700',
                            color: '#b30000',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            marginTop: '10px'
                        },
                        children: "+ Adicionar Novo Produto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: salvarCardapio,
                        style: {
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#25D366',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            marginTop: '10px'
                        },
                        children: "💾 Salvar Alterações no Cardápio"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0yae3fo._.js.map