# Import Flask class
from flask import Flask


# Create Flask object
app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return "HOME"