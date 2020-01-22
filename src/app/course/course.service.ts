import { Injectable } from "@angular/core";
import { Course } from "./_models/course";

@Injectable()
export class CourseService {
    private ID_LENGTH = 10;
    private courseList: Map<string, Course>;
    constructor() {
        this.courseList = new Map();
        this.loadCourses();
    }

    getList(): Course[] {
        const courseIds = [...this.courseList.keys()];
        return courseIds.map(courseId => this.courseList.get(courseId));
    }

    createCourse(course) {
        const newCourseId = this.generateId();
        this.courseList.set(newCourseId, { id: newCourseId, ...course });
    }

    getItemById(courseId) {
        return this.courseList.get(courseId);
    }

    updateItem(id, updatedCourse) {
        this.courseList.set(id, updatedCourse);
    }

    removeItem(id) {
        this.courseList.delete(id);
    }

    loadCourses() {
        const courses = [
            {
                title: "Intro to Angular",
                creationDate: new Date("11-08-2019"),
                duration: 126,
                description: "A Brief introduction to Angular",
                authors: ["Sai"]
            },
            {
                title: "Angular Advanced",
                creationDate: new Date("11-09-2019"),
                duration: 128,
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                authors: []
            },
            {
                title: "Structural and Creational Patterns in JS",
                creationDate: new Date("08-11-2019"),
                duration: 150,
                description: "A complete explaination of structural and creational patterns for JS",
                authors: []
            },
            {
                title: "Behavioural Pattern in JS",
                creationDate: new Date("11-18-2019"),
                duration: 90,
                description: "A complete explaination of behavioural patterns for JS",
                authors: []
            }
        ];

        courses.forEach(course => this.createCourse(course));
    }

    private generateId() {
        const id = [];
        for (let i = 0; i < this.ID_LENGTH; i++) {
            id.push(String.fromCharCode(Math.floor((Math.random() * 100) % 25) + 65));
        }
        return id.join("");
    }
}
