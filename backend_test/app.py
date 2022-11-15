# Import Flask class
import os
from flask import Flask, render_template

template_dir = os.path.dirname(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
template_dir = os.path.join(template_dir, 'client')
template_dir = os.path.join(template_dir, 'public')
# hard coded absolute path for testing purposes

# Create Flask object
app = Flask(__name__, template_folder=template_dir)

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)