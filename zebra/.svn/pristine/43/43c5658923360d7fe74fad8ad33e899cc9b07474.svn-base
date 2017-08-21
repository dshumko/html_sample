///<reference path='../../include/cobraclient.d.ts'/> 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Address = (function (_super) {
    __extends(Address, _super);
    function Address(arg) {
        _super.call(this, "Address", arguments[0]);
    }
    Object.defineProperty(Address.prototype, "name", {
        /* properties */
        get: function () {
            return this.m_cc.roa.invoke(this, true, "_getname");
        },
        set: function (name) {
            this.m_cc.roa.invoke(this, true, "_setname", "s", name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this.m_cc.roa.invoke(this, true, "_getcity");
        },
        set: function (city) {
            this.m_cc.roa.invoke(this, true, "_setcity", "s", city);
        },
        enumerable: true,
        configurable: true
    });
    /* methods */
    Address.prototype.setAllData = function (name, city) {
        return this.m_cc.roa.invoke(this, true, "setAllData", "ss", name, city);
    };
    return Address;
})(StubBase);
///<reference path='../../include/cobraclient.d.ts'/> 
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(arg) {
        _super.call(this, "Contact", arguments[0]);
    }
    Object.defineProperty(Contact.prototype, "name", {
        /* properties */
        get: function () {
            return this.m_cc.roa.invoke(this, true, "_getname");
        },
        set: function (name) {
            this.m_cc.roa.invoke(this, true, "_setname", "s", name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phone", {
        get: function () {
            return this.m_cc.roa.invoke(this, true, "_getphone");
        },
        set: function (phone) {
            this.m_cc.roa.invoke(this, true, "_setphone", "s", phone);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "age", {
        get: function () {
            return this.m_cc.roa.invoke(this, true, "_getage");
        },
        set: function (age) {
            this.m_cc.roa.invoke(this, true, "_setage", "n", age);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "single", {
        get: function () {
            return this.m_cc.roa.invoke(this, true, "_getsingle");
        },
        set: function (single) {
            this.m_cc.roa.invoke(this, true, "_setsingle", "b", single);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "address", {
        get: function () {
            return new Address(this.m_cc.roa.invoke(this, true, "_getaddress"));
        },
        set: function (address) {
            this.m_cc.roa.invoke(this, true, "_setaddress", "o", address);
        },
        enumerable: true,
        configurable: true
    });
    /* methods */
    Contact.prototype.setAllData = function (name, phone, age, single, Contact) {
        return this.m_cc.roa.invoke(this, true, "setAllData", "ssnbo", name, phone, age, single, Contact);
    };
    return Contact;
})(StubBase);
///<reference path='../../include/cobraclient.d.ts'/> 
var ContactCollection = (function (_super) {
    __extends(ContactCollection, _super);
    function ContactCollection(arg) {
        _super.call(this, "ContactCollection", arguments[0]);
    }
    Object.defineProperty(ContactCollection.prototype, "length", {
        /* properties */
        get: function () {
            return this.m_cc.roa.invoke(this, true, "_getlength");
        },
        set: function (length) {
            this.m_cc.roa.invoke(this, true, "_setlength", "n", length);
        },
        enumerable: true,
        configurable: true
    });
    /* methods */
    ContactCollection.prototype.item = function (index) {
        return new Contact(this.m_cc.roa.invoke(this, true, "item", "n", index));
    };
    ContactCollection.prototype.addItem = function (item) {
        return this.m_cc.roa.invoke(this, true, "addItem", "o", item);
    };
    return ContactCollection;
})(StubBase);
///<reference path='../../include/cobraclient.d.ts'/> 
var ContactBook = (function (_super) {
    __extends(ContactBook, _super);
    function ContactBook(arg) {
        _super.call(this, "ContactBook", arguments[0]);
    }
    /* properties */
    /* methods */
    ContactBook.prototype.getContact = function (name) {
        return new Contact(this.m_cc.roa.invoke(this, true, "getContact", "s", name));
    };
    ContactBook.prototype.getContacts = function () {
        return new ContactCollection(this.m_cc.roa.invoke(this, true, "getContacts"));
    };
    /* callbacks */
    ContactBook.prototype.regist_onAdded = function (callback) {
        if (callback == null)
            this.m_cc.roa.unregisterCallback(this, "onAdded");
        else
            this.m_cc.roa.registerCallback(this, "onAdded", callback);
    };
    return ContactBook;
})(StubBase);
