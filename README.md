ng new app-angular --skip-tests --skip-git --style css --no-ssr && cd app-angular && npm install tailwindcss @tailwindcss/postcss postcss --force && npm i -D daisyui@latest && ng g environments && touch .postcssrc.json && code .

cd src/app/ && mkdir components data directives guards interceptors interfaces layouts pages routes services utils

.postcssrc.json

{
"plugins": {
"@tailwindcss/postcss": {}
}

}

styles.css

@import "tailwindcss";
@plugin "daisyui";
