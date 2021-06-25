# Stylelint configuration

**Extendable** [Stylelint] configuration.

## Usage

1. Install it firstly with the Node.JS package manager of your choice.\
   Example:

```sh
pnpm install --save-dev stylelint @xeho91/stylelint-config
```

2. Create a **[Stylelint configuration file]**, and extend this project configuration.\
   Example:

```js
// .stylelintrc.js

module.exports = {
	extends: ["@xeho91/stylelint-config"],
};
```

[Stylelint]: https://github.com/stylelint/stylelint
[Stylelint configuration file]: https://stylelint.io/user-guide/configure
