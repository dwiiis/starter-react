# starter-react React + TypeScript + Vite

starter project react app
this project structure inspired from https://github.com/arifszn/reforge.git

### Credentials

- **Email:** `eve.holt@reqres.in`
- **Password:** `password`

## Usage

- Clone the project and change directory.

  ```shell
  git clone
  cd starter-react
  ```

- Install dependencies.

  ```shell
  npm install
  ```

- Run dev server.

  ```shell
  npm run dev
  ```

- Finally, visit [`http://localhost:5173`](http://localhost:5173)

## Config

Settings including app name, theme color, meta tags, etc. can be controlled from one single file **`config.ts`** located at the project's root.

```ts
//config.ts
const CONFIG = {
  appName: '',
  helpLink: '',
  enablePWA: true,
  theme: {
    accentColor: '#818cf8',
    sidebarLayout: 'mix',
    showBreadcrumb: true,
  },
  metaTags: {
    title: '',
    description: 'Starter React App',
    imageURL: 'logo.svg',
  },
};

export default CONFIG;
```
