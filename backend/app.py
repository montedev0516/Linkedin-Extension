from flask import Flask, request, jsonify
import json
app = Flask(__name__)

@app.route('/save', methods=['POST'])
def query():
    if request.method == "POST":
        res = request.get_json()

        with open('profiles.json', 'r') as f:
            data = json.load(f)

        data.extend(res)

        with open('profiles.json', 'w') as f:
            json.dump(data, f)

        return jsonify({"success": "true"})

if __name__ == '__main__':
    app.run(debug=True)