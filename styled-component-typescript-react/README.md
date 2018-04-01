#Esempio React con Typescript

##Semplici componenti e stili

###Componenti con file di stile css
I componenti possono avere uno stile definito in un proprio file css, ad esempio il componente Hello.tsx che importa il Hello.css. Gli stili sono definiti nel file css relativo attraverso la definizione di classi css. I nomi delle classi sono arbitari e quindi devono essere fatti con attenzione.
Per utlizzare lo stile è suffciente l'import del file.
```
import './Hello.css';
```

###Componenti con styled-components
Per utilizzare gli styled components installare styled.components con npm
```
npm install --save styled-components
```
Ai fini di utlizzare questa libreria con typescript è conveniente creare una directory theme e all'interno:

1.  Definire una interface ThemeInterface con le proprietà del tema dello stile che vorremo usare (ad esempio un colore di base per le scritte) nel file theme.ts.
2.  Ridefinire come const la styled function che specifica il tipo di style component con tema definito prima nel file styled-component.ts.
3.  Esportare un tema base nel file index.ts che verrà poi importato.

I componenti che utilizzano questo styled-component della nostra app dovranno avere la riga 

```
import styled from '../theme/styled-components';
```

e definire quindi lo stile così ad esempio:

```
const HelloStyled = styled.div`
  color: ${props => props.theme.primaryColor};
  font-family: 'Helvetica';
  font-weight: bold;
  font-size: 1.8rem;
`;
```
Come si vede nell'esempio di Hello2.tsx abbiamo usato il tema per far arrivare attraverso il context del component il colore della scritta.

Sono commentati gli esempi in cui si ha una classe di default usata ad esempio in un css, una classe passata come proprietà del componente (opzionale) e l'insieme delle due.
Si deve tenere conto che il tema va a fre l'override di eventuali proprietà già specificate nello styled component. La stessa cosa vale per la classe di default che in questo caso sarebbe la prima ad essere definita e la prima a subire override.

Per applicare il tema in App.tsx si deve importare esso stesso e il ThemeProvider definito in precedenza.

```
import { ThemeProvider } from './view/theme/styled-components';
import { theme } from './view/theme';
```

Nella funzione di render si deve racchiudere il componenente o componenti o containers con il tag

```
<ThemeProvider theme={theme}>
  <Containers Inizio app />
</ThemeProvider>
```
