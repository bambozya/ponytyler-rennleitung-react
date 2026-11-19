echo "#### Now attempting to Setup Raspberry pi for Rennleitung ####"
cd ~
sudo apt update
sudo apt upgrade
sudo apt remove apache2
sudo apt --assume-yes install vim curl git nginx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22
cd ~
# Cloned into ~/ponytyler-rennleitung: the scripts and the backend expect that folder name.
git clone https://github.com/bambozya/ponytyler-rennleitung-react.git ponytyler-rennleitung
# The UI takes its API types from the backend, so the backend's Prisma client is generated first.
cd ~/ponytyler-rennleitung/be
npm i
npx prisma migrate deploy
npx prisma generate --sql
cd ~/ponytyler-rennleitung/ui/rl-react
npm ci
npm run build
cd ~
sudo cp ponytyler-rennleitung/ui/rl-react/dist/*.* /var/www/html/
sudo chmod a+r /var/www/html/*.*
sudo cp ponytyler-rennleitung/ui/rl-react/nginx_config /etc/nginx/sites-enabled/default
sudo systemctl start nginx
sudo systemctl restart nginx
npm install pm2 -g
pm2 startup
sudo env PATH=$PATH:/home/ponytyler/.nvm/versions/node/v22.13.1/bin /home/ponytyler/.nvm/versions/node/v22.13.1/lib/node_modules/pm2/bin/pm2 startup systemd -u ponytyler --hp /home/ponytyler
cd ~/ponytyler-rennleitung/be
npm i
pm2 start /home/ponytyler/ponytyler-rennleitung/be/dist/main.js
pm2 save

echo "\n\nAll setup. Remember to copy the current rl.db to \n~/ponytyler-rennleitung/be/prisma/rl.db and then restart the pi again.\n\n"
echo "scp rl.db ponytyler@ponytyler.local:~/ponytyler-rennleitung/be/prisma/rl.db"
sudo shutdown -r now
