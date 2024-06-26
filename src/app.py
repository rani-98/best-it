from flask import Flask, make_response, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config["SECRET_KEY"] = "your-secret-key"

courses = [
    {
        "id": 1,
        "course_name": "python full stack",
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

@app.route("/courses/<int:rid>", methods=["GET", "OPTIONS"])
def get_courses_id(rid):
    if request.method == "OPTIONS":
        return jsonify({"message": "Preflight request successful"})

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

@app.route("/courses/<int:rid>", methods=["DELETE", "OPTIONS"])
def delete_course(rid):
    if request.method == "OPTIONS":
        return jsonify({"message": "Preflight request successful"})

    global courses
    courses = [course for course in courses if course["id"] != rid]
    return jsonify({"message": "course deleted successfully"})

students = [
    {
        "id": 1,
        "student_name": "ravi",
        "mobile": "6798098754",
        "email": "ravi@gmail.com",
        "location": "hyderabad",
        "course_name": "python",
    },
    {
       "id": 2,
        "student_name": "geetha",
        "mobile": "8989898654",
        "email": "geetha123@gmail.com",
        "location": "guntur",
        "course_name": "java full stack",
    },
]

@app.route("/student", methods=["GET"])
def get_student():
    return jsonify({"students": students})

@app.route("/student/<int:rid>", methods=["GET", "OPTIONS"])
def get_student_id(rid):
    if request.method == "OPTIONS":
        return jsonify({"message": "Preflight request successful"})

    student = next((student for student in students if student["id"] == rid), None)
    if student:
        return jsonify(student)
    return jsonify({"error": "student details not found"}), 404

@app.route("/add_student", methods=["POST", "OPTIONS"])
def add_student():
    try:
        if request.method == "OPTIONS":
            return jsonify({"message": "Preflight request successful"})

        data = request.get_json()  # Assuming the data is sent as JSON
        student_name = data.get("student_name")
        mobile = data.get("mobile")
        email = data.get("email")
        location = data.get("location")
        course_name = data.get("course_name")

        student = {
            "id": len(students) + 1,
            "student_name": student_name,
            "mobile": mobile,
            "email": email,
            "location": location,
            "course_name": course_name,
        }

        students.append(student)
        return jsonify({"message": "new student added successfully"})
    except Exception as e:
        return jsonify({"error": str(e), "method": request.method, "contentType": request.content_type}), 500

@app.route("/student/<int:rid>", methods=["DELETE", "OPTIONS"])
def delete_student(rid):
    if request.method == "OPTIONS":
        return jsonify({"message": "Preflight request successful"})

    global students
    students = [student for student in students if student["id"] != rid]
    return jsonify({"message": "student deleted successfully"})

if __name__ == "__main__":
    app.run(debug=True)
