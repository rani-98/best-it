from flask import Flask, make_response, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config["SECRET_KEY"] = "your-secret-key"

courses = [
    {
        "id": 1,
        "course_name": "python",
        "course_price": "22000",
        "course_duration": 6,
    },
    {
        "id": 2,
        "course_name": "java",
        "course_price": "25000",
        "course_duration": 8,
    },
]

@app.route("/courses", methods=["GET"])
def get_courses():
    return jsonify({"courses": courses})

@app.route("/courses/<int:rid>", methods=["GET"])
def get_courses_id(rid):
    course = next((course for course in courses if course["id"] == rid), None)
    if course:
        return jsonify(course)
    return jsonify({"error": "course not found"}), 404

@app.route("/add_course", methods=["POST", "OPTIONS"])
def add_course():
    try:
        if request.method == "OPTIONS":
            return jsonify({"message": "Preflight request successful"})

        data = request.get_json()  # Assuming the data is sent as JSON
        course_name = data.get("course_name")
        course_price = data.get("course_price")
        course_duration = data.get("course_duration")

        course = {
            "id": len(courses) + 1,
            "course_name": course_name,
            "course_price": course_price,
            "course_duration": course_duration,
        }

        courses.append(course)
        return jsonify({"message": "course added successfully"})
    except Exception as e:
        return jsonify({"error": str(e), "method": request.method, "contentType": request.content_type}), 500

@app.route("/courses/<int:rid>", methods=["DELETE"])
def delete_course(rid):
    global courses
    courses = [course for course in courses if course["id"] != rid]
    return jsonify({"message": "course deleted successfully"})

if __name__ == "__main__":
    app.run(debug=True)
