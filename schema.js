const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Teacher = mongoose.model('teachers', teacherSchema);

const classroomSchema = mongoose.Schema({
    location: {
        type: String,
        required: true
    },
});

const Classroom = mongoose.model('Classrooms', classroomSchema);
const subjectSchema = mongoose.Schema({
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'teachers'
    },
    subname: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
});

const Subject = mongoose.model('subjects', subjectSchema);

const studentSchema = mongoose.Schema({
    stdname: {
        type: String,
        required: true
    },
    subject: {
        type: mongoose.Types.ObjectId,
        ref: 'subjects'
    },
    grade: {
        type: String,
        required: true
    },
});

const Student = mongoose.model('students', studentSchema);


const sectionSchema = mongoose.Schema({
    
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'teachers'
    },
    student: {
        type: mongoose.Types.ObjectId,
        ref: 'students'
    },
    classroom: {
        type: mongoose.Types.ObjectId,
        ref: 'classrooms'
    },
    subject: {
        type: mongoose.Types.ObjectId,
        ref: 'subjects'
    },
    datetim: {
        type: String,
        required: true
    },
    examdate: {
        type: String,
        required: true
    },
});

const Section = mongoose.model('sections', sectionSchema);

module.exports = { Teacher, Subject ,Classroom,Student,Section}