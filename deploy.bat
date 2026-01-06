@echo off
echo 🚀 Limpando pasta docs...
rmdir /S /Q docs
mkdir docs

echo 🔨 Gerando build de produção...
ng build --configuration production --output-path docs --base-href /ecommerce-githubpages/

echo 📄 Criando fallback 404.html a partir do index.html...
copy docs\index.html docs\404.html

echo 🚫 Criando arquivo .nojekyll...
echo. > docs\.nojekyll

echo 📂 Adicionando todas as mudanças ao Git...
git add -A

echo 💾 Criando commit...
git commit -m "Deploy com fallback 404.html e .nojekyll"

echo ⬆️ Enviando para GitHub...
git push origin main

echo 🌟 Deploy finalizado! Teste rotas como /produto/5 ou /carrinho no GitHub Pages.
pause
