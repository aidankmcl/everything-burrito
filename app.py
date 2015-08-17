import os

from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

if __name__ == '__main__':
	PORT = 5000
	if os.environ.get('DIGIOCEAN'):
		PORT = 80
	app.run(debug=True, port=PORT)