cp src/service/config.js.tmp src/service/config.js
cp api/config.yaml.tmp api/config.yaml
yarn
yarn build
cd dist
cp -r ./**/* /usr/share/nginx/html/
cd ..
cd api
yarn
yarn build
pm2 start server.yml