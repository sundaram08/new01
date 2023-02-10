var user = {
    Fname:"Ashok",
    Lname:"Dinda",
    role:"Admin",
    CourseList:[],
    buycourse: function (coursename) {
       this.CourseList.push(coursename);
    },
    getCourseCount: function () {
        return `${this.Fname} is enrolled in ${this.CourseList.length} courses `
    }
};
console.log(user.Fname);
console.log(user["Fname"]);
user.logincount=56;
console.log(user.logincount);
// console.log(user.buycourse);
console.log(user.getCourseCount());
console.log(user.buycourse("java"));
console.log(user.getCourseCount());
