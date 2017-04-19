# net_tool_wechat_xiaochengxu


ip api : http://ip-api.com/

#### supervisord file :/etc/supervisord.d/nettool.ini
```
[supervisord]
[program:nettool]
command=uwsgi uwsgi_config.ini
directory=/home/www/source
user=root

autostart=true
autorestart=true
```

#### you may need to comment 'server' block in /etc/nginx/nginx.conf
#### niginx configuration file : /etc/nginx/conf.d/nettool.conf
```
server {
    listen 80;
    server_name server_domain_or_IP;

    location / {
        include uwsgi_params;
        uwsgi_pass unix:/home/user/myproject/myproject.sock;
    }
}
```

#### run `sh restart_service.sh`