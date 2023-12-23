
function Student(name, surname){
    this.name = name;
    this.surname =  surname;
    this.subjects = {};
};

Student.prototype.addSubject = function(subjectName, ...assessment){

    if(!this.subjects.hasOwnProperty(subjectName)){
        this.subjects[subjectName] = [];
    }

    this.addAssessments(subjectName, assessment);
};

Student.prototype.addAssessments = function(subjectName, assessments){

    for(assessment of assessments){
        if(typeof assessment === 'number'){
            this.subjects[subjectName].push(assessment);
        }

        else if(Array.isArray(assessment)){
            this.addAssessments(subjectName, assessment);
        }
    }
}

Student.prototype.removeSubject = function(subjectName){
    delete this.subjects[subjectName];
};

Student.prototype.removeAssessments = function(subjectName, ...assessmentsIndex){

    let assessments = assessmentsIndex.sort((a,b)=>b-a);
    
    for (assessment of assessments) {
        if(assessment < 0) continue;
        this.subjects[subjectName].splice(assessment,1);
    }
};

Student.prototype.avgSubjecеAssessments = function(...subjects){
    let assessments;
    let result = [];

    if(subjects.length == 0){
        subjects = Object.keys(this.subjects);
    }

    for(subject of subjects){
        assessments = this.subjects[subject];
        
        if(assessments === undefined){
            continue;
        }
    
        result.push(({Subject: subject.replace("\'", ""), Avg_assessment:assessments.reduce((a,b)=>a+b, 0)/assessments.length}));
        
        assessments = undefined;
    }

    return result;
};

const student = new Student("name_1", "surname_1");

student.addSubject("Math", 12,10,9,11,10);
student.addSubject("Math", [4,12,9,6,3,10]);

student.addSubject("Informatic", 9,10,10,11,10);
student.addSubject("Geography", 1,2,3,4,5);

console.table(student.avgSubjecеAssessments("Math"));
console.table(student.avgSubjecеAssessments("Informatic", "Geography"));
console.table(student.subjects);


student.removeAssessments("Geography",0,3,2);
console.table(student.subjects);

student.removeSubject("Geography");
console.table(student.subjects);