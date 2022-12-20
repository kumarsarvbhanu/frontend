function Person(fname, lname, dob) {
    this.first_name = fname;
    this.last_name = lname;
    this.date_of_birth = dob;

    function getFullName() {
        // return this.first_name + " " + this.last_name;
        console.log(this.first_name + " " + this.last_name);
    }

    this.getAge = () => {
        const now = new Date();
        return now.getUTCFullYear() - this.date_of_birth.getUTCFullYear();
    }

    this.setDateOfBirth = (dob) => {
        this.date_of_birth = dob;
    }
}
const zakir = new Person("Zakir", "Hussain", new Date(1996, 12, 15));
console.log(zakir.getAge());

const vikram = new Person("Vikram", "Raj", new Date(2022, 12, 14));
console.log(vikram.getFullName());