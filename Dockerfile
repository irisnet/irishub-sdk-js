# yarn docs && docker build -t irisnet/docs-irishub-sdk-js .
FROM nginx:1.14-alpine
COPY docs/ /usr/share/nginx/html/