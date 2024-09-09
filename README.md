# Reproduction: Build in watch mode does not regenerate correctly the types

## Describe the bug

When I run `vite` in `build --watch` mode, it does not regenerate correctly the types.

## Reproduction
https://github.com/Lukinoh/repro-build-watch-bug-vite-plugin-dts/

## Steps to reproduce

- `git clone git@github.com:Lukinoh/repro-build-watch-bug-vite-plugin-dts.git`
- `cd repro-build-watch-vite-plugin-dts`
- `npm install`
- `npm run build:watch`

- Open the files
  - `dist/identifier/identifier-list.d.ts`
  - `dist/identifier/identifier-manager.d.ts`
    In both files you have a reference to the `identifier-1`

- Add a new identifier `new Identifier("identifier-2")` in the `src/identifier/identifier-list.ts`
  You can see that only `dist/identifier/identifier-list.d.ts` file was updated correctly.

To have both files updated correctly, you can either restart the `npm run build:watch` or add space in the `src/identifier/identifier-manager.ts`.

The bug is also present when `rollupTypes` is set to `true`.
In that case, the `my-lib.d.ts` is not updated at all.

## System Info

```
System:
  OS: Linux 5.15 Pengwin 12 (bookworm)
  CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
  Memory: 2.74 GB / 11.68 GB
  Container: Yes
  Shell: 5.2.15 - /bin/bash
Binaries:
  Node: 20.14.0 - ~/.local/state/fnm_multishells/21335_1725864564237/bin/node
  Yarn: 1.22.19 - ~/.local/state/fnm_multishells/21335_1725864564237/bin/yarn
  npm: 10.7.0 - ~/.local/state/fnm_multishells/21335_1725864564237/bin/npm
  pnpm: 9.7.0 - ~/.local/state/fnm_multishells/21335_1725864564237/bin/pnpm
  bun: 1.0.1 - ~/.bun/bin/bun
npmPackages:
  @vitejs/plugin-vue: ^5.1.2 => 5.1.3
  vite: ^5.4.1 => 5.4.3
  vite-plugin-dts: ^4.2.1 => 4.2.1
```
