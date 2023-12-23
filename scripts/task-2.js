
const student = {
    subjects: [],

    addSubject(subject){
        if(this.isSubjectExixts(subject)){
            return;
        }
        
        this.subjects.push(subject);
    },

    removeSubject(subject){
        if(!this.isSubjectExixts(subject)){
            return;
        }

        const subjectIndex = this.subjects.findIndex(x=> x === subject);

        if(subjectIndex === -1){
            return;
        }

        this.subjects.splice(subjectIndex,subjectIndex+1);
    },

    isSubjectExists(subject){
        return this.subjects.includes(subject);
    }
};

// Дані для перевірки:
student.addSubject("Математика"); // Предмет Математика додано.
student.addSubject("Історія"); // Предмет Історія додано.
student.addSubject("Математика"); // Ви вже вивчаєте предмет Математика.
console.log(student.subjects); // ["Математика", "Історія"]
student.removeSubject("Історія"); // Предмет Історія видалено.
console.log(student.subjects); // ["Математика"]
student.removeSubject("Англійська"); // Ви не вивчаєте предмет Англійська.
