#!/usr/bin/sh
killall supervisord
supervisord -c /etc/supervisord.d/nettool.ini
service nginx restart
nginx.service