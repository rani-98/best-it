from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/add_courses', methods=['POST'])
@cross_origin()
def add_courses():
    try:
        data = request.get_json()
        # Log the received data
        print("Received data: {data}")
        # You can add logic here to save the data or process it
        return data, 200  # Return the received data as JSON with a 200 OK status
    except Exception as e:
        print("Error", e)
        return jsonify({"error": str(e)})  # Return an error message with a 400 Bad Request status



if __name__ == '__main__':
    app.run(debug=True)
