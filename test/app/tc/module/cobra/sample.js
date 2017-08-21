///<reference path='./../src/cobra_client.ts'/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Address = (function (_super) {
    __extends(Address, _super);
    function Address(arg) {
        _super.call(this, _super.prototype.getClassName.call(this), arguments[0]);
    }
    Object.defineProperty(Address.prototype, "name", {
        /* property */
        get: function () {
            return this.m_cc.roa.invoke(this, true, "getName");
        },
        set: function (name) {
            this.m_cc.roa.invoke(this, true, "setName", "s", name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this.m_cc.roa.invoke(this, true, "getCity");
        },
        set: function (city) {
            this.m_cc.roa.invoke(this, true, "setCity", "s", city);
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
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(arg) {
        _super.call(this, _super.prototype.getClassName.call(this), arguments[0]);
    }
    Object.defineProperty(Contact.prototype, "name", {
        /* property */
        get: function () {
            return this.m_cc.roa.invoke(this, true, "getName");
        },
        set: function (name) {
            this.m_cc.roa.invoke(this, true, "setName", "s", name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phone", {
        get: function () {
            return this.m_cc.roa.invoke(this, true, "getPhone");
        },
        set: function (phone) {
            this.m_cc.roa.invoke(this, true, "setPhone", "s", phone);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "age", {
        get: function () {
            return this.m_cc.roa.invoke(this, true, "getAge");
        },
        set: function (age) {
            this.m_cc.roa.invoke(this, true, "setAge", "n", age);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "single", {
        get: function () {
            return this.m_cc.roa.invoke(this, true, "getSingle");
        },
        set: function (single) {
            this.m_cc.roa.invoke(this, true, "setSingle", "b", single);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "address", {
        get: function () {
            return new Address(this.m_cc.roa.invoke(this, true, "getAddress"));
        },
        set: function (address) {
            this.m_cc.roa.invoke(this, true, "setAddress", "o", address);
        },
        enumerable: true,
        configurable: true
    });
	/* methods */
	Contact.prototype.setAllData = function (name, phone, age, single, address) {
        return this.m_cc.roa.invoke(this, true, "setAllData", "ssnbo", name, phone, age, single, address);
    };
    return Contact;
})(StubBase);
var ContactCollection = (function (_super) {
    __extends(ContactCollection, _super);
    function ContactCollection(arg) {
        _super.call(this, _super.prototype.getClassName.call(this), arguments[0]);
    }
    ContactCollection.prototype.item = function (index) {
        return new Contact(this.m_cc.roa.invoke(this, true, "item", "n", index));
    };
    ContactCollection.prototype.addItem = function (item) {
        return this.m_cc.roa.invoke(this, true, "addItem", "o", item);
    };
    Object.defineProperty(ContactCollection.prototype, "length", {
        get: function () {
            return this.m_cc.roa.invoke(this, true, "getlength");
        },
        enumerable: true,
        configurable: true
    });
    return ContactCollection;
})(StubBase);
var ContactBook = (function (_super) {
    __extends(ContactBook, _super);
    function ContactBook(arg) {
        _super.call(this, _super.prototype.getClassName.call(this), arguments[0]);
        this._onAdded = null;
    }
    /* method */
    ContactBook.prototype.getContact = function (name) {
        return new Contact(this.m_cc.roa.invoke(this, true, "getContact", "s", name));
    };
    ContactBook.prototype.getContacts = function () {
        return new ContactCollection(this.m_cc.roa.invoke(this, true, "getContacts"));
    };
    Object.defineProperty(ContactBook.prototype, "onAdded", {
        get: function () {
            return this._onAdded;
        },
        /* callback */
        set: function (callback) {
            this.m_cc.roa.registerCallback(this, "onAdded", callback);
            this._onAdded = callback;
        },
        enumerable: true,
        configurable: true
    });
    return ContactBook;
})(StubBase);
