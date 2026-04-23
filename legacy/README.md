# Prueba CS Analyst — Duppla

Evaluacion de 30 min con 10 preguntas situacionales para filtrar candidatos al rol de **CS Analyst** (reporta a Felipe).

## Stack

- **Google Forms** → preguntas y recoleccion de respuestas
- **Quilgo** (add-on) → timer de 30 min con auto-submit
- **Google Sheets** → donde caen las respuestas (se crea automaticamente)

## Setup (10 minutos)

### Paso 1 — Crear el Form con Apps Script (2 min)

1. Abre en tu navegador: https://script.google.com
2. Clic en **New project**
3. Borra el codigo de ejemplo y pega todo el contenido de `create_form.gs`
4. Guarda (Ctrl+S), ponle nombre "Crear Prueba CS"
5. Clic en el boton **Run** (arriba). Selecciona la funcion `createDuppleCSForm`
6. Autoriza cuando pida permisos (Google Forms + Google Drive)
7. Abre **View → Logs** (o Ctrl+Enter). Guarda los 3 URLs que imprime:
   - Editor del form
   - URL publica (la que mandas a candidatos)
   - Sheet de respuestas

### Paso 2 — Instalar Quilgo (3 min)

1. Abre el **Editor del form** (URL del paso anterior)
2. Arriba a la derecha, clic en los 3 puntos verticales `⋮`
3. Selecciona **Get add-ons**
4. Busca **Quilgo** e instala
5. Autoriza permisos
6. Regresa al form, clic en `⋮` → **Quilgo** → **Open**
7. Configura:
   - **Timer**: 30 minutes
   - **Auto-submit when time ends**: ON
   - **Show timer to respondent**: ON
   - **Camera/screenshots** (opcional): OFF para simpleza
8. Guarda

### Paso 3 — Probar la prueba (5 min)

1. Abre la URL publica en una ventana incognito
2. Completa con respuestas dummy, verifica que el timer corre
3. Deja pasar el tiempo o envia: confirma que la respuesta llega a la Sheet

### Paso 4 — Enviar a candidatos

- Envia la URL publica
- Indica en el correo: "Dispones de 30 minutos desde que abras el enlace. El timer se activa al abrir."
- Revisa respuestas directamente en la Sheet

## Rubrica sugerida (1-5 por pregunta)

| # | Que buscar (5/5) | Red flag (1/5) |
|---|---|---|
| 1 | Accion concreta en los 5 min + seguimiento posterior | "Escalo a mi lead" o vaguedad |
| 2 | Prioriza, bloquea tiempo, identifica urgente vs importante | Lista desordenada sin logica |
| 3 | Valida, busca info, propone salida sin quemar al cliente | Se escuda en el contrato o promete de mas |
| 4 | Convoca, alinea en paralelo, cierra con dueno por tema | Espera que otra area se mueva |
| 5 | Tono calido, explicacion clara, siguiente paso | Frio, tecnico, o defensivo |
| 6 | Ejemplo concreto con resultado medible | "Varios" sin especificar |
| 7 | Define "como va", busca la data, propone lectura | "Le pido contexto a mi jefe" |
| 8 | Contacta al cliente YA, explica, ayuda a corregir | Lo deja pasar o culpa al cliente |
| 9 | Elige con criterio explicito (ambas opciones son validas) | Indecisa o sin justificacion |
| 10 | Ownership, aprendizaje, accion propia | Victimismo, "otros no hicieron" |

## Archivos

- `create_form.gs` — Apps Script que construye el form
- `README.md` — este archivo
