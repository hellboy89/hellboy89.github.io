# Cara ou Coroa

> Com dúvida? Deixa o destino decidir.
> Uma moeda, uma resposta, zero arrependimento.

Aplicação web para jogar cara ou coroa — feita para quem precisa tomar uma decisão rápida e não quer pensar demais. Abre no celular ou no PC, sem instalação, sem cadastro.

---

## Preview

![Cara ou Coroa em ação](images/exemplo_uso.png)

---

## Acesse agora

**[hellboy89.github.io](https://hellboy89.github.io/)**

---

## O que a aplicação faz

- Joga cara ou coroa com resultado **100% aleatório e justo** (50/50 garantido via `crypto.getRandomValues()`)
- Exibe uma **frase motivacional aleatória** a cada jogada para tornar a experiência mais divertida
- Mostra um **placar da sessão** com contagem de Cara, Coroa e Total
- **Barra de progresso** visual mostrando a proporção entre os resultados
- **Histórico visual** das últimas 20 jogadas com ícones coloridos
- **Streak badge** — avisa quando o mesmo resultado sai 3 ou mais vezes seguidas
- Botão **Zerar** para resetar o placar e começar uma nova sessão

---

## Como usar

1. Abra o link no navegador (funciona no celular e no PC)
2. Clique no botão **Jogar** ou diretamente na moeda
3. Também dá pra jogar pelo teclado: pressione **Espaço** ou **Enter**
4. Acompanhe o placar e o histórico logo abaixo

---

## O que foi melhorado

A aplicação começou como um HTML simples com um botão e um texto. Com o tempo evoluiu para uma experiência mais completa:

| Antes | Depois |
|---|---|
| HTML, CSS e JS num único arquivo | Separado em `index.html`, `style.css` e `app.js` |
| Texto simples como resultado | Moeda 3D animada com flip realista |
| Sem histórico | Histórico visual das últimas 20 jogadas |
| Sem placar | Placar da sessão com barra de progresso |
| Sem feedback extra | Frases motivacionais e streak badge |
| Só clique no botão | Clique na moeda + atalho de teclado |

---

## Tecnologias

- HTML5
- CSS3 (animações 3D, variáveis CSS, layout responsivo)
- JavaScript puro (sem frameworks ou dependências)
- Web Crypto API — aleatoriedade criptográfica, não `Math.random()`
- Google Fonts (Poppins)

---

## Compatibilidade

Funciona em qualquer navegador moderno — Chrome, Firefox, Safari, Edge. Otimizado para uso no celular com interface grande e legível.
