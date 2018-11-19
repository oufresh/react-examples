# React and typescript

## Prerequisiti

Occorre installare alcuni pacchetti per poter creare un app react con typescript.
In linea teorica si potrebbe avere tutto in locale nella repository ma ci possono essere problemi con il linter tslint.

```bash
  yarn gloal add typescript tslint craete-react-app
```

## Creazione applicazione

Vogliamo creare l'app **test-ts**, usiamo il comando:

```bash
create-react-app test-ts --scripts-version=react-scripts-ts
```

Questo ci creerà una struttura molto simile a quella di create-react-app per javascript con alcuni file in più.

1. tsconfig.json, è il file di configurzione del transpiler typescript
2. tslint.json, è il file di configurazione del linter

## Installazione di librerie con relativi tipi

Quando si vuole usare una libreria esterna i tipi esportati sono descritti dai file ".d.ts". Se ad esempio utlizziamo redux e react-redux dobbiamo installare i seguenti pacchetti:

```bash
yarn add redux react-redux
```

Per installare le definizioni dei tipi si deve usare lo scope **@types**.

### Jest

Per eseguire i test è consigliato installare le definizioni dei tipi di Jest

```bash
yarn add @types/jest -D
```

### Redux

Per Redux installare i tipi

```bash
yarn add @types/redux @types/react-redux
```

La tipizzazione di Redux non è banale ma in react-redux sono stati fatti molti passi avanti con i tipi "DispatchProp", "AnyAction", ecc ... stessa cosa anche in Redux.
In questo esempio sono stati dichiarati dei semplici tipi di supporto per avere una tipizzazione completa.
Esistono delle librerie che danno supporto in questo senso ad esempio [typesafe-action](https://github.com/piotrwitek/typesafe-actions) però non sono sempre aggiornate. Vanno valutate.


## Setting Visual Studio Code

Può essere utile per non andare in conflitto con le altre app usare dei settings locali al progetto. Se si vuole fare così nella directory .vscode all'interno della root dei sorgenti ci deve essere il file settings.json con le impostazioni di vscode.
Ad esempio:

```json
  "typescript.tsdk": "node_modules\\typescript\\lib",
  "typescript.validate.enable": true
```

In questo caso vogliamo dire a Visual Studio che usiamo il typescript installato nella node_modules locale e che vogliamo la validazione dei sorgenti.
E' utile avere anche il file launch.json per agganciare il debugger di chrome; è lo stesso del progetto javascript.

E' consigliabile disabilatare per l'area di lavoro le estensioni usate specificamente per javascript: EsLint, Flow

## Test

Per eseguire i test possiamo usare jest, innanzi tutto occorre installere i pacchetti necessari per i tipi, il resto è già presente con create-react-app:

```bash
yarn add @types/jest -D
```

Per il test dei componenti React utilizziamo Enzyme

```bash
yarn add -D enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16 react-test-renderer
```

Creare il file **src/setupTests.ts**

```javascript
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
```

import * as React from 'react';
import * as enzyme from 'enzyme';


## Riferimenti

Esempi e guide per typescript e react, tenere sempre sotto occhio le versioni delle librerie usate che spesso non sono aggiornate.

[1]: https://github.com/piotrwitek/react-redux-typescript-guide<br />
[2]: https://github.com/Microsoft/TypeScript-React-Starter<br />
[3]: https://medium.com/@resir014/redux-4-typescript-2-9-a-type-safe-approach-7f073917b803<br />
[4]: https://basarat.gitbooks.io/typescript/docs/types/readonly.html<br />
[5]: https://github.com/piotrwitek/typesafe-actions
