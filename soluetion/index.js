module.exports = class {
    [Symbol.toStringTag] = '^_^';

    data = [];

    constructor(array) {
        for (let item of array) {
            if (!this.data.includes(item)) {
                this.data.push(item);
            }
        }

        this.toString = this.toString.bind(this);

        return this;
    }

    [Symbol.iterator]() {
        let values = this.data;
        let index = 0;

        return {
            next() {
                if (index < values.length) {
                    let val = values[index];

                    index++;

                    return {value: val, done: false};
                } else return {done: true};
            },
        }
    }

    get size() {
        return this.data.length;
    }

    keys() {
        return this.data;
    }

    values() {
        return this.data;
    }

    entries() {
        return this.data.map(item => [item, item]);
    }

    clear() {
        delete this.data;

        this.data = [];
    }

    add(item) {
        if (!this.data.includes(item)) {
            this.data.push(item);
        }

        return this;
    }

    delete(item) {
        const index = this.data.indexOf(item);

        if (index !== -1) {
            this.data = this.data.splice(index - 1, 1);
        }
    }

    has(item) {
        return this.data.includes(item);
    }

    valueOf() {
        return this;
    }

    forEach(cb, data) {
        data.getValue = function getValue() {
            return data.value;
        }

        cb(data);
    }
}
