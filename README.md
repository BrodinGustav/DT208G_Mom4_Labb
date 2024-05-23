***Ramschema Webbsida***

**Översikt
Denna webbapplikation är utformad för att visa ett ramschema för kurser inom webbutveckling. Den tillåter användare att filtrera kurserna och sortera dem efter olika kolumner.

**Komponenter***

1. Diagram Component
Filer:
diagram.component.ts
diagram.component.html
diagram.component.css

Beskrivning:
diagram.component.ts innehåller TypeScript-koden för metoder som hanterar sortering och filtrering av kurser.
diagram.component.html innehåller HTML-strukturen för webbsidan, inklusive tabellen som visar kurserna.
diagram.component.css innehåller CSS-stilar för att formatera tabellen och andra delar av webbsidan.

2. Models Component
Filer:
kurser.interface.ts
Beskrivning:
kurser.interface.ts definierar ett interface Kurser som används för att representera kursobjekt.

3. Service Component
Filer:
ramschema.service.ts
Beskrivning:
ramschema.service.ts är en Angular service som hanterar HTTP-anrop för att hämta data för ramschemat från en extern källa.

4. Global CSS
Filer:
style.css
Beskrivning:
style.css innehåller globala CSS-regler som tillämpas på hela webbapplikationen, till exempel stilregler för <body>-elementet.

**Installation och Användning
För att köra denna webbapplikation lokalt, följ dessa steg:

Klona detta repository till din lokala dator.
Öppna en terminal och navigera till den klonade katalogen.
Kör npm install för att installera alla nödvändiga beroenden.
Starta sedan utvecklingsservern genom att köra ng serve.
Öppna en webbläsare och navigera till http://localhost:4200/ för att visa webbapplikationen.
