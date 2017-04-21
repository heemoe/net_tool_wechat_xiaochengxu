# net_tool_wechat_xiaochengxu

### Glance
![screenshot](http://i.imgur.com/rAqtJ2v.jpg)
### Dependency
    - CentOS 7.x
    - python3.x, flask
    - nginx, uwsgi, supervisord

### IP API
    - ip api : https://freegeoip.net/json/

### install & configuration
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
    return 301 https://$server_name$request_uri;
}
server {
        listen 443 ssl;
        server_name server_domain_or_IP;
        ssl_certificate /etc/letsencrypt/live/example.com/cert.pem;
        ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

        location / {
        include uwsgi_params;
        uwsgi_pass unix:/home/user/myproject/myproject.sock;
    }
}

```
#### run `sh restart_service.sh`