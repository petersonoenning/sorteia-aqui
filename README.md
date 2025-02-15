# 🎱 Sorteador de Números

O **Sorteador de Números** é um aplicativo simples desenvolvido em **React Native com Expo**, permitindo que o usuário sorteie números aleatórios dentro de um intervalo de 1 a 75, sem repetições. O número sorteado é exibido na tela.

---

## 🚀 Funcionalidades

✅ Sorteio de números aleatórios entre 1 e 75.
✅ Evita a repetição de números já sorteados.
✅ Feedback visual com indicador de carregamento.
✅ Interface responsiva e intuitiva.

---

## 📸 Capturas de Tela

![image](https://github.com/user-attachments/assets/18d2c1b0-99e0-42dc-a795-d170df2762de)


---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo**
- **Hooks (useState, useEffect)**
- **Styled Components (para estilização modular)**

---

## 📦 Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/petersonoenning/sorteia-aqui.git
   cd sorteia-aqu
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Execute o projeto:**
   ```sh
   npx expo start
   ```

---

## 📜 Como Usar

1. **Abra o aplicativo**.
2. **Pressione o botão "Sortear Número"** para iniciar o sorteio.
3. **O número sorteado será exibido no centro da tela.**
4. **Números já sorteados não serão repetidos.**

---

## 🏗️ Estrutura do Projeto

```
SorteadorNumeros/
│-- src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── NumeroSorteado.jsx   # Exibe o número sorteado
│   ├── screens/           # Telas do aplicativo
│   │   ├── SorteadorScreen.jsx  # Tela principal do sorteio de números
│   ├── styles/            # Pasta contendo os arquivos de estilos
│   │   ├── styles.js      # Estilos globais do app
│-- App.js                 # Arquivo principal do app
│-- package.json           # Dependências e scripts
│-- README.md              # Documentação do projeto
```
---

Desenvolvido com ❤️ por [Peterson Oenning](https://github.com/petersonoenning).
