//var allAddresses = [];
//var personAddresses = [];
//var bizAddresses = [];

var m = new Model();
var c = new Controller(m);
var v = new View(c);

function Entity(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;

}

function Person(firstName, lastName, email, phone) {
    Entity.call(this, firstName, lastName, email, phone);
}

function Business(firstName, lastName, email, phone, bizName, website) {
    Entity.call(this, firstName, lastName, email, phone);
    this.bizName = bizName;
    this.website = website;
}

function Model() {
    this.personAddresses = [];
    this.bizAddresses = [];
}

function Controller(model) { //will draw from the entity/person/business. Will also execute searches and stuff. Searches will be two for loops to look through the arrays in model.
    this.createPerson = function (firstName, lastName, email, phone) {
        model.personAddresses.push(new Person(firstName, lastName, email, phone));
    }
    this.getPersonAddress = function () {
        return model.personAddresses;
    }
    this.createBiz = function (firstName, lastName, email, phone, bizName, website) {
        model.bizAddresses.push(new Business(firstName, lastName, email, phone, bizName, website));
    }
    this.getBizAddress = function () {
            return model.bizAddresses;
        }
        //   this.search = function (name) {
        //       for (var i = 0; i < model.personAddresses.length; i++) {
        //           if (name == model.personAddresses[i]) {
        //               
        //           }
        //           for (var j = 0; j < model.bizAddresses.length; j++) {
        //               
        //           }
        //       }
        //   }
    this.searchPerson = function (firstName) {
        //        debugger;

        for (var i = 0; i < model.personAddresses.length; i++) {
            if (name == model.personAddresses[i]) {
                return model.personAddresses[i].value;
            }

        }

        //           for (var j = 0; j < biz.length; j++) {
        //               if (name == biz[j].value) {
        //                   p.innerHTML = "<h4 class='caps'>Search Results </hv>" + "<h3>" + biz.firstName + " " + biz.lastName + "</h3>" + biz.email + ", " + biz.phone + "<br />" + biz.bizName + ", " + biz.website + "<br /> <hr> <br />";
        //                   world.appendChild(p);
        //               } else{
        //                   p.innerHTML = "<h4 class='caps'>Search Results </hv>Sorry, no addresses match search criteria."
        //                   world.appendChild(p);
        //               }

    }
}


function View(controller) {
    //    this.showAllAddresses = function () {
    //        var world = document.getElementById("addresses");
    //        world.innerHTML = "";
    //        for (var i = 0; 0 < controller.getPersonAddress().length; i++) {
    //            this.showPersonAddresses(i);
    //        }
    //        for (var j = 0; 0 <controller.getBizAddress().length; j++) {
    //            this.showBizAddresses(j);
    //        }
    //    }
    this.showAllPerson = function () {
        var world = document.getElementById("personAddresses");
        world.innerHTML = "";
        for (var i = 0; i < controller.getPersonAddress().length; i++) {
            this.showPersonAddresses(i);
        }
    }
    this.showAllBiz = function () {
        var world = document.getElementById("bizAddresses");
        world.innerHTML = "";
        for (var i = 0; i < controller.getBizAddress().length; i++) {
            this.showBizAddresses(i);
        }
    }
    this.showPersonAddresses = function (index) {
        var world = document.getElementById("personAddresses");
        var person = controller.getPersonAddress()[index];
        var p = document.createElement("div");
        p.className = "person";
        p.innerHTML = "<h3>" + person.firstName + " " + person.lastName + "</h3>" + person.email + ", " + person.phone + "<br /> <hr> <br />";
        world.appendChild(p);
    }
    this.showBizAddresses = function (index) {
        var world = document.getElementById("bizAddresses");
        var biz = controller.getBizAddress()[index];
        var p = document.createElement("div");
        p.className = "biz";
        p.innerHTML = "<h3>" + biz.firstName + " " + biz.lastName + "</h3>" + biz.email + ", " + biz.phone + "<br />" + biz.bizName + ", " + biz.website + "<br /> <hr> <br />";
        world.appendChild(p);
    }
    this.createPerson = function () {
        //        debugger;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        c.createPerson(firstName, lastName, email, phone);
        this.showAllPerson();
    }
    this.createBiz = function () {
            //        debugger;
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var bizName = document.getElementById("bizName").value;
            var website = document.getElementById("website").value;
            c.createBiz(firstName, lastName, email, phone, bizName, website);
            this.showAllBiz();
        }
        //    this.showSearch = function (name) {
        //        var world = document.getElementById("displaySearch");
        //        var p = document.createElement("div");
        //
        //        var biz = controller.getBizAddress();
        //        var person = controller.getPersonAddress();
        //
        //        p.className = "search"
        //        for (var i = 0; i < person.length; i++) {
        //            for (var j = 0; j < person[i].length; j++) {
        //                if (name == person[j]) {
        //                    p.innerHTML = "<h4 class='caps'>Search Results </h4>" + "<h3>" + person.firstName + " " + person.lastName + "</h3>" + person.email + ", " + person.phone + "<br /> <hr> <br />";
        //                    world.appendChild(p);
        //                }
        //            }
        //            //           for (var j = 0; j < biz.length; j++) {
        //            //               if (name == biz[j].value) {
        //            //                   p.innerHTML = "<h4 class='caps'>Search Results </hv>" + "<h3>" + biz.firstName + " " + biz.lastName + "</h3>" + biz.email + ", " + biz.phone + "<br />" + biz.bizName + ", " + biz.website + "<br /> <hr> <br />";
        //            //                   world.appendChild(p);
        //            //               } else{
        //            //                   p.innerHTML = "<h4 class='caps'>Search Results </hv>Sorry, no addresses match search criteria."
        //            //                   world.appendChild(p);
        //            //               }
        //        }
        //        console.log(person[j]);
        ////        console.log(biz);
        //    }
    this.showPersonSearch = function () {
        //        debugger;
        var firstName = document.getElementById("search").value;
        var world = document.getElementById("displaySearch");
        var p = document.createElement("div");
        p.className = "search"
            //        var person = controller.searchPerson(firstName);
            //        c.searchPerson(name);

        p.innerHTML = "<h4 class='caps'>Search Results </h4>" + controller.searchPerson(firstName);
        world.appendChild(p);
    }

}



document.getElementById("newPerson").onclick = function () {
    v.createPerson();
}
document.getElementById("newBiz").onclick = function () {
    v.createBiz();
}
document.getElementById("searchBtn").onclick = function () {
    v.showPersonSearch();
}