#Criterio1 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio2 — Mínimo 5 componentes funcionais
Incorreto
Nota: 0,00

#Criterio3 — useState para gerenciar estado
Incorreto
Nota: 0,00

#Criterio4 — useEffect para efeitos colaterais
Incorreto
Nota: 0,00

#Criterio5 — Next Router com navegação entre páginas
Incorreto
Nota: 0,00

#Criterio6 — Props passadas entre componentes
Incorreto
Nota: 0,00

#Criterio7 — Formulário funcional para criar anotações
Incorreto
Nota: 0,00

#Criterio8 — Lista de anotações com ver detalhes e excluir
Incorreto
Nota: 0,00

#Criterio9 — Comentários no código (useState, useEffect, eventos)
Incorreto
Nota: 0,00

#Criterio10 — Data/hora automática em cada anotação
Incorreto
Nota: 0,00

Subtotal: 1,00

Penalizações:
- Nenhuma

Total final: 1,00

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**Critério 1 — Mínimo 8 commits na main:** 11 commits no branch main. Correto.

**Critério 2 — Mínimo 5 componentes funcionais:** Apenas `header.tsx` e `notation.tsx` na pasta de componentes (2 components). Abaixo do mínimo de 5. Incorreto.

**Critério 3 — useState para gerenciar estado:** `notation.tsx` não usa `useState` — apenas renderiza um formulário estático sem estado. Sem `"use client"`. Incorreto.

**Critério 4 — useEffect para efeitos colaterais:** Nenhum `useEffect`. Incorreto.

**Critério 5 — Next Router com navegação entre páginas:** O arquivo `app/pages/notes.tsx` existe mas está vazio (0b) e colocado em caminho errado (`app/pages/`). Nenhuma rota dinâmica `/notes/[id]` implementada. Incorreto.

**Critério 6 — Props passadas entre componentes:** `header.tsx` e `notation.tsx` não recebem props funcionais. Incorreto.

**Critério 7 — Formulário funcional para criar anotações:** `notation.tsx` renderiza campos HTML estáticos sem nenhum estado ou handler. Incorreto.

**Critério 8 — Lista de anotações com ver detalhes e excluir:** Nenhuma lista implementada. Incorreto.

**Critério 9 — Comentários no código:** Nenhum comentário sobre useState, useEffect ou eventos. Incorreto.

**Critério 10 — Data/hora automática em cada anotação:** Nenhum objeto de anotação criado. Incorreto.

## CONTEXTO GIT
```
Repositório: https://github.com/BrThiagoN/checkpoint-4-webdev-1ESPV
Branch principal: main
Total de commits: 11

git shortlog -sn HEAD:
    11  Laboratório FIAP <labsfiap@fiap.com.br>
```
