const mongoose = require('mongoose')
const faker = require('faker')
const { Teacher, Subject ,Classroom, Student, Section} = require('./schema')

mongoose.connect('mongodb://localhost:27017/mongodb', {
    useNewUrlParser: true,
});

for (let i = 0; i < 10000; i++) {
    const teacher = new Teacher({
        name: faker.name.findName(),
 
    })
    const classroom = new Classroom({
        location: faker.random.arrayElement(['81','83','84']),
    })
    classroom.save()
    
    teacher.save()

    const subject = new Subject({
        teacher: teacher._id,
        subname: faker.random.arrayElement(['database','embed','lab network','oral']),
        unit: faker.random.arrayElement(['1','3']),
        })

    subject.save()
    

    const student = new Student({
        stdname: faker.name.findName(),
        subject: subject._id,
        term: faker.random.arrayElement({'min':1,'max':8}),
        grade: faker.random.arrayElement(['1','3'])
    })
    student.save()

    
        const section = new Section({
            teacher: teacher._id,
            student: student._id,
            classroom: classroom._id,
            subject: Subject._id,
            datetim: faker.random.arrayElement(['M 9.00-12.00','T 9.00-12.00','W 9.00-12.00','Th 9.00-12.00','F 9.00-12.00','M 13.00-17.00','T13.00-17.00','W13.00-17.00','Th13.00-17.00','F13.00-17.00']),
            examdate: faker.random.arrayElement(['1/5/65','3/5/65'])
        })

        section.save()
    
  
    
}
