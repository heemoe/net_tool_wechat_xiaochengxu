#!/usr/bin/python3
from flask import Flask
from flask import jsonify
from flask import request
from flask import abort
import subprocess

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'title': 'Buy groceries',
        'description': 'Milk, Cheese, Pizza, Fruit, Tylenol',
        'done': False
    },
    {
        'id': 2,
        'title': 'Learn Python',
        'description': 'Need to find a good Python tutorial on the web',
        'done': False
    }
]


@app.route('/api/v1.0/nettool/<path:type>/<path:keyword>', methods=['GET'])
def get_net_tool(type, keyword):
    # print(request.args.get('summary'))
    # print(request.args.get('charge'))
    print(type + keyword)
    if type == "dig" or type == "whois" or type == "ping" and keyword:
        value = data_from_type(type, keyword)
        return value
    else:
        abort(400)
    return None


def data_from_type(cmd, kwd):
    value = subprocess.run(['ls'], stdout=subprocess.PIPE).stdout
    print(value)
    return value


if __name__ == '__main__':
    app.run(debug=True)
